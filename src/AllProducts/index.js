import React from "react";
import ListProductUser from "../ListProductUser";
import SearchProducts from "../SearchProducts";
import Nav from "../Nav";

class AllProducts extends React.Component {
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
      //   console.log("parsedProducts");
      //   console.log(parsedProducts);

      this.setState({
        products: parsedProducts.data
      });
      //   console.log("this.state");
      //   console.log(this.state);
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <Nav />
        <SearchProducts />
        <ListProductUser
          products={this.state.products}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}

export default AllProducts;
