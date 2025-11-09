/**
 * @function checkJSON
 * @param {string} json
 * @throws {Error} Validation error: invalid JSON
 * @returns {boolean} isChecked
 */

export const checkJSON = (json) => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    throw new Error('Validation error: invalid JSON');
  }
};
