import { myAxiosJson } from "../https";

export const getAllCategories = () => myAxiosJson("category");
export const addCategory = (data) => myAxiosJson.post("category", data);
export const updateCategory = (categoryId, data) =>
  myAxiosJson.patch(`category/${categoryId}`, data);
export const deleteCategory = (categoryId) =>
  myAxiosJson.delete(`category/${categoryId}`);
