import { badRequest, unprocessable } from '../lib/errors.js';

/**
 * Evaluator for the entry `logic` tree. The corpus uses a closed set of ops —
 * add, sub, mul, div, pow, sum, var, const — and nothing else is permitted.
 * No eval, no dynamic dispatch outside this table.
 */
const OPS = {
  add: (args) => args.reduce((a, b) => a + b, 0),
  sum: (args) => args.reduce((a, b) => a + b, 0),
  sub: (args) => args.slice(1).reduce((a, b) => a - b, args[0]),
  mul: (args) => args.reduce((a, b) => a * b, 1),
  div: (args) => args.slice(1).reduce((a, b) => {
    if (b === 0) throw unprocessable('Division by zero — check the inputs.');
    return a / b;
  }, args[0]),
  pow: (args) => args.slice(1).reduce((a, b) => a ** b, args[0]),
};

function evaluate(node, vars, depth = 0) {
  if (depth > 40) throw unprocessable('Logic tree too deep.');
  if (node == null || typeof node !== 'object' || !node.op) {
    throw unprocessable('Malformed logic node.');
  }
  if (node.op === 'const') return Number(node.args[0]);
  if (node.op === 'var') {
    const key = node.args[0];
    const value = vars[key];
    if (value === undefined || value === null || Number.isNaN(Number(value))) {
      throw badRequest(`Missing value for “${key}”.`);
    }
    return Number(value);
  }
  const fn = OPS[node.op];
  if (!fn) throw unprocessable(`Unsupported operation “${node.op}”.`);
  return fn((node.args || []).map((a) => evaluate(a, vars, depth + 1)));
}

function round(value, decimals = 2, mode = 'half_up') {
  if (!Number.isFinite(value)) return value;
  const f = 10 ** decimals;
  if (mode === 'half_up') return Math.round((value + Number.EPSILON) * f) / f;
  if (mode === 'floor') return Math.floor(value * f) / f;
  if (mode === 'ceil') return Math.ceil(value * f) / f;
  return Math.round(value * f) / f;
}

/** Coerce and range-check one declared input. */
function coerce(input, raw) {
  if (raw === undefined || raw === null || raw === '') {
    if (input.required) throw badRequest(`${input.label} is required.`);
    return input.default ?? null;
  }
  if (input.type === 'boolean') return raw === true || raw === 'true' || raw === 1 || raw === '1' ? 1 : 0;
  if (input.type === 'enum') {
    if (!input.options?.includes(raw)) {
      throw badRequest(`${input.label} must be one of: ${input.options?.join(', ')}.`);
    }
    return raw;
  }
  const n = Number(raw);
  if (!Number.isFinite(n)) throw badRequest(`${input.label} must be a number.`);
  if (input.min != null && n < input.min) {
    throw badRequest(`${input.label} is below the accepted range (${input.min}–${input.max ?? '∞'} ${input.unit || ''}).`.trim());
  }
  if (input.max != null && n > input.max) {
    throw badRequest(`${input.label} is above the accepted range (${input.min ?? '0'}–${input.max} ${input.unit || ''}).`.trim());
  }
  return n;
}

/** Which band an output value falls into. Bands are [min, max). */
function bandFor(output, value) {
  for (const band of output.bands || []) {
    const aboveMin = band.min == null || value >= band.min;
    const belowMax = band.max == null || value < band.max;
    if (aboveMin && belowMax) return band;
  }
  return null;
}

export function runCalculation(entry, rawValues = {}) {
  if (!entry.logic || !Object.keys(entry.logic).length) {
    throw unprocessable('This entry does not carry a calculation.');
  }

  const vars = {};
  const echoed = {};
  for (const input of entry.inputs || []) {
    const value = coerce(input, rawValues[input.key]);
    echoed[input.key] = value;
    vars[input.key] = typeof value === 'string' ? value : Number(value);
  }

  const raw = evaluate(entry.logic, vars);

  const outputs = (entry.outputs || []).map((output) => {
    const value = round(raw, output.decimals ?? 2, output.rounding);
    const band = bandFor(output, value);
    return {
      key: output.key,
      label: output.label,
      unit: output.unit,
      value,
      display: `${value}${output.unit ? ` ${output.unit}` : ''}`,
      interpretation: band?.label ?? output.interpretation ?? null,
      action: band?.action ?? null,
      bands: output.bands ?? [],
    };
  });

  return {
    entry_id: entry.id,
    title: entry.title,
    inputs: echoed,
    outputs,
    // Warnings and limitations ride along with every result. They are not
    // optional decoration — the corpus treats them as part of the answer.
    warnings: entry.warnings || [],
    limitations: entry.limitations || [],
    governance: entry.governance || null,
    computed_at: new Date().toISOString(),
  };
}
