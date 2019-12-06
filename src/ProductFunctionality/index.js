import React from "react";
import { Card } from "semantic-ui-react";
import ListProducts from "../ListProducts";
import App from "../App";

class ProductFunctionality extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loggedInUser: this.props.loggedInUser
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  // create method that will loop through all of the products
  getProducts = async () => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL +
          "/api/v1/carts/" +
          this.state.loggedInUser,
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
    } catch (err) {}
  };

  render() {
    return <ListProducts products={this.state.products} />;
  }
}

export default ProductFunctionality;
