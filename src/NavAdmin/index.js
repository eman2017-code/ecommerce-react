import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";

class NavAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.loggedInUser
    };
  }

  render() {
    return (
      <div className="navBarAdmin">
        <CloudIcon />
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/admin">
          <button>My Account</button>
        </Link>
      </div>
    );
  }
}

export default NavAdmin;
