import API from "./Api";

export const createToken = payload => {
  return API.post("/api/tokens", payload);
};
