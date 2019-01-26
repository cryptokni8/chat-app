import * as types from "../constants/ActionTypes";

let nextMessageId = 0;
let nextUserId = 0;

export const outgoingMessage = (message, author) => ({
  type: types.SEND_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const incomingMessage = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name
});

export const allUsers = users => ({
  type: types.ALL_USERS,
  users
});
