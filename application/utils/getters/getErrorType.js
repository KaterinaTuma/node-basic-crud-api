/**
 * @typedef {import('../../types').ErrorType} ErrorType
 */

/**
 * @function getErrorType
 * @param {Error} error
 * @returns {ErrorType} errorType
 */

export const getErrorType = (error) => {
  const errorMessage = error.message.toLowerCase();
  const isNotfoundError = (
    errorMessage.includes('not found')
  );
  if (isNotfoundError) return 'notfound';

  const isValidationError = (
    errorMessage.includes('validation')
  );
  if (isValidationError) return 'validation';

  return 'server';
};
