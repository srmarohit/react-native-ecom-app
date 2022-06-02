export const LOG_IN = "login";

export const LOG_OUT = "logout";

export const SIGN_UP = "signup";

export const signup = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const login = (payload) => ({
  type: LOG_IN,
  payload,
});

export const logout = (payload) => ({
  type: LOG_OUT,
});
