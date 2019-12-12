import React from "react";
import { Button, Form, Label, Divider, Checkbox } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from "../Nav";
import { Redirect } from "react-router-dom";

class RegisterLogin extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      admin: false,
      action: "login",
      loggedIn: false,
      loggedInUser: null
    };
  }

  // register route
  register = async registerInfo => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/register",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(registerInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLoginResponse = await response.json();
    // check if the user is an admin
    if (parsedLoginResponse.data.admin === true) {
      this.setState({
        loggedIn: true,
        admin: true,
        loggedInUser: parsedLoginResponse.data
      });
    } else {
      // if they are not an admin
      if (response.ok) {
        this.setState({
          logged: true,
          admin: false,
          loggedInUser: parsedLoginResponse.data
        });
      } else {
      }
    }
  };

  // login route
  login = async loginInfo => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/login",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // parse the reponse
    const parsedLoginResponse = await response.json();
    if (parsedLoginResponse.data.admin === true) {
      this.setState({
        loggedIn: true,
        admin: true,
        loggedInUser: parsedLoginResponse.data
      });
    } else {
      // if they are not an admin
      if (response.ok) {
        this.setState({
          logged: true,
          admin: false,
          loggedInUser: parsedLoginResponse.data
        });
      } else {
        // print out the error
        console.log(parsedLoginResponse);
      }
    }
  };

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
      this.login({
        // this is checking the email
        email: this.state.email,
        // this is checking the password
        password: this.state.password
      });
    } else {
      this.register({
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
    // if they are logged in and an admin
    if (this.state.admin === true && this.state.loggedIn === true) {
      return (
        <Redirect
          to={{
            pathname: "/admin",
            state: { loggedInUser: this.state.loggedInUser }
          }}
        />
      );
    }
    // if they logged in and not an admin
    if (this.state.logged === true) {
      return (
        <Redirect
          to={{
            pathname: "/products",
            state: { loggedInUser: this.state.loggedInUser }
          }}
        />
      );
    }
    return (
      <div>
        <div>
          <Nav />
        </div>
        {/* <div> */}
        <div>
          <Form onSubmit={this.handleSubmit} className="loginRegisterForm">
            {this.state.action === "register" ? (
              <React.Fragment>
                <br></br>
                <Label>Become a Seller:</Label>
                <Checkbox admin="admin" onClick={this.admin} />
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
        {/* </div> */}
      </div>
    );
  }
}

export default RegisterLogin;
