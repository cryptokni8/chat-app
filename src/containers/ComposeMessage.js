import { connect } from "react-redux";
import ComposeMessage from "../components/ComposeMessage";
import { outgoingMessage } from "../actions/ChatActions";

const mapDispatchToProps = dispatch => ({
  send: (message, author) => {
    dispatch(outgoingMessage(message, author));
  }
});

export const NewMessage = connect(
  () => ({}),
  mapDispatchToProps
)(ComposeMessage);
