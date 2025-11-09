/**********************************************
  Global
**********************************************/

import { IncomingMessage as Request } from 'http';
import { ServerResponse as Response } from 'http';
import { UUID } from 'crypto';

export type {
  Request,
  Response,
};

/**********************************************
  Enums
**********************************************/

type ReqMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

export type ErrorType =
  | 'notfound'
  | 'validation'
  | 'server';

/**********************************************
  Route
**********************************************/

export type Route = {
  method: ReqMethod;
  endpoint: string;
  handler: (req: Request, res: Response) => Promise<void>;
};

/**********************************************
  Utils
**********************************************/

export type ParsedJSON = {
  [key: string]: string;
};

/**********************************************
  User
**********************************************/

export type User = {
  id: UUID;
  username: string;
  age: number;
  hobbies: string[];
};

/************************************
  Schema
************************************/

export type PropType =
  | string
  | number
  | boolean
  | object;

export type Schema = {
  type: PropType;
  propCount?: number;
  requiredProps?: string[];
  props?: { [key: string]: Schema }
  pattern?: RegExp;
  enum?: PropType[];
};

/**********************************************
  Deps
**********************************************/

import { Model } from './model.js';

export type Deps = {
  model: Model;
};

/**********************************************
  Service
**********************************************/

type Id = UUID | string;
type IsDeleted = boolean;

export type Service = {
  getUsers: () => Promise<User[]>;
  getUserById: (id: Id) => Promise<User>;
  createUser: (user: Omit<User, 'id'>) => Promise<User>;
  updateUser: (id: Id, user: Partial<User>) => Promise<User>;
  deleteUser: (id: Id) => Promise<IsDeleted>
};

/***********************************/