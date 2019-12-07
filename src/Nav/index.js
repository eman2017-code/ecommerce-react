import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SearchProducts from "../SearchProducts";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import Button from "@material-ui/core/Button";
import Cart from "../Cart";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  // log out method
  logout = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/logout",
      {
        credentials: "include"
      }
    );
    const parsedLogoutResponse = await response.json();
    if (response.ok) {
      this.setState({
        loggedIn: false
      });
      console.log("they are logged out");
    } else {
      console.log(parsedLogoutResponse);
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

  // logout={this.logout}

  //   <Route
  //   path="/register-login"
  //   render={props => (
  //     <RegisterLogin
  //       {...props}
  //       login={this.login}
  //       register={this.register}
  //     />
  //   )}
  // />

  render() {
    return (
      <Route
        exact
        strict
        render={() => {
          return (
            <div>
              <div className="container">
                <CenterFocusStrongIcon fontSize="large" color="primary" />
                <Link to="/home">
                  <Button color="primary">Home</Button>
                </Link>
                <Link to="/products-user">
                  <Button color="primary">Products</Button>
                </Link>
                <SearchProducts />
                <Cart logout={this.logout} />
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Nav;
