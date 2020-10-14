import axios from 'axios';
import { getAuthToken } from '../auth';

const axiosInstance = axios.create({
  baseURL: 'http://18.140.198.64:8081/api/v1/users',
});

export const register = (email, password, firstName, lastName) => {
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
