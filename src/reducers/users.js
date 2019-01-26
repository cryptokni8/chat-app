import * as types from "../constants/ActionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      let { id, name } = action;
      return state.concat([{ id, name }]);
    case types.ALL_USERS:
      return action.users;
    default:
      return state;
  }
};

export default users;
