import actions from "../actionTypes";

export const getMessages = () => ({
  type: actions.GET_MESSAGES_REQUEST
});

export const deleteMessage = payload => ({
  type: actions.DELETE_MESSAGE_REQUEST,
  payload
});

export const updateMessage = payload => ({
  type: actions.UPDATE_MESSAGE_REQUEST,
  payload
});
