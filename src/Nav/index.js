import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";
import { Redirect } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.loggedInUser
    };
  }

  render() {
    let ToRenderProduct;
    if (this.state.loggedInUser !== undefined) {
      ToRenderProduct = (
        <Link
          to={{
            pathname: "/products",
            state: { loggedInUser: this.state.loggedInUser }
          }}
        >
          <h2>Products</h2>
        </Link>
      );
    } else {
      ToRenderProduct = (
        <Link
          to={{
            pathname: "/guest"
          }}
        >
          <h2>Products</h2>
        </Link>
      );
    }

    return (
      <div>
        <div id="navBar">
          <h2 className="companyName">PRO - SELL</h2>
          <p className="number">
            {" "}
            <strong> 555 - 555 - 5555 </strong>{" "}
          </p>
          <Link
            to={{
              pathname: "/cart",
              state: {
                loggedInUser: this.state.loggedInUser
              }
            }}
          >
            <LocalMallIcon style={{ fontSize: 40 }} color="action" />
          </Link>
        </div>

        <div className="bottomNav">
          <CloudIcon style={{ fontSize: 70 }} className="logo" />

          <Link
            to={{
              pathname: "/home",
              state: {
                loggedInUser: this.state.loggedInUser
              }
            }}
          >
            <h2>Home</h2>
          </Link>

          {ToRenderProduct}

          <Link to="/register-login">
            <h2>Login/Regsiter</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
