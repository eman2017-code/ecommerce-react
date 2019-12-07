import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SearchProducts from "../SearchProducts";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import Button from "@material-ui/core/Button";
import Cart from "../Cart";
import MainPage from "../MainPage";
import ListProductUser from "../ListProductUser";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: true
    };
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
      console.log("logged out");
    } else {
    }
  };

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
                <Link to="/register-login">
                  <Button color="primary">Login/Sign Up</Button>
                </Link>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Nav;
