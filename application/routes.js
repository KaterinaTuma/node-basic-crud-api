// import { parseJSON } from './parsers/parseJSON.js';
// import { schema } from './validation/schema.js';
// import { validate } from './validation/validate.js';
import { service } from './diContainer.js';
// import { getBody } from './utils/getters.js';
import { parseJSON } from './utils/parsers.js';
import { schema } from './validation/schema.js';
import { validate } from './validation/validate.js';

/**
 * @typedef {import('./types').Route} Route
 * @typedef {import('./types').User} User
 */

const headers = { 'Content-Type': 'application/json' };

/** @type {Route[]} */

export const routes = [

  /**
   * @method GET
   * @route /api/users
   * @description Getting all users
   */

  {
    method: 'GET',
    endpoint: '/api/users',
    handler: async (_, res) => {
      const users = await service.getUsers();
      const resData = JSON.stringify(users);
      res.writeHead(200, headers).end(resData);
      return;
    },
  },

  /**
   * @method GET
   * @route /api/users/:id
   * @description Getting user by id
   */

  {
    method: 'GET',
    endpoint: '/api/users/:id',
    handler: async (req, res) => {
      const urlParts = req.url?.split('/') ?? [];
      const pathParam = urlParts[urlParts.length - 1] ?? '';
      const user = await service.getUserById(pathParam);
      const resData = JSON.stringify(user);
      res.writeHead(200, headers).end(resData);
      return;
    },
  },

  /**
   * @method POST
   * @route /api/users
   * @description Creating user
   */

  {
    method: 'POST',
    endpoint: '/api/users',
    handler: async (req, res) => {
      const parsedUser = /** @type {object} */(await parseJSON(req));
      validate(parsedUser, schema.user);
      const user = /** @type {Omit<User, 'id'>} */(parsedUser);
      const createdUser = await service.createUser(user);
      const resData = JSON.stringify(createdUser);
      res.writeHead(201, headers).end(resData);
      return;
    },
  },
];
