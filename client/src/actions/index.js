export const authAdmin = payload => ({
  type: "AUTH_ADMIN",
  payload
});

export const identifyUser = () => ({
  type: "IDENTIFY_USER_REQUEST"
});

export const sendMessage = payload => ({
  type: "SEND_MESSAGE_REQUEST",
  payload
});
