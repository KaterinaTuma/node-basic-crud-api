/**********************************************
  Imports
**********************************************/

import { createServer } from 'http';
import { getRoute } from './utils/getters.js';
import { getErrorType } from './utils/getters.js';
import { getErrorStatusCode } from './utils/getters.js';

/**
 * @typedef {import('./types').Request} Request
 * @typedef {import('./types').Response} Response
 */

/**********************************************
  Setting
**********************************************/

const headers = { 'Content-Type': 'application/json' };

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 4000;

const serverOpts = {
  port: PORT,
  host: HOST,
};

/**********************************************
  Handlers
**********************************************/

/**
 * @function handleError
 * @param {Error} error
 * @param {Response} res
 * @returns {void}
 */

const handleError = (error, res) => {
  const errorType = getErrorType(error);
  const statusCode = getErrorStatusCode(errorType);
  const isServerError = errorType === 'server';
  if (isServerError) error.message = `Server error: ${error.message}`;
  const errorMessageJSON = JSON.stringify(error.message);
  console.error(error.message);
  res.writeHead(statusCode, headers).end(errorMessageJSON);
};

/**
 * @function handleServerRequest
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */

const handleServerRequest = async (req, res) => {
  try {
    const route = getRoute(req);
    const url = req.url ?? '';
    if (!route) throw new Error(`Route ${url} not found`);
    await route.handler(req, res);
  } catch (error) {
    const isErrorInstance = error instanceof Error;
    const caughtError = (
      isErrorInstance
        ? error
        : new Error(String(error))
    );
    handleError(caughtError, res);
  }
};

/**
 * @function handleServerListen
 * @returns {void}
 */

const handleServerListen = () => {
  const url = `http://${HOST}:${PORT}`;
  const message = `Server running on ${url}`;
  console.info(message);
};

/**********************************************
  Server
**********************************************/

const server = createServer(handleServerRequest);
server.listen(serverOpts, handleServerListen);

/*********************************************/
