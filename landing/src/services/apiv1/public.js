import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://18.140.198.64:8081/api/v1/public',
});

export const getCoinPairs = async () => {
  return axiosInstance.get('/coin_pairs');
};
