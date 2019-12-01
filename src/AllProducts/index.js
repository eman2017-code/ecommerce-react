import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Button, Icon } from "semantic-ui-react";
import SearchProducts from "../SearchProducts";
import RegisterLogin from "../RegisterLogin";

class AllProducts extends React.Component {
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
      </div>
    );
  }
}

export default AllProducts;
