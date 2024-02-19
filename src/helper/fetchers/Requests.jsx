import myAxiosInstance from "../https";

export const addRequest = (data) => myAxiosInstance.post("/request/", data);
export const getAllRequests = () => myAxiosInstance("/request/");
export const getRequestsWithProjectType = (type) =>myAxiosInstance(`/request?projectType=${type}`);
