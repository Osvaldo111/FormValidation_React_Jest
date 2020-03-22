import React, { Component } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Form is Incomplete!",
      value: true
    };
  }

  messageDisplay = message => {
    this.setState({ message: message });
  };

  checkValid = value => {
    // console.log(value, "************************");
    return value;
  };

  render() {
    return (
      <div>
        <Form isFormValid={this.checkValid}></Form>
        <Message message={this.state.message}></Message>
      </div>
    );
  }
}

export default App;
