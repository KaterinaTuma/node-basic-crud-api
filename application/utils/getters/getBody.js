/**
 * @typedef {import('../../types').Request} Request
 */

/**
 * @function getBody
 * @param {Request} req
 * @throws {Error} Invalid JSON
 * @returns {Promise<any>}
 */

export const getBody = async (req) => {
  let body = '';

  for await (const chunk of req) {
    body += chunk;
  }

  try {
    return JSON.parse(body);
  } catch {
    throw new Error('Invalid JSON');
  }
};
