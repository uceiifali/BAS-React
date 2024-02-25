import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllClients,
  getClient
} from "../../helper/fetchers/Clients";

export const useGetAllClients = () => {
  const query = useQuery("client", getAllClients);

  return query;
};
export const useGetClient = (id) => {
  const query = useQuery(['clientById', id],() => getClient(id),
  { enabled: !!id });

  return query;
};
