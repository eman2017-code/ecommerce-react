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
        <div className="topNav">
          <h2>Welcome to Ecommerce Store</h2>
        </div>
        <div className="topNavButtons">
          <Button secondary size="large">
            Wish List
          </Button>
          <Link to="/register-login">
            <Button secondary size="large">
              My Account
            </Button>
          </Link>
        </div>
        <div className="bottomNav">
          <Icon.Group size="huge" className="logo">
            <Icon name="puzzle" />
          </Icon.Group>
          <h1 className="websiteName">PRO - SELL</h1>
          <Link to="/home">
            <Button secondary size="huge">
              Home
            </Button>
          </Link>
          <Link to="/products">
            <Button secondary size="huge">
              Products
            </Button>
          </Link>
          <SearchProducts />
          <Button>
            <Icon name="shopping cart" size="huge" />
          </Button>
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
                  <Label>First Name:</Label>
                  <Divider hidden />
                  <Form.Input
                    type="email"
                    name="email"
                    // value={this.state.email}
                    // onChange={this.handleChange}
                  ></Form.Input>
                  <Label>Last Name:</Label>
                  <Divider hidden />
                  <Form.Input
                    type="email"
                    name="email"
                    // value={this.state.email}
                    // onChange={this.handleChange}
                  ></Form.Input>
                </React.Fragment>
              ) : null}

              <Label>Email:</Label>
              <Divider hidden />
              <Form.Input
                type="text"
                name="email"
                // value={this.state.full_name}
                // onChange={this.handleChange}
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
