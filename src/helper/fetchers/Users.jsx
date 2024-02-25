import { myAxiosJson } from "../https";



export function getAllUsers(params) {
  let url = 'user';
  if (params) {
    url += `?${new URLSearchParams(params).toString()}`;
  }
  return myAxiosJson(url);
}