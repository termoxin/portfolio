export const getProjects = () => ({
  type: "GET_PROJECTS_REQUEST"
});

export const createProject = payload => ({
  type: "CREATE_PROJECT_REQUEST",
  payload
});

export const deleteProject = payload => ({
  type: "DELETE_PROJECT_REQUEST",
  payload
});

export const updateProjects = payload => ({
  type: "UPDATE_PROJECTS_REQUEST",
  payload
});
