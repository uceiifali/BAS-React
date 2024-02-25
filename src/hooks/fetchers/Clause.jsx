import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllClauses,
  addClause,
  updateClause,
  deleteClause,
} from "../../helper/fetchers/Clause";

export const useGetAllClauses = () => {
  const query = useQuery("clause", getAllClauses);
  return query;
};

export const useAddClause = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(addClause, {
    onSuccess: () => {
      queryClient.invalidateQueries("clause");
      onSuccess()
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateClause = (onSuccess,id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updateClause(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("clause");
      onSuccess()
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteClause = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteClause, {
    onSuccess: () => {
      queryClient.invalidateQueries("clause");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
