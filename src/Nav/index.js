import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";
import { Redirect } from "react-router-dom";

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

  // // log out method
  // logout = async () => {
  //   const response = await fetch(
  //     process.env.REACT_APP_API_URL + "/api/v1/users/logout",
  //     {
  //       credentials: "include"
  //     }
  //   );
  //   const parsedLogoutResponse = await response.json();
  //   if (response.ok) {
  //     this.setState({
  //       loggedIn: false
  //     });
  //     console.log("logged out");
  //   } else {
  //   }
  // };

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
          <button>Products</button>
        </Link>
      );
    } else {
      ToRenderProduct = (
        <Link
          to={{
            pathname: "/guest"
          }}
        >
          <button>Products</button>
        </Link>
      );
    }

    return (
      <div className="navBar">
        <CloudIcon />
        <Link
          to={{
            pathname: "/home",
            state: {
              loggedInUser: this.state.loggedInUser
            }
          }}
        >
          <button>Home</button>
        </Link>

        {/* <Link to="/guest">
          <button>Products</button>
        </Link> */}
        {ToRenderProduct}

        {/* if the user is not logged in, the path will be '/guest'
            if the user is logged in and hits the product tab, they will be brought to '/products' */}

        <Link
          to={{
            pathname: "/cart",
            state: {
              loggedInUser: this.state.loggedInUser
            }
          }}
        >
          <button>Cart</button>
        </Link>
        <Link to="/register-login">
          <button>Login/Regsiter</button>
        </Link>
      </div>
    );
  }
}

export default Nav;
