import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SearchProducts from "../SearchProducts";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import Button from "@material-ui/core/Button";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

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
                <Link to="/products-admin">
                  <Button color="primary">Products</Button>
                </Link>
                <SearchProducts />
                <Link to="/register-login">
                  <LocalMallOutlinedIcon fontSize="large" color="primary" />
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
