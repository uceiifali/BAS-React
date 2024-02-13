import myAxiosInstance from "../https";

export const userLogin = async (userData) => {
  return myAxiosInstance.post("/user/login", userData);
};
