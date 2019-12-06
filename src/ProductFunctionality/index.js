import React from "react";
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
    console.log("this.state.loggedInUser");
    console.log(this.state.loggedInUser);
  }

  // create method that will loop through all of the products
  getProducts = async () => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL +
          "/api/v1/products/" +
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

  // // method for admin to create a product
  // addProduct = async (e, createProductForm) => {
  //   // stop the server
  //   e.preventDefault();
  //   try {
  //     const createdProductResponse = await fetch(
  //       process.env.REACT_APP_API_URL + "/api/v1/products/",
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         // make the body JSON to send back to the server
  //         body: JSON.stringify(createProductForm),
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     );
  //     // convert into json
  //     const parsedResponse = await createdProductResponse.json();

  //     this.setState({
  //       products: [...this.state.products, parsedResponse.data]
  //     });

  //     // this.setState({

  //     // })
  //   } catch (err) {}
  // };

  render() {
    return <ListProducts products={this.state.products} />;
  }
}

export default ProductFunctionality;
