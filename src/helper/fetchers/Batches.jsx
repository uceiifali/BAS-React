import myAxiosInstance from "../https";

export const getAllBatches = () => myAxiosInstance("batches").then(data=> data.data.batches).catch(err=> console.log(err));
export const addBatche = (data) => myAxiosInstance.post("batches", data);
export const updateBatche = (batcheId, data) =>
  myAxiosInstance.patch(`batches/${batcheId}`, data);
export const deleteBatche = (batcheId) =>
  myAxiosInstance.delete(`batches/${batcheId}`);
