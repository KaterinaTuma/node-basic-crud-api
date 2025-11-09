/**********************************************
  Users
**********************************************/

import { initDeps } from './service.js';
import { initService } from './service.js';

const userDeps = initDeps();
const userService = initService(userDeps);

/**********************************************
  Service
**********************************************/

export const service = userService;

/*********************************************/
