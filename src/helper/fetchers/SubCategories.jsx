import { myAxiosJson } from "../https";

export const getAllSubCategories = (categoryId) =>
myAxiosJson(`category/${categoryId}/subcategory`);

export const addSubCategory = (categoryId, data) =>
myAxiosJson.post(`category/${categoryId}/subcategory`, data);

export const updateSubCategory = (categoryId,subId, data) =>
myAxiosJson.patch(`category/${categoryId}/subcategory/${subId}`, data);



export const deleteSubCategory = ([categoryId, subId]) => myAxiosJson.delete(`category/${categoryId}/subcategory/${subId}`);
