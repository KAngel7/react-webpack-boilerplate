import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://18.140.198.64:8081/api/v1/auth',
});

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
