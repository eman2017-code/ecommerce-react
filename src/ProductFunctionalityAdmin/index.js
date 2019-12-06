import React from "react";
import ListProductAdmin from "../ListProductAdmin";
import App from "../App";
import SideBarAdmin from "../SideBarAdmin";

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

  // // method to create a product
  // addProduct = async (e, productFromForm) => {
  //   //prevents the browser from reloading when an event is called...
  //   e.preventDefault();
  //   try {
  //     //Call the array of all of the courses in the DB.
  //     const createdProductResponse = await fetch(
  //       process.env.REACT_APP_API_URL + "/api/v1/products/",
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         body: JSON.stringify(productFromForm),
  //         headers: {
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     );
  //     const parsedResponse = await createdProductResponse.json();
  //     //push all courses + added course into state.
  //     this.setState({
  //       courses: [...this.state.products, parsedResponse.data]
  //     });

  //     this.setState({
  //       addProduct: false
  //     });
  //   } catch (err) {}
  // };

  render() {
    // return [
    //   <ListProductAdmin key={1} products={this.state.products} />,
    //   <SideBarAdmin key={2} products={this.state.products} />
    // ];
    return <ListProductAdmin products={this.state.products} />;
  }
}

export default ProductFunctionalityAdmin;
