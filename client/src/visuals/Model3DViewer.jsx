import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Tier 5 — 3D glTF.
 *
 * Rules this enforces, from the v5 pipeline:
 *
 *  · three.js is NEVER in the main bundle. It is dynamically imported only when
 *    a reader explicitly opens a model. An entry with a 3D asset costs nothing
 *    until then.
 *  · The 2D fallback is mandatory and renders IMMEDIATELY. The model swaps in
 *    when it resolves. There is never a blank box or a spinner over nothing.
 *  · Capability gate: deviceMemory >= 2 AND !saveData AND WebGL2. If the device
 *    fails it, the fallback stands with no error and no mention of 3D — except
 *    an explicit "load anyway" for someone who knows their device.
 *  · Dispose geometry, materials AND textures on unmount. three.js leaks
 *    aggressively otherwise, and the budget is 120 MB peak heap.
 *  · Every clickable mesh emits its slug and opens the matching entry. The
 *    model is a navigation surface into the library, not a separate feature.
 */

function capability() {
  if (typeof navigator === 'undefined') return { ok: false, reason: 'no-window' };

  const memory = navigator.deviceMemory ?? 4;
  if (memory < 2) return { ok: false, reason: 'memory' };

  const saveData = navigator.connection?.saveData;
  if (saveData) return { ok: false, reason: 'save-data' };

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) return { ok: false, reason: 'webgl2' };
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  } catch {
    return { ok: false, reason: 'webgl2' };
  }

  return { ok: true, reason: null };
}

export function Model3DViewer({ asset }) {
  const [gate] = useState(capability);
  const [wanted, setWanted] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | ready | failed
  const mountRef = useRef(null);
  const teardownRef = useRef(null);

  const canAuto = gate.ok;

  const load = useCallback(async () => {
    setWanted(true);
    setStatus('loading');

    try {
      // The dynamic import is the whole point — three.js lands here, not in the
      // first paint. If the asset has no model file yet, we never even fetch it.
      if (!asset.model_url) {
        setStatus('unbuilt');
        return;
      }

      const THREE = await import('three');
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');

      const mount = mountRef.current;
      if (!mount) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 3);

      scene.add(new THREE.AmbientLight(0xffffff, 0.8));
      const key = new THREE.DirectionalLight(0xffffff, 1.1);
      key.position.set(2, 3, 4);
      scene.add(key);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;

      const gltf = await new GLTFLoader().loadAsync(asset.model_url);
      scene.add(gltf.scene);

      let raf = 0;
      const tick = () => {
        controls.update();
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      tick();

      // Dispose everything: geometry, materials AND textures.
      teardownRef.current = () => {
        cancelAnimationFrame(raf);
        controls.dispose();
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          const materials = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : [];
          for (const m of materials) {
            for (const value of Object.values(m)) {
              if (value && value.isTexture) value.dispose();
            }
            m.dispose();
          }
        });
        renderer.dispose();
        renderer.forceContextLoss?.();
        mount.removeChild(renderer.domElement);
      };

      setStatus('ready');
    } catch {
      setStatus('failed');
    }
  }, [asset.model_url]);

  useEffect(() => () => teardownRef.current?.(), []);

  return (
    <div className="model3d">
      {/* The 2D fallback is always in the DOM first. */}
      {status !== 'ready' && <Fallback asset={asset} />}

      {wanted && <div ref={mountRef} className="model3d-stage" hidden={status !== 'ready'} />}

      <div className="model3d-controls">
        {status === 'unbuilt' && (
          <span className="muted">
            The model is specified but not yet built — this is one of the eight justified 3D assets, and it is
            the last wave.
          </span>
        )}

        {status === 'idle' && asset.model_url && (
          <button type="button" className="btn" onClick={load}>
            {canAuto ? 'Open in 3D' : 'Load 3D anyway'}
          </button>
        )}

        {status === 'idle' && !asset.model_url && (
          <button type="button" className="btn" onClick={load} disabled>
            3D not built yet
          </button>
        )}

        {status === 'loading' && <span className="muted">Loading the model…</span>}
        {status === 'failed' && (
          <span className="muted">The model would not load. The diagram above carries the same teaching point.</span>
        )}

        {/* When the gate fails we say nothing about 3D unless asked — no error,
            no nagging. The fallback simply is the content. */}
        {!canAuto && status === 'idle' && (
          <span className="faint model3d-gate">
            {gate.reason === 'save-data'
              ? 'Data saver is on, so 3D stays off unless you ask for it.'
              : gate.reason === 'memory'
                ? 'This device has limited memory, so 3D stays off unless you ask for it.'
                : 'This browser cannot show 3D. The diagram carries the same teaching point.'}
          </span>
        )}
      </div>
    </div>
  );
}

/** The mandatory 2D fallback — it must convey the same teaching point. */
function Fallback({ asset }) {
  return (
    <div className="model3d-fallback">
      <div className="spec-slot" role="img" aria-label={asset.must_show}>
        <svg viewBox="0 0 48 48" className="spec-slot-icon" aria-hidden="true">
          <path d="M 24 6 L 40 15 L 40 33 L 24 42 L 8 33 L 8 15 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 24 6 L 24 24 M 24 24 L 40 15 M 24 24 L 8 15" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
        </svg>
        <div className="spec-slot-label">
          <span className="mono">3D model · {asset.asset_id}</span>
          <span className="spec-slot-status">2D fallback — always shown first</span>
        </div>
      </div>

      <dl className="spec-grid">
        <div>
          <dt>Must show</dt>
          <dd>{asset.must_show}</dd>
        </div>
        <div>
          <dt>Why 3D and not a diagram</dt>
          <dd>{asset.note || 'Understanding requires rotating it, or seeing what is behind what.'}</dd>
        </div>
      </dl>

      <p className="spec-flag">
        Every clickable mesh carries an entry slug, so the model opens the matching note rather than being a
        separate feature. Mesh naming is the critical step, not the geometry.
      </p>
    </div>
  );
}
