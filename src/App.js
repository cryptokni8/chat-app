import React, { Component } from "react";
import "./App.css";
import { NewMessage } from "./containers/ComposeMessage";
import { MessageList } from "./containers/MessageList";
import { Users } from "./containers/Users";

class App extends Component {
  render() {
    return (
      <div id="container">
        <Users />
        <section id="main">
          <MessageList />
          <NewMessage />
        </section>
      </div>
    );
  }
}

export default App;
