import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ListProductUser from "../ListProductUser";
import SearchProducts from "../SearchProducts";

class UserDashboard extends React.Component {
  constructor(props) {
    console.log("props");
    console.log(props);
    super(props);

    this.state = {
      products: [],
      loggedInUser: props.location.state.loggedInUser
      // create modal to show the product for a user to see
      // showProduct: false
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
      console.log("parsedProducts");
      console.log(parsedProducts);

      this.setState({
        products: parsedProducts.data
      });
      console.log("this.state");
      console.log(this.state);
    } catch (err) {}
  };

  addToCart = async productId => {
    const reponse = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/carts/" + productId,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(productId),
        header: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedAddedItemToCart = await reponse.json();
    console.log("parsedAddedItemToCart");
    console.log(parsedAddedItemToCart);
  };

  render() {
    return (
      <div>
        <Nav loggedInUser={this.state.loggedInUser} />
        <SearchProducts />
        <h1 className="userDashboardHeader">PRO - SELL</h1>
        <ListProductUser
          products={this.state.products}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}

export default UserDashboard;
