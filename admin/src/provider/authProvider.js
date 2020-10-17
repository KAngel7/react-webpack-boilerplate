import axios from 'axios';

const AUTH_TOKEN_STRING = 'AUTH_TOKEN';

const axiosInstance = axios.create({
    baseURL: 'http://18.140.198.64:8081/api/v1/auth',
    });

let authToken;

export const setAuthToken = token => {
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

  export const login = async (email, password, code = '') => {
    return axiosInstance.post('/login', {
      code,
      email,
      password,
    });
  };
  
  export const validate = async (email, password) => {
    return axiosInstance.post('/validate', {
      email,
      password,
    });
  };

export default {
  // called when the user attempts to log in
  login: async ({ email, password, code = '' }) => {
      try{
          const {status, data} = await login(email, password);
          console.log(status, data);
          if (status === 200){
            setAuthToken(data.access_token);
            return Promise.resolve(status);
          }
        return Promise.resolve(status);
      }catch(ex) {
          if (ex.request){
              const { status, data} = ex.response;
              return Promise.reject(data.message);
          }
          return Promise.reject("Something's wrong !!!");
      }
  },
  // called when the user clicks on the logout button
  logout: () => {
      clearAuthToken();
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
      if (status === 401 || status === 403) {
          clearAuthToken();
          return Promise.reject();
      }
      return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
      return getAuthToken() ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};