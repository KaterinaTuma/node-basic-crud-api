// import { data } from '../_mock/data.js';
// import { parseJSON } from './parsers/parseJSON.js';
// import { schema } from './validation/schema.js';
// import { validate } from './validation/validate.js';
import { service } from './diContainer.js';

/**
 * @typedef {import('./types').Route} Route
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
      const resData = JSON.stringify({ users });
      res.writeHead(200, headers).end(resData);
      return;
    },
  },

  /**
   * @method GET
   * @route /api/user/:id
   * @description Getting user by id
   */

  {
    method: 'GET',
    endpoint: '/api/user/:id',
    handler: async (req, res) => {
      const urlParts = req.url?.split('/') ?? [];
      const pathParam = urlParts[-1] ?? '';
      const user = await service.getUserById(pathParam);
      const resData = JSON.stringify({ user });
      res.writeHead(200, headers).end(resData);
      return;
    },
  },

  /**
   * @method GET
   * @route /data/care
   * @description Getting care data
   */

  {
    method: 'GET',
    endpoint: '/data/care',
    handler: async (_, res) => {
      const care = data.care;
      const resData = JSON.stringify({ care });
      res.writeHead(statusCode, headers).end(resData);
      return;
    },
  },

  /**
   * @method GET
   * @route /data/cashback
   * @description Getting cashback data
   */

  {
    method: 'GET',
    endpoint: '/data/cashback',
    handler: async (_, res) => {
      const cashback = data.cashback;
      const resData = JSON.stringify({ cashback });
      res.writeHead(statusCode, headers).end(resData);
      return;
    },
  },

  /**
   * @method GET
   * @route /data/clients
   * @description Getting clients data
   */

  {
    method: 'GET',
    endpoint: '/data/clients',
    handler: async (_, res) => {
      const clients = data.clients;
      const resData = JSON.stringify({ clients });
      res.writeHead(statusCode, headers).end(resData);
      return;
    },
  },

  /**
   * @method GET
   * @route /data/meta
   * @description Getting meta data
   */

  {
    method: 'GET',
    endpoint: '/data/meta',
    handler: async (_, res) => {
      const meta = data.meta;
      const resData = JSON.stringify({ meta });
      res.writeHead(statusCode, headers).end(resData);
      return;
    },
  },

  /**
   * @method POST
   * @route /order
   * @description Creating order
   */

  {
    method: 'POST',
    endpoint: '/order',
    handler: async (req, res) => {
      const parsedOrder = await parseJSON(req);
      validate(parsedOrder, schema.order);
      // TODO: db methods
      const isCreated = true;
      const resData = JSON.stringify({ success: isCreated, order: parsedOrder });
      res.writeHead(statusCode, headers).end(resData);
      return;
    },
  },
];
