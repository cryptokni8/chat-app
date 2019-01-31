import React from "react";
import PropTypes from "prop-types";

const ComposeMessage = props => {
  let textInput;
  return (
    <section id="new-message">
      <textarea
        onKeyPress={e => {
          if (e.key === "Enter") {
            props.send(textInput.value);
            textInput.value = "";
          }
        }}
        ref={node => (textInput = node)}
      />
    </section>
  );
};

ComposeMessage.propTypes = {
  send: PropTypes.func.isRequired
};

export default ComposeMessage;
