/**
 * @typedef {import('../../types').ErrorType} ErrorType
 */

const STATUS_CODE_BY_ERROR_TYPE = {
  'notfound': 404,
  'validation': 400,
  'server': 500,
};

/**
 * @function getErrorStatusCode
 * @param {ErrorType} errorType
 * @returns {number} statusCode
 */

export const getErrorStatusCode = (errorType) =>
  STATUS_CODE_BY_ERROR_TYPE[errorType];
