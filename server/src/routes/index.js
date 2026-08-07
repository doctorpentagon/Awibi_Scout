import { Router } from 'express';
import health from './health.routes.js';
import entries from './entries.routes.js';
import search from './search.routes.js';
import visuals from './visuals.routes.js';
import governance from './governance.routes.js';

const router = Router();

router.use(health);
router.use(entries);
router.use(search);
router.use(visuals);
router.use(governance);

export default router;
