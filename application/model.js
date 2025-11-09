import { randomUUID } from 'crypto';

/**
 * @typedef {import('./types').User} User
 */

/**********************************************
  Users
**********************************************/

/** @type {User[]} */
const users = [];

/**********************************************
  Model
**********************************************/

export class Model {

  /**
   * @method getUsers
   * @description Getting all users
   * @returns {User[]}
   */

  getUsers() {
    return users;
  }

  /**
   * @method getUserById
   * @description Getting user by id
   * @param {string} id
   * @throws {Error} User not found
   * @returns {User}
   */

  getUserById(id) {
    const user = users.find((user) => user.id === id);
    if (!user) throw new Error('User not found');
    return user;
  }

  /**
   * @method createUser
   * @description Create user
   * @param {Omit<User, 'id'>} user
   * @returns {User}
   */

  createUser(user) {
    const id = randomUUID();
    const fullUser = { ...user, id };
    users.push(fullUser);
    return fullUser;
  }

  /**
   * @method updateUser
   * @description Update user by id
   * @param {string} id
   * @param {Partial<User>} userForUpdate
   * @throws {Error} User not found
   * @returns {User}
   */

  updateUser(id, userForUpdate) {
    const userFromDb = users.find((user) => user.id === id) ?? null;
    if (!userFromDb) throw new Error('User not found');
    const updatedUser = { ...userFromDb, ...userForUpdate };
    const index = users.findIndex((user) => user.id === id);
    users[index] = updatedUser;
    return updatedUser;
  }

  /**
   * @method deleteUser
   * @description Delete user by id
   * @param {string} id
   * @throws {Error} User not found
   * @returns {boolean} isDeleted
   */

  deleteUser(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) throw new Error('User not found');
    const deletedUser = users.splice(index, 1);
    return Boolean(deletedUser.length);
  }
}

/*********************************************/
