import myAxiosInstance from "../https";

export const addRequest = (data) => myAxiosInstance.post("/request/", data);
