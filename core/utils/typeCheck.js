export const isString = (value) => {
  return typeof value === 'string';
};

export const isNumber = (value) => {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
};

export const isObject = (value) => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};
