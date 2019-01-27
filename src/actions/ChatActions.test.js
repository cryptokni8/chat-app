import * as types from "../constants/ActionTypes";
import { outgoingMessage, addUser } from "./ChatActions";

describe("send a new message", () => {
  it("should create an action for new message with id zero", () => {
    const message = "Hello";
    const author = "Test User";
    const action = {
      type: types.SEND_MESSAGE,
      message,
      author,
      id: 0
    };
    expect(outgoingMessage(message, author)).toEqual(action);
  });
    
  it("should create an action for new user with id zero", () => {
    const name = "Test User";
    const action = {
      type: types.ADD_USER,
      name,
      id: 0
    };
    expect(addUser(name)).toEqual(action);
  });
});
