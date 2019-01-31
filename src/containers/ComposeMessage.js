import { connect } from "react-redux";
import ComposeMessage from "../components/ComposeMessage";
import { sendMessage } from "../actions/ChatActions";

const mapDispatchToProps = dispatch => ({
  send: (message, author = "Me") => {
    dispatch(sendMessage(message, author));
  }
});

export const NewMessage = connect(
  () => ({}),
  mapDispatchToProps
)(ComposeMessage);
