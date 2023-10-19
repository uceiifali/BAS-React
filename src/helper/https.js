
// 406

import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../Config/Config';

axios.defaults.baseURL = config.apiGateway?.URL;
// Add a request interceptor
axios.interceptors.request.use(async config => {
  // Add an Authorization header to the request
 
  return config;
},
  error => {
    return Promise.reject(error);
  }
);
// Add a response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 406) {
      toast.error(error.response.data?.message)
    }

    return Promise.reject(error);
  }
);
export default axios;