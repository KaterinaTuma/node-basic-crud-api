import { routes } from '../../routes.js';

/**
 * @typedef {import('../../types').Route} Route
 * @typedef {import('../../types').Request} Request
 */

/**
 * @function getRoute
 * @param {Request} req
 * @returns {Route | null}
 */

export const getRoute = (req) => {
  const reqURL = req.url ?? '';
  const reqMethod = req.method ?? '';
  const currentRoute = routes.find((route) => (
    route.endpoint === reqURL &&
    route.method === reqMethod
  ));
  return currentRoute ?? null;
};
