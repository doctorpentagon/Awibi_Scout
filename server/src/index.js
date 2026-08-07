import { createApp } from './app.js';
import { config } from './config/index.js';
import { logger } from './lib/logger.js';
import { getRepository } from './data/repository.js';
import { getResolver } from './routes/search.routes.js';

// Load the library AND build the search index at boot, not on first request —
// a clinician should never pay the index-build cost mid-search.
getRepository();
getResolver();

const app = createApp();
const server = app.listen(config.port, () => {
  logger.info(`Awibi Scout server listening on http://localhost:${config.port}`, {
    env: config.env,
    release: config.release,
  });
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    logger.info(`${signal} received, closing`);
    server.close(() => process.exit(0));
  });
}
