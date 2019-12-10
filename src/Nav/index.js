import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SearchProducts from "../SearchProducts";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";
import Button from "@material-ui/core/Button";
import Cart from "../Cart";
import MainPage from "../MainPage";
import ListProductUser from "../ListProductUser";

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
    return (
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/products">
          <button>Products</button>
        </Link>
        <Link to="/cart">
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
