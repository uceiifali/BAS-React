import myAxiosInstance from "../https";

export const userLogin = async (userData) => {
  return await myAxiosInstance.post("/user/login", userData);
};
