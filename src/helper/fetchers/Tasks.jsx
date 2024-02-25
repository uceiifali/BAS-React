import { myAxiosJson } from "../https";

export const getAllTasks = () => myAxiosJson("category");
export const addTask = (data) => myAxiosJson.post("category", data);
export const updateTask = (taskId, data) =>
  myAxiosJson.patch(`category/${taskId}`, data);
export const deleteTask = (taskId) =>
  myAxiosJson.delete(`category/${taskId}`);
