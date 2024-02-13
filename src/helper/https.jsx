// 406

import axios from "axios";
import { toast } from "react-toastify";
import config from "../Config/Config";

// axios.defaults.baseURL = config.apiGateway?.URL;


export const myAxiosInstance = axios.create({
  baseURL: config.apiGateway?.URL,
});

// Add a request interceptor
myAxiosInstance.interceptors.request.use(
  async (config) => {
    // Add an Authorization header to the request
    // exp on auth
    // if (localStorage.getItem("SOME_TOKEN")) {
      // config.headers.append(
      //   "authes",
      //   "BSA__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IzNjA0Zjk2OGQ4YTU4ZDk3MzUxZSIsImZpcnN0TmFtZSI6ImpvaG4iLCJsYXN0TmFtZSI6ImRvZSIsInVzZXJOYW1lIjoiam9obmRvZUBCc2ExMiIsInJvbGUiOiLZhdiv2YrYsSIsInN0YXR1cyI6ItmF2KrYtdmEIiwiaWF0IjoxNzA3ODI1NzQzLCJleHAiOjE3MDc5MTIxNDN9.myQpwtn-vVHGg9byuzkCZHzaIffIc5srNfPMGA_-NBM"
      // );
      config.headers['authes'] = "BSA__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IzNjA0Zjk2OGQ4YTU4ZDk3MzUxZSIsImZpcnN0TmFtZSI6ImpvaG4iLCJsYXN0TmFtZSI6ImRvZSIsInVzZXJOYW1lIjoiam9obmRvZUBCc2ExMiIsInJvbGUiOiLZhdiv2YrYsSIsInN0YXR1cyI6ItmF2KrYtdmEIiwiaWF0IjoxNzA3ODI1NzQzLCJleHAiOjE3MDc5MTIxNDN9.myQpwtn-vVHGg9byuzkCZHzaIffIc5srNfPMGA_-NBM";
    // }
    // config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add a response interceptor
myAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 406) {
      toast.error(error.response.data?.message);
    }

    return Promise.reject(error);
  }
);
export default myAxiosInstance;
