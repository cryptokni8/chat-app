import * as types from "../constants/ActionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case types.MESSAGE_RECEIVED:
    case types.SEND_MESSAGE:
      let { id, message, author } = action;
      return state.concat([
        { id, message, author }
      ]);
    default:
      return state;
  }
};

export default messages;
