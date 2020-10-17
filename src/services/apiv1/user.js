import axios from 'axios';
import { getAuthToken } from '../auth';

const axiosInstance = axios.create({
  baseURL: 'http://18.140.198.64:8081/api/v1/users',
});

export const signUp = (email, password, firstName, lastName) => {
  return axiosInstance.post('/register', {
    email,
    first_name: firstName,
    last_name: lastName,
    password,
  });
};

export const getProfile = () => {
  return axiosInstance.get('/me', {
    headers: {
      Authorization: getAuthToken(),
    },
  });
};

export const genTfa = () => {
  return axiosInstance.get('/tfa', {
    headers: {
      Authorization: getAuthToken(),
    },
  });
};

export const verifyTfa = (code, secret) => {
  return axiosInstance.post(
    '/verify-tfa',
    {
      code,
      secret,
    },
    {
      headers: {
        Authorization: getAuthToken(),
      },
    },
  );
};

export const confirm = () => {
  return axiosInstance.get('/confirm', {
    headers: {
      Authorization: getAuthToken(),
    },
  });
};
