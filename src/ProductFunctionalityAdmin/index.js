import React from "react";
import ListProductAdmin from "../ListProductAdmin";
import App from "../App";

class ProductFunctionalityAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loggedInUser: this.props.loggedInUser,
      addProduct: false
    };
  }

  componentDidMount() {
    this.getProducts();
    console.log("this.state.loggedInUser");
    console.log(this.state.loggedInUser);
  }

  // create method that will loop through all of the products
  getProducts = async () => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL +
          "/api/v1/products/my_items/" +
          this.state.loggedInUser.id,
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

  // method to delete a product
  deleteProduct = async id => {
    const deletedProductResponse = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/products/" + id,
      {
        credentials: "include",
        method: "DELETE"
      }
    );
    // convert into json
    const deletedProductParsed = await deletedProductResponse.json();
    this.setState({
      products: this.state.products.filter(product => product.id !== id)
    });
  };

  render() {
    return (
      <ListProductAdmin
        products={this.state.products}
        deleteProduct={this.deleteProduct}
      />
    );
  }
}

export default ProductFunctionalityAdmin;
