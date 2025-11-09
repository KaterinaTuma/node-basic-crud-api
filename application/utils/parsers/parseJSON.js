import { checkJSON } from '../checks.js';

/**
 * @typedef {import('../../types.js').Request} Request
 * @typedef {import('../../types.js').ParsedJSON} ParsedJSON
 */

/**
 * @function parseJSON
 * @param {Request} req
 * @returns {Promise<ParsedJSON>}
 */

export const parseJSON = async (req) => {
  let rawJSON = '';
  for await (const chunk of req) {
    rawJSON += String(chunk);
  }
  checkJSON(rawJSON);
  const parsedJSON = JSON.parse(rawJSON);
  return parsedJSON;
};
