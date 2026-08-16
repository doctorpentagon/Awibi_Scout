import { Router } from 'express';
import health from './health.routes.js';
import entries from './entries.routes.js';
import search from './search.routes.js';
import visuals from './visuals.routes.js';
import governance from './governance.routes.js';
import read from './read.routes.js';
import cases from './cases.routes.js';

const router = Router();

router.use(health);
router.use(entries);
router.use(search);
router.use(visuals);
router.use(governance);
router.use(read);
router.use(cases);

export default router;
