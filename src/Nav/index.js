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

  componentDidMount() {
    console.log("this.state -- navBar");
    console.log(this.state);
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
          <h7>Products</h7>
        </Link>
      );
    } else {
      ToRenderProduct = (
        <Link
          to={{
            pathname: "/guest"
          }}
        >
          <h7>Products</h7>
        </Link>
      );
    }

    return (
      <div className="navBar">
        <CloudIcon fontSize="large" />
        <Link
          to={{
            pathname: "/home",
            state: {
              loggedInUser: this.state.loggedInUser
            }
          }}
        >
          <h7>Home</h7>
        </Link>

        {ToRenderProduct}

        <Link to="/register-login">
          <h7>Login/Regsiter</h7>
        </Link>
        <Link
          to={{
            pathname: "/cart",
            state: {
              loggedInUser: this.state.loggedInUser
            }
          }}
        >
          <LocalMallIcon fontSize="large" />
        </Link>
      </div>
    );
  }
}

export default Nav;
