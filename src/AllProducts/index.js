import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Button, Icon } from "semantic-ui-react";
import SearchProducts from "../SearchProducts";

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
          <Button secondary>My Account</Button>
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
        </div>
      </div>
    );
  }
}

export default AllProducts;
