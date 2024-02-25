import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllBatches,
  addBatche,
  updateBatche,
  deleteBatche,
} from "../../helper/fetchers/Batches";

export const useGetAllBatches = () => {
  const query = useQuery("batche", getAllBatches);

  return query;
};

export const useAddBatche = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation((data) => addBatche(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("batche");
      onSuccess()
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useUpdateBatche = (onSuccess, id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updateBatche(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("batche");
      onSuccess()
    },
    onError: (error) => {
      // Handle error
    },
  });
};
export const useDeleteBatche = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteBatche, {
    onSuccess: () => {
      queryClient.invalidateQueries("batche");
    },
    onError: (error) => {
      // Handle error
    },
  });
};
