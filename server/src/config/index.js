import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const serverRoot = path.resolve(here, '..', '..');

/**
 * Runtime configuration. Every value has a working default so the app starts
 * with no .env file — "easy access to the project" is a stated requirement.
 */
export const config = Object.freeze({
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5188,
  dataDir: process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(serverRoot, 'data'),
  corsOrigin: (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),

  // Release stamps carried through to every response, so a clinician can always
  // tell which version of the content answered them.
  release: {
    content: 'AWIBI-SCOUT-CONTENT-2026.08.R2',
    imaging: 'AWIBI-SCOUT-IMAGING-2026.08.R1',
    schema: '4.0.0',
  },

  // Reference tool, not a diagnostic device. Shown in the UI footer.
  intendedUse: 'Reference tool for qualified professionals. Not a diagnostic device.',
});

export const isProduction = config.env === 'production';
