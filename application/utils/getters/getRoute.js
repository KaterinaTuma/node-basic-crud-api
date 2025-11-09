import { routes } from '../../routes.js';

/**
 * @typedef {import('../../types').Route} Route
 * @typedef {import('../../types').Request} Request
 */

const PARAM_BY_URL_DICT = {
  '/api/users': 'id',
};

/**
 * @function getRoute
 * @param {Request} req
 * @returns {Route | null}
 */

export const getRoute = (req) => {
  const reqURL = req.url ?? '';
  const reqMethod = req.method ?? '';

  if (!reqURL || !reqMethod) return null;

  /* get route without pathParams */
  const currentRoute = routes.find((route) => (
    route.endpoint === reqURL &&
    route.method === reqMethod
  ));
  if (currentRoute) return currentRoute;

  /* get route with params */
  const urlParts = reqURL.split('/').filter(Boolean);
  const baseUrl = '/' + urlParts.slice(0, -1).join('/');
  const paramName = PARAM_BY_URL_DICT[baseUrl];
  if (!paramName) return null;
  const fullURL = `${baseUrl}/:${paramName}`;
  const currentRouteWithParam = routes.find((route) => (
    route.endpoint === fullURL &&
    route.method === reqMethod
  ));
  if (currentRouteWithParam) return currentRouteWithParam;

  return null;
};
