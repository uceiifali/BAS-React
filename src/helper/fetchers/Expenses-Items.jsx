import myAxiosInstance from "../https";

export const getAllExpensesItems = () => myAxiosInstance("batches");

export const addExpensesItem = (data) => myAxiosInstance.post("batches", data);

export const updateExpensesItem = (expensesID, data) =>
  myAxiosInstance.patch(`batches/${expensesID}`, data);

export const deleteExpensesItem = (expensesID) =>
  myAxiosInstance.delete(`batches/${expensesID}`);
