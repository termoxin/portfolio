import axios from "axios";

let API = {};

API.client = axios.create({
  baseURL: "/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

API.generateCustomAPI = (token = "", params = {}, config = {}) => {
  return axios.create({
    baseURL: "/",
    timeout: 10000,
    params,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      token
    },
    config
  });
};

API.get = (path, params = {}) => {
  if (!params.hasOwnProperty("headers")) {
    params.headers = {};
    params.headers.token = "";
  }

  const token = params.headers.token ? params.headers.token : "";

  return API.generateCustomAPI(token, params.params)
    .get(path)
    .then(response => response.data);
};

API.post = (path, payload) => {
  return API.client.post(path, payload).then(response => response.data);
};

API.put = (path, params) => {
  if (!params.hasOwnProperty("headers")) {
    params.headers = {};
    params.headers.token = "";
  }

  const token = params.headers.token ? params.headers.token : "";
  const payload = JSON.parse(JSON.stringify(params));

  delete payload.headers;

  return API.generateCustomAPI(token, {}, params)
    .put(path, payload)
    .then(response => response.data);
};

API.delete = (path, params) => {
  if (!params.hasOwnProperty("headers")) {
    params.headers = {};
    params.headers.token = "";
  }

  const token = params.headers.token ? params.headers.token : "";

  return API.generateCustomAPI(token, params.params)
    .delete(path)
    .then(response => response.data);
};

export default API;
