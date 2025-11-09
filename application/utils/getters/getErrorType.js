/**
 * @typedef {import('../../types').ErrorType} ErrorType
 */

/**
 * @function getErrorType
 * @param {Error} error
 * @returns {ErrorType} errorType
 */

export const getErrorType = (error) => {
  const isNotfoundError = (
    error.message.includes('not found')
  );
  if (isNotfoundError) return 'notfound';

  const isValidationError = (
    error.message.includes('validation')
  );
  if (isValidationError) return 'validation';

  return 'server';
};
