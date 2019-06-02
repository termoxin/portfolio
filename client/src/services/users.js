import API from "./Api";

export const getUser = (username, token) => {
  return API.get("/api/users", { params: { username }, headers: { token } });
};

export const changePassword = ({ username, password, id }) => {
  return API.put("/api/users", { username, password, headers: { token: id } });
};
