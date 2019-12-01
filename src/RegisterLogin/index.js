import React from "react";
import {
  Button,
  Icon,
  Form,
  Label,
  Divider,
  Checkbox
} from "semantic-ui-react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SearchProducts from "../SearchProducts";

class RegisterLogin extends React.Component {
  constructor() {
    super();

    this.state = {
      full_name: "",
      email: "",
      password: "",
      isSeller: false,
      action: "login"
    };
  }

  //   // handle change method for each section user inputs
  //   handleChange = e => {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.loginRegister();
  //   };

  //   loginRegister = () => {
  //     if (this.state.action === "login") {
  //       this.props.login({
  //         full_name: this.state.full_name,
  //         password: this.state.password
  //       });
  //     } else {
  //       this.props.register({
  //         full_name: this.state.full_name,
  //         email: this.state.email,
  //         password: this.state.password
  //       });
  //     }
  //   };

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
        <h3>ecommerce site</h3>
        <div className="top">
          <Button secondary>Wish List</Button>
          <Link to="/register-login">
            <Button secondary>My Account</Button>
          </Link>
        </div>
        <p>logo</p>
        <div className="nav">
          <Button>
            <Icon name="shopping cart" />
          </Button>
          <SearchProducts />
          <Link to="/home">
            <Button secondary>Home</Button>
          </Link>
          <Link to="/products">
            <Button secondary>Products</Button>
          </Link>
        </div>
        <div>
          <div>
            <Form onSubmit={this.handleSubmit}>
              {this.state.action === "register" ? (
                <React.Fragment>
                  <br></br>
                  <Label>Become a Seller:</Label>
                  <Checkbox />
                  <br></br>
                  <br></br>
                  <Label>Email:</Label>
                  <Divider hidden />
                  <Form.Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></Form.Input>
                </React.Fragment>
              ) : null}

              <Label>Full Name:</Label>
              <Divider hidden />
              <Form.Input
                type="text"
                name="full_name"
                value={this.state.full_name}
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
