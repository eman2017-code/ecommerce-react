import React from "react";
import { Button, Icon } from "semantic-ui-react";
import SearchProducts from "../SearchProducts";
import RegisterLogin from "../RegisterLogin";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class UserMyAccountPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>ecommerce site</h3>
        <div className="top">
          <Button secondary>Wish List</Button>
          <Link to="/register-login">
            <Button secondary>My Account</Button>
          </Link>
        </div>
        <p>logo</p>
        <div className="nav">
          <Button>
            <Icon name="shopping cart" />
          </Button>
          <SearchProducts />

          <Link to="/home">
            <Button secondary>Home</Button>
          </Link>
          <Link to="/products">
            <Button secondary>Products</Button>
          </Link>
          <Route
            path="/register-login"
            exact
            strict
            component={RegisterLogin}
          />
        </div>
        <h1>User View My Account Page</h1>
      </div>
    );
  }
}

export default UserMyAccountPage;
