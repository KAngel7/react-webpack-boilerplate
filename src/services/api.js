import axios from 'axios';

export const getData = async () => {
  return axios.get('http://pb-api.herokuapp.com/bars');
};
