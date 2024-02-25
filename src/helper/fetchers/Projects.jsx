import { myAxiosJson } from "../https";

export const getAllProjects = () => myAxiosJson("projects").then(data => data?.data?.projects);
export const addProject = (data) => myAxiosJson.post("projects", data);
export const updateProject = (projectId, data) =>
  myAxiosJson.patch(`projects/${projectId}`, data);
export const deleteProject = (projectId) =>
  myAxiosJson.delete(`projects/${projectId}`);
