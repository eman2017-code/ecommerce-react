import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route } from "react-router-dom";
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
        <div className="topNav">
          <h2>Welcome to Ecommerce Store</h2>
        </div>
        <div className="topNavButtons">
          <Button secondary size="large">
            Wish List
          </Button>
          <Link to="/register-login">
            <Button secondary size="large">
              My Account
            </Button>
          </Link>
        </div>
        <div className="bottomNav">
          <Icon.Group size="huge" className="logo">
            <Icon name="puzzle" />
          </Icon.Group>
          <h1 className="websiteName">PRO - SELL</h1>
          <Link to="/home">
            <Button secondary size="huge">
              Home
            </Button>
          </Link>
          <Link to="/products">
            <Button secondary size="huge">
              Products
            </Button>
          </Link>
          <SearchProducts />
          <Button>
            <Icon name="shopping cart" size="huge" />
          </Button>
        </div>
        <h1>this is where all the products will be displayed</h1>
      </div>
    );
  }
}

export default AllProducts;
