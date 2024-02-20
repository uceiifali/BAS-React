import myAxiosInstance from "../https";

export const addRequest = (data) => myAxiosInstance.post("/request/", data);
export const getAllRequests = () => myAxiosInstance("/request/");
export const getRequestsWithProjectType = (type) =>
  myAxiosInstance(`/request?projectType=${type}`);
export const getDesignRequestsWithStatus = (status) =>
  myAxiosInstance(`/request?status=${status}&projectType=1`);
export const getDesignRequestsWithid = (id) =>
  myAxiosInstance(`/request/${id}`);

//   http://bsa2011.com:5000/api/v1/request?status=0&projectType=1
