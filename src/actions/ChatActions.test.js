import * as types from "../constants/ActionTypes";
import { sendMessage, receiveMessage, addUser } from "./ChatActions";

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
    expect(sendMessage(message, author)).toEqual(action);
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

  it("should create an action for new received msg id zero", () => {
    const author = "Test User";
    const message = "Hey";
    const action = {
      type: types.MESSAGE_RECEIVED,
      message,
      author,
      id: 1
    };
    expect(receiveMessage(message, author)).toEqual(action);
  });
});
