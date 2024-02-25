import  { myAxiosJson } from "../https";

export const getAllClients = () => myAxiosJson("client").then(data=> data?.data?.clients).catch(err=> console.log(err));
export const getClient = (clientId) => myAxiosJson(`client/${clientId}`).then(data=> data?.data?.client).catch(err=> console.log(err));
// export const addBatche = (data) => myAxiosInstance.post("batches", data);
// export const updateBatche = (batcheId, data) =>
//   myAxiosInstance.patch(`batches/${batcheId}`, data);
// export const deleteBatche = (batcheId) =>
//   myAxiosInstance.delete(`batches/${batcheId}`);
