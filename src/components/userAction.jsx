import axios from 'axios';

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AUTH_USER = "AUTH_USER";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit) {
  const data = axios.post(USER_URL + "/register", dataToSubmit);
  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function loginUser(dataToSubmit) {
  const data = axios.post(USER_URL + "/login", dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function logoutUser() {
  const data = axios.post(USER_URL + "/logout");
  return {
    type: LOGOUT_USER,
    payload: data,
  };
}

export function authUser() {
  const data = axios.post(USER_URL + "/auth");
  return {
    type: AUTH_USER,
    payload: data,
  };
}