const LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };
const threshold = LEVELS[process.env.LOG_LEVEL] ?? LEVELS.info;

function emit(level, message, meta) {
  if (LEVELS[level] > threshold) return;
  const line = { t: new Date().toISOString(), level, message };
  if (meta !== undefined) line.meta = meta;
  const stream = level === 'error' ? process.stderr : process.stdout;
  stream.write(`${JSON.stringify(line)}\n`);
}

export const logger = {
  error: (message, meta) => emit('error', message, meta),
  warn: (message, meta) => emit('warn', message, meta),
  info: (message, meta) => emit('info', message, meta),
  debug: (message, meta) => emit('debug', message, meta),
};
