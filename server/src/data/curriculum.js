/**
 * The reading order.
 *
 * Search answers a question you already know how to ask. It cannot tell you
 * what you have never heard of, and in a library of this size the things you
 * have never heard of are exactly the dangerous ones. This module imposes a
 * STABLE, TEACHABLE ORDER on every entry so the library can be read straight
 * through — like reading a dictionary cover to cover — with a position you can
 * return to.
 *
 * Ordering rules, in priority order:
 *   1. PART — broad stage of learning, foundations before diseases before
 *      specialties. A reader should meet "what a macule is" before "melanoma".
 *   2. CHAPTER — the domain within that part.
 *   3. Within a chapter, HAZARD first (critical entries earlier, because a
 *      reader who stops halfway should have met the dangerous material), then
 *      title alphabetically so the order never shifts between builds.
 *
 * The order must be DETERMINISTIC. A reader on entry 412 of 320 must find the
 * same entry tomorrow, so no randomness and no dependence on file order.
 */

/**
 * Parts, in the order a reader should meet them. Each lists the domains it
 * claims. A domain claimed by an earlier part is not re-claimed later.
 */
const PARTS = [
  {
    key: 'foundations',
    title: 'Part I — Foundations',
    blurb: 'The vocabulary and mechanisms everything else is built on. Read this first even if it looks basic; later parts assume it.',
    domains: ['anatomy', 'physiology', 'biochemistry', 'pathology', 'immunology', 'pharmacology'],
  },
  {
    key: 'assessment',
    title: 'Part II — Assessment and Investigation',
    blurb: 'How to take a history, examine a patient, and choose and read a test.',
    domains: ['laboratory_medicine', 'radiology', 'microbiology'],
  },
  {
    key: 'emergencies',
    title: 'Part III — Emergencies',
    blurb: 'What kills quickly. Placed early on purpose — a reader who stops here has still met the material that matters most.',
    domains: ['emergency_medicine', 'critical_care', 'trauma', 'toxicology'],
  },
  {
    key: 'medicine',
    title: 'Part IV — Medicine, System by System',
    blurb: 'The medical specialties, organ system by organ system.',
    domains: [
      'cardiovascular', 'respiratory', 'renal', 'endocrine', 'neurology',
      'hepatology', 'haematology', 'infectious_disease', 'rheumatology',
      'dermatology', 'oncology', 'nutrition',
    ],
  },
  {
    key: 'surgery',
    title: 'Part V — Surgery and Procedures',
    blurb: 'Surgical disease, operative principles and the practical procedures.',
    domains: [
      'general_surgery', 'orthopaedics', 'urology', 'vascular', 'neurosurgery',
      'cardiothoracic', 'plastics_burns', 'anaesthesia',
    ],
  },
  {
    key: 'specialties',
    title: 'Part VI — Specialties',
    blurb: 'Obstetrics, paediatrics, psychiatry and the sensory specialties.',
    domains: [
      'obstetrics', 'gynaecology', 'paediatrics', 'neonatology', 'psychiatry',
      'ophthalmology', 'ent', 'dentistry',
    ],
  },
  {
    key: 'practice',
    title: 'Part VII — Practice, Evidence and Public Health',
    blurb: 'Trials that changed practice, communication, ethics and population health.',
    domains: ['public_health', 'community_medicine'],
  },
];

const HAZARD_RANK = { critical: 0, high: 1, moderate: 2, low: 3 };

/** Turn a domain key into a readable chapter name. */
function chapterName(domain) {
  return domain
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Assign each entry to exactly one part and chapter.
 *
 * An entry usually carries several domains. It is placed by the FIRST part
 * whose domain list it matches, walking the parts in reading order, so a
 * cardiology emergency lands in Emergencies rather than Medicine — which is
 * where a reader would expect to meet it.
 */
function placeEntry(entry, domainToPart) {
  const domains = entry.domains || [];
  // Walk the entry's OWN domain order, not the parts order. The first domain an
  // author lists is their declaration of what the entry primarily is, and it
  // must win — otherwise an anaesthesia entry that also touches critical care
  // is filed under Emergencies, which is not where a reader would look for it.
  for (const d of domains) {
    const partKey = domainToPart.get(d);
    if (!partKey) continue;
    const part = PARTS.find((p) => p.key === partKey);
    if (part) return { part, chapter: d };
  }
  // Anything whose domains are unrecognised still has to be reachable, or it
  // becomes invisible to a reader working through the library in order.
  return { part: PARTS[PARTS.length - 1], chapter: domains[0] || 'general' };
}

export function buildCurriculum(entries) {
  const domainToPart = new Map();
  for (const part of PARTS) {
    for (const d of part.domains) {
      if (!domainToPart.has(d)) domainToPart.set(d, part.key);
    }
  }

  const buckets = new Map();
  for (const entry of entries) {
    const { part, chapter } = placeEntry(entry, domainToPart);
    const key = `${part.key}::${chapter}`;
    if (!buckets.has(key)) buckets.set(key, { part, chapter, entries: [] });
    buckets.get(key).entries.push(entry);
  }

  const parts = [];
  let position = 0;
  const order = [];

  for (const part of PARTS) {
    const chapters = [...buckets.values()]
      .filter((b) => b.part.key === part.key)
      .sort((a, b) => a.chapter.localeCompare(b.chapter));
    if (!chapters.length) continue;

    const partOut = { key: part.key, title: part.title, blurb: part.blurb, chapters: [], count: 0 };

    for (const bucket of chapters) {
      const sorted = bucket.entries.sort((a, b) => {
        const h = (HAZARD_RANK[a.hazard] ?? 9) - (HAZARD_RANK[b.hazard] ?? 9);
        if (h !== 0) return h;
        return a.title.localeCompare(b.title);
      });

      const chapterOut = {
        key: bucket.chapter,
        title: chapterName(bucket.chapter),
        start: position + 1,
        count: sorted.length,
        entries: sorted.map((e) => {
          position += 1;
          order.push({ position, id: e.id, slug: e.slug });
          return {
            position,
            id: e.id,
            slug: e.slug,
            title: e.title,
            short_title: e.short_title,
            hazard: e.hazard,
          };
        }),
      };
      partOut.chapters.push(chapterOut);
      partOut.count += chapterOut.count;
    }

    parts.push(partOut);
  }

  const byId = new Map(order.map((o) => [o.id, o.position]));
  const bySlug = new Map(order.map((o) => [o.slug, o.position]));

  return {
    total: order.length,
    parts,
    order,
    positionOf: (idOrSlug) => byId.get(idOrSlug) ?? bySlug.get(idOrSlug) ?? null,
    at: (n) => (n >= 1 && n <= order.length ? order[n - 1] : null),
  };
}
