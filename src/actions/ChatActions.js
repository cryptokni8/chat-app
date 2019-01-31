import {SEND_MESSAGE, MESSAGE_RECEIVED, ADD_USER, ALL_USERS} from "../constants/ActionTypes";

let nextMessageId = 0;
let nextUserId = 0;

export const sendMessage = (message, author) => ({
  type: SEND_MESSAGE,
  id: nextMessageId++,
  message,
  author
});

export const receiveMessage = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
});

export const addUser = name => ({
  type: ADD_USER,
  id: nextUserId++,
  name
});

export const showUsers = users => ({
  type: ALL_USERS,
  users
});
