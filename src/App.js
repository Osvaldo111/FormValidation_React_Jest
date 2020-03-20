import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  messageDisplay = message => {
    this.setState({ message: message });
  };
  render() {
    return (
      <div>
        <Form messageFunc={this.messageDisplay}></Form>
        <Message message={this.state.message}></Message>
      </div>
    );
  }
}

export default App;
