import axios from 'axios';
// import Config from 'react-native-config';
axios.defaults.baseURL = 'http://10.50.215.146:3001';

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  },
);
