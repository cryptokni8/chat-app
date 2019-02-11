import {SEND_MESSAGE, MESSAGE_RECEIVED} from "../constants/ActionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
    case SEND_MESSAGE:
      let { id, message, author } = action;
      return state.concat(
        { id, message, author }
      );
    default:
      return state;
  }
};

export default messages;
