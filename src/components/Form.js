import React, { Component, useCallback } from "react";
import { PropTypes } from "prop-types";

class Form extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.verification = this.verification.bind(this);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      name: "",
      email: "",
      phone: "",
      blogURL: "",
      message: "",
      formSpy: true
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

  submitForm() {
    const theProps = this.props;

    this.setState(
      {
        isEmailValid: false,
        isNameValid: false,
        isPhoneValid: false,
        isUrlValid: false
      },
      () => {
        this.verification(results => {
          const { name, email, phone, url } = results;
          this.setState(
            {
              isNameValid: name,
              isEmailValid: email,
              isPhoneValid: phone,
              isUrlValid: url
            },
            () => {
              const {
                isNameValid,
                isEmailValid,
                isPhoneValid,
                isUrlValid
              } = this.state;

              if (isNameValid && isEmailValid && isPhoneValid && isUrlValid) {
                theProps.isFormValid(true);
              } else {
                theProps.isFormValid(false);
              }
            }
          );
        });
      }
    );
  }

  verification(callback) {
    const name = this.verifyName();
    const email = this.verifyEmail();
    const phone = this.verifyPhone();
    const url = this.verifyURL();
    const results = {
      name: name,
      email: email,
      phone: phone,
      url: url
    };
    callback(results);
  }

  verifyName = () => {
    const { name } = this.state;
    var letters = /^[A-Za-z]+$/;
    const lengthName = name.length;
    if (lengthName >= 3 && lengthName <= 30 && name.match(letters)) {
      return true;
    } else {
      return false;
    }
  };

  verifyEmail = () => {
    const { email } = this.state;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(emailPattern)) {
      return true;
    } else {
      return false;
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
      return true;
    } else {
      return false;
    }
  };

  verifyURL = () => {
    const { blogURL } = this.state;
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (blogURL.match(regex)) {
      return true;
    } else {
      return false;
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
            <input
              type="text"
              value={name}
              onChange={this.handleChangeName}
              className="name"
            />
          </h3>
          <h3>
            Email:
            <input
              type="text"
              value={email}
              onChange={this.handleChangeEmail}
              className="email"
            />
          </h3>
          <h3>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={this.handleChangePhone}
              className="phone"
            />
          </h3>
          <h3>
            Blog URL:
            <input
              type="text"
              value={blogURL}
              onChange={this.handleChangeBlogURL}
              className="url"
            />
          </h3>
          <div className="small-6 small-centered text-center columns">
            <a
              href="#"
              className="button success expand round text-center"
              onClick={this.submitForm}
              className="button"
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
