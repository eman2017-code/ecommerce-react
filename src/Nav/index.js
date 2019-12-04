import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SearchProducts from "../SearchProducts";
// import iphone11 from "../iphone11Pro.png";
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
        // path="/home"
        exact
        strict
        render={() => {
          return (
            <div className="container">
              <CenterFocusStrongIcon fontSize="large" color="primary" />
              <Link to="/home">
                <Button color="primary">Home</Button>
              </Link>
              <Link to="/products">
                <Button color="primary">Products</Button>
              </Link>
              <Button color="primary">Wish List</Button>
              <Link to="/register-login">
                <Button color="primary">My Account</Button>
              </Link>
              <SearchProducts />
              <LocalMallOutlinedIcon fontSize="large" color="primary" />
              {/* <div className="img">
                <h1>Shop Now</h1>
                <img src={iphone11} alt="Iphone 11 Pro Max" />
                <Icon link name="right arrow" className="arrow" />
              </div> */}
            </div>
          );
        }}
      />
    );
  }
}

export default Nav;
