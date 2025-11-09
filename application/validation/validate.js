/**
 * @typedef {import('../types').ParsedJSON} ParsedJSON
 * @typedef {import('../types').PropType} PropType
 * @typedef {import('../types').Schema} Schema
 */

/**
 * @function validateProp
 * @param {string} key
 * @param {PropType} value
 * @param {Schema} schema
 * @throws {Error} Field name must be of type
 * @throws {Error} Field name must match the pattern
 * @throws {Error} Field name must be one of the allowed values
 * @returns {boolean} isValid
 */

const validateProp = (key, value, schema) => {
  /* Type check */
  const expectedType = schema.type;
  const actualType = typeof value;
  const isArray = Array.isArray(value);
  const isTypeChecked = (
    expectedType === actualType ||
    (isArray && (expectedType === 'array'))
  );
  if (!isTypeChecked) {
    throw new Error(`Validation error: Field ${key} must be ${expectedType}, but it is ${actualType} now`);
  }

  /* Pattern check */
  if (schema.pattern) {
    const pattern = schema.pattern;
    const isPatternChecked = pattern.test(String(value));
    if (!isPatternChecked) {
      throw new Error(`Validation error: Field ${key} must match ${pattern}`);
    }
  }

  /* Enum check */
  if (schema.enum) {
    const isEnumChecked = schema.enum.includes(value);
    if (!isEnumChecked) {
      throw new Error(`Validation error: Field ${key} must be one of the allowed values`);
    }
  }

  return true;
};

/**
 * @function validate
 * @param {ParsedJSON} parsedJSON
 * @param {Schema} schema
 * @throws {Error} Must be an object
 * @throws {Error} Must have count properties
 * @throws {Error} Missing field: name
 * @throws {Error} Unknown field: name
 * @returns {boolean} isValid
 */

export const validate = (parsedJSON, schema) => {
  /* Type check */
  const isObject = typeof parsedJSON === 'object';
  const isNull = parsedJSON === null;
  const isArray = Array.isArray(parsedJSON);
  const isTypeChecked = isObject && !isNull && !isArray;
  if (!isTypeChecked) throw new Error('Validation error: Must be an object');

  /* Required fields check */
  const propKeys = Object.keys(parsedJSON);
  const requiredProps = schema.requiredProps ?? [];
  const absentProps = requiredProps.filter((prop) => !propKeys.includes(prop));
  if (absentProps.length) {
    throw new Error(`Validation error: Missing field: ${absentProps[0]}`);
  }

  /* Property count check */
  const propCount = propKeys.length;
  const isPropCountChecked = propCount === schema.propCount;
  if (!isPropCountChecked) {
    throw new Error(`Validation error: Must have ${schema.propCount} properties`);
  }

  /* Validate object fields */
  for (const [key, value] of Object.entries(parsedJSON)) {
    const propSchema = schema.props?.[key] ?? null;
    if (!propSchema) {
      throw new Error(`Validation error: Unknown field: ${key}`);
    }
    validateProp(key, value, propSchema);
  }

  return true;
};
