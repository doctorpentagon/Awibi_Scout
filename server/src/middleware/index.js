import { HttpError } from '../lib/errors.js';
import { logger } from '../lib/logger.js';
import { isProduction } from '../config/index.js';

/** Wraps an async handler so rejections reach the error handler. */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export function notFoundHandler(req, res) {
  res.status(404).json({
    error: { status: 404, message: `No route for ${req.method} ${req.originalUrl}` },
  });
}

// eslint-disable-next-line no-unused-vars -- Express identifies error handlers by arity
export function errorHandler(err, req, res, _next) {
  const status = err instanceof HttpError ? err.status : 500;
  if (status >= 500) logger.error(err.message, { stack: err.stack, url: req.originalUrl });
  else logger.warn(err.message, { url: req.originalUrl });

  res.status(status).json({
    error: {
      status,
      message: status >= 500 && isProduction ? 'Something went wrong.' : err.message,
      ...(err.details ? { details: err.details } : {}),
    },
  });
}
