import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ListProductUser from "../ListProductUser";
import SearchProducts from "../SearchProducts";

class UserDashboard extends React.Component {
  constructor(props) {
    console.log("props -- userDashboard");
    console.log(props);
    super(props);

    this.state = {
      products: [],
      loggedInUser: this.props.location.state.loggedInUser
      // create modal to show the product for a user to see
      // showProduct: false
    };
  }

  // when the component first appears
  componentDidMount = () => {
    this.getProducts();
    console.log("this.state -- userDashboard");
    console.log(this.state);
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
      // console.log("parsedProducts");
      // console.log(parsedProducts);

      this.setState({
        products: parsedProducts.data
      });
    } catch (err) {}
  };

  // addToCart = async (product.id) => {
  //   console.log("product.id");
  //     console.log(product.id);
  //   try {
  //         const reponse = await fetch(
  //         process.env.REACT_APP_API_URL + "/api/v1/carts/" + product.id,
  //         {
  //           method: "POST",
  //           credentials: "include",
  //           body: JSON.stringify(product.id),
  //           header: {
  //             "Content-Type": "application/json"
  //           }
  //         }
  //         const parsedAddedItemToCart = await reponse.json();
  //         console.log("parsedAddedItemToCart");
  //   console.log(parsedAddedItemToCart);
  //       } catch (err) {}

  // };
  addToCart = async productId => {
    try {
      const response = await fetch(
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
      const parsedResponse = await response.json();
      console.log("parsedResponse");
      console.log(parsedResponse);
    } catch (err) {}
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
