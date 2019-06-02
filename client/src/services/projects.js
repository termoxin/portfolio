import API from "./Api";

export const gettingProjects = () => {
  return API.get("api/projects");
};

export const creatingProject = payload => {
  return API.post("api/projects", payload);
};

export const deletingProject = ({ name, token }) => {
  return API.delete("api/projects", {
    params: { name },
    headers: { token }
  });
};

export const updatingProjects = ({ projects, token }) => {
  return API.put("/api/updateProjects", { projects, headers: { token } });
};
