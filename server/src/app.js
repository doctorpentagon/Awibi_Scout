import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middleware/index.js';
import { config, isProduction } from './config/index.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(here, '..', '..', 'client', 'dist');

export function createApp() {
  const app = express();

  app.disable('x-powered-by');
  app.set('etag', 'strong');

  app.use(
    helmet({
      // The client inlines SVG and uses CSS custom properties for theming.
      contentSecurityPolicy: isProduction ? undefined : false,
      crossOriginEmbedderPolicy: false,
    }),
  );
  app.use(compression());
  app.use(express.json({ limit: '256kb' }));
  app.use(
    cors({
      origin: config.corsOrigin.length ? config.corsOrigin : true,
      credentials: false,
    }),
  );
  if (!isProduction) app.use(morgan('dev'));

  app.use('/api', routes);

  // Serve the built client when it exists, so `npm start` gives one URL.
  if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist, { maxAge: isProduction ? '1y' : 0, index: false }));
    app.get(/^(?!\/api).*/, (req, res) => res.sendFile(path.join(clientDist, 'index.html')));
  }

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
