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
    let ToRender;
    if (this.state.loggedInUser !== undefined) {
      ToRender = (
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
      ToRender = (
        <Link
          to={{
            pathname: "/guest"
          }}
        >
          <button>Products</button>
        </Link>
      );
    }
    //   toRender = (
    //     <Link
    //       to={{
    //         pathname: "/admin",
    //         state: { loggedInUser: this.state.loggedInUser }
    //       }}
    //     />
    //   );
    //   toRender = <Link to="/guest" />;
    // }
    // if (this.state.admin === true && this.state.loggedIn === true) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/admin",
    //         state: { loggedInUser: this.state.loggedInUser }
    //       }}
    //     />
    //   );
    // }
    // if (this.state.logged === true) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/products",
    //         state: { loggedInUser: this.state.loggedInUser }
    //       }}
    //     />
    //   );
    // }
    return (
      <div className="navBar">
        {/* {this.state.loggedInUser === undefined ? } */}

        <CloudIcon />
        <Link to="/home">
          <button>Home</button>
        </Link>

        {/* <Link to="/guest">
          <button>Products</button>
        </Link> */}
        {ToRender}

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
