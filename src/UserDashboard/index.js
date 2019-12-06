import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ListProducts from "../ListProducts";

class UserAllProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  // when the component first appears
  componentDidMount = () => {
    this.getProducts();
  };

  // create function to see all the products that are in th database
  getProducts = async () => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL + "/api/v1/products/",
        {
          // cookie session
          credentials: "include"
        }
      );
      // convert them into json
      const parsedProducts = await products.json();

      this.setState({
        products: parsedProducts.data
      });
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <Nav />
        <h1>Product Page for common user</h1>
        <ListProducts products={this.state.products} />
      </div>
    );
  }
}

export default UserAllProducts;
