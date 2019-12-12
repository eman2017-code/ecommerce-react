import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";
// import LocalMallIcon from "@material-ui/icons/LocalMall";

class NavAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.loggedInUser
    };
  }

  render() {
    return (
      <div>
        <div id="navBarAdmin">
          <CloudIcon style={{ fontSize: 35 }} className="logoAdmin" />
          <h2 className="companyNameAdmin">PRO - SELL</h2>

          <Link
            to={{
              pathname: "/home",
              state: {
                loggedInUser: this.state.loggedInUser
              }
            }}
          >
            <h2 className="homeAdmin">Home</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavAdmin;
