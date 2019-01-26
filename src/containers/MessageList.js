import { connect } from "react-redux";
import MessagesList from "../components/MessageList";

export const MessageList = connect(
  state => ({ messages: state.messages }),
  {}
)(MessagesList);
