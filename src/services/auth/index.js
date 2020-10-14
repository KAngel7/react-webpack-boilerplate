const AUTH_TOKEN_STRING = 'AUTH_TOKEN';
let authToken;

export const saveAuthToken = token => {
  localStorage.setItem(AUTH_TOKEN_STRING, token);
  authToken = token;
};

export const getAuthToken = () => {
  return authToken || localStorage.getItem(AUTH_TOKEN_STRING);
};

export const clearAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN_STRING);
  authToken = undefined;
};
