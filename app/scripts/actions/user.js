/**
 * @module Actions/User
 * @desc Actions for User
 */

import { ActionTypes } from 'constants/index';

/**
 * Login
 *
 * @returns {Object}
 */
export function login() {
  return {
    type: ActionTypes.USER_LOGIN_REQUEST,
  };
}

/**
 * Logout
 *
 * @returns {Object}
 */
export function logOut() {
  return {
    type: ActionTypes.USER_LOGOUT_REQUEST,
  };
}
