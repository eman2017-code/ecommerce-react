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
          <h5>Products</h5>
        </Link>
      );
    } else {
      ToRenderProduct = (
        <Link
          to={{
            pathname: "/guest"
          }}
        >
          <h5>Products</h5>
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
          <h5>Home</h5>
        </Link>

        {ToRenderProduct}

        <Link to="/register-login">
          <h5>Login/Regsiter</h5>
        </Link>
        <Link
          to={{
            pathname: "/cart",
            state: {
              loggedInUser: this.state.loggedInUser
            }
          }}
        >
          <LocalMallIcon fontSize="large" color="action" />
        </Link>
      </div>
    );
  }
}

export default Nav;
