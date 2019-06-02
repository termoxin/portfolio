import API from "./Api";

export const gettingMessages = () => {
  return API.get("api/messages");
};

export const sendingMessage = payload => {
  return API.post("api/messages", payload);
};

export const deletingMessage = ({ id, token }) => {
  return API.delete("api/messages", {
    params: { id },
    headers: { token }
  });
};

export const updatingMessage = ({ id, token }) => {
  return API.put("api/messages", {
    id,
    headers: { token }
  });
};
