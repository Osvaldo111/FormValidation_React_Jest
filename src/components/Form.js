import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      name: "",
      email: "",
      phone: "",
      blogURL: "",
      message: ""
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePhone = event => {
    this.setState({ phone: event.target.value });
  };
  handleChangeBlogURL = event => {
    this.setState({ blogURL: event.target.value });
  };

  submitForm = () => {
    Promise.resolve(1)
      .then(() => {
        this.verifyName();
        this.verifyEmail();
        this.verifyPhone();
        this.verifyURL();
      })
      .then(() => {
        const {
          isNameValid,
          isEmailValid,
          isPhoneValid,
          isUrlValid
        } = this.state;
        if (isNameValid && isEmailValid && isPhoneValid && isUrlValid) {
          this.props.messageFunc("Form is Complete!");
        } else {
          this.props.messageFunc("Form is Incomplete!");
        }

        console.log(this.state);
      });
  };

  verifyName = () => {
    const { name } = this.state;
    var letters = /^[A-Za-z]+$/;
    const lengthName = name.length;
    if (lengthName >= 3 && lengthName <= 30 && name.match(letters)) {
      this.setState({ isNameValid: true });
    } else {
      this.setState({ isNameValid: false });
    }
  };

  verifyEmail = () => {
    const { email } = this.state;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(emailPattern)) {
      this.setState({ isEmailValid: true });
    } else {
      this.setState({ isEmailValid: false });
    }
  };

  verifyPhone = () => {
    const { phone } = this.state;
    const lengthPhone = phone.length;
    const firstNum = phone.charAt(0);
    const lastNum = phone.charAt(lengthPhone - 1);
    if (
      lengthPhone === 10 &&
      firstNum != 0 &&
      firstNum !== 1 &&
      lastNum != 0 &&
      lastNum != 1
    ) {
      this.setState({ isPhoneValid: true });
    } else {
      this.setState({ isPhoneValid: false });
    }
  };

  verifyURL = () => {
    const { blogURL } = this.state;
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (blogURL.match(regex)) {
      this.setState({ isUrlValid: true });
    } else {
      this.setState({ isUrlValid: false });
    }
  };
  render() {
    const { name, email, phone, blogURL, message } = this.state;
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>
            Name:
            <input type="text" value={name} onChange={this.handleChangeName} />
          </h3>
          <h3>
            Email:
            <input
              type="text"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </h3>
          <h3>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={this.handleChangePhone}
            />
          </h3>
          <h3>
            Blog URL:
            <input
              type="text"
              value={blogURL}
              onChange={this.handleChangeBlogURL}
            />
          </h3>
          <div className="small-6 small-centered text-center columns">
            <a
              href="#"
              className="button success expand round text-center"
              onClick={this.submitForm}
            >
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
