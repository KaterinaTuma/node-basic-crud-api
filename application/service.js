import { toPartial } from './utils/transforms.js';
import { Model } from './model.js';

/**
 * @typedef {import('./types').Deps} Deps
 * @typedef {import('./types').Service} Service
 * @typedef {import('./types').User} User
 */

/**
 * @function getUsers
 * @param {Deps} deps
 * @returns {Promise<User[]>}
 */

const getUsers = async (deps) => {
  return deps.model.getUsers();
};

/**
 * @function getUserById
 * @param {Deps} deps
 * @param {string} id
 * @returns {Promise<User | null>}
 */

const getUserById = async (deps, id) => {
  return deps.model.getUserById(id);
};

/**
 * @function createUser
 * @param {Deps} deps
 * @param {Omit<User, 'id'>} user
 * @returns {Promise<User>}
 */

const createUser = async (deps, user) => {
  return deps.model.createUser(user);
};

/**
 * @function updateUser
 * @param {Deps} deps
 * @param {string} id
 * @param {Partial<User>} userForUpdate
 * @returns {Promise<User | null>}
 */

const updateUser = async (deps, id, userForUpdate) => {
  return deps.model.updateUser(id, userForUpdate);
};

/**
 * @function deleteUser
 * @param {Deps} deps
 * @param {string} id
 * @returns {Promise<boolean>}
 */

const deleteUser = async (deps, id) => {
  return deps.model.deleteUser(id);
};

/**
 * @function initDeps
 * @returns {Deps}
 */

export const initDeps = () => ({
  'model': new Model(),
});

/**
 * @function initService
 * @param {Deps} deps
 * @returns {Service}
 */

export const initService = (deps) => ({
  'getUsers': toPartial(getUsers, deps),
  'getUserById': toPartial(getUserById, deps),
  'createUser': toPartial(createUser, deps),
  'updateUser': toPartial(updateUser, deps),
  'deleteUser': toPartial(deleteUser, deps),
});
