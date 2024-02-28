import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllExpensesItems,
  addExpensesItem,
  updateExpensesItem,
  deleteExpensesItem,
} from "../../helper/fetchers/Expenses-Items";

export const useGetAllExpensesItems = () => {
  const query = useQuery("batches", getAllExpensesItems);

  return query;
};

export const useAddExpensesItem = (onSuccess) => {
  return useMutation(addExpensesItem, {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateExpensesItem = (onSuccess, id) => {
  return useMutation((data) => updateExpensesItem(id, data), {
    onSuccess,
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteExpensesItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteExpensesItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("batches");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
