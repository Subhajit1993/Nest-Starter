// Axios instance

import axios from 'axios';
import * as process from 'process';

const axiosInstance = axios.create({
  baseURL: process.env.UNIFIED_SERVICE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
