import React from "react";
import { Button, Form, Label, Divider, Checkbox } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from "../Nav";

class RegisterLogin extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      admin: false,
      action: "login"
    };
  }

  // handle change method for each section user inputs
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handle the submit of the form
  handleSubmit = e => {
    e.preventDefault();
    this.loginRegister();
  };

  // isSeller method
  admin = () => {
    this.setState({
      admin: true
    });
  };

  loginRegister = () => {
    if (this.state.action === "login") {
      this.props.login({
        // this is checking the email
        email: this.state.email,
        // this is checking the password
        password: this.state.password
      });
    } else {
      this.props.register({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        admin: this.state.admin,
        password: this.state.password
      });
    }
  };

  switchForm = () => {
    if (this.state.action === "login") {
      this.setState({
        action: "register"
      });
    } else {
      this.setState({
        action: "login"
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <div>
            <Form onSubmit={this.handleSubmit}>
              {this.state.action === "register" ? (
                <React.Fragment>
                  <br></br>
                  <Label>Become a Seller:</Label>
                  <Checkbox onClick={this.admin} />
                  <br></br>
                  <br></br>
                  <Label>First Name:</Label>
                  <Divider hidden />
                  <Form.Input
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                  ></Form.Input>
                  <Label>Last Name:</Label>
                  <Divider hidden />
                  <Form.Input
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                  ></Form.Input>
                </React.Fragment>
              ) : null}

              <Label>Email:</Label>
              <Divider hidden />
              <Form.Input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></Form.Input>

              <Label>Password:</Label>
              <Divider hidden />
              <Form.Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              ></Form.Input>
              <Divider hidden />
              <Button type="Submit">
                {this.state.action === "register" ? "Register" : "Login"}
              </Button>
              <br></br>
              {this.state.action === "register" ? (
                <small>
                  Already have an account? Log in{" "}
                  <span onClick={this.switchForm}>here</span>
                </small>
              ) : (
                <small>
                  Need an account? Sign up{" "}
                  <span onClick={this.switchForm}>here</span>!
                </small>
              )}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterLogin;
