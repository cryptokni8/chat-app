import React from "react";
import PropTypes from "prop-types";

const Message = ({author, message}) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

const MessageList = ({ messages }) => (
  <section id="message-list">
    <ul>
      {messages.map(msg => (
        <Message key={msg.id} {...msg} />
      ))}
    </ul>
  </section>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessageList;
