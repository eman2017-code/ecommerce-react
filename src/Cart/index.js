import React from "react";
import Nav from "../Nav";
import ListItemsInUserCart from "../ListItemsInUserCart";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.location.state.loggedInUser,
      products: []
    };
  }

  componentDidMount = () => {
    this.getProducts(this.state.loggedInUser.id);
    console.log("this.state -- Cart");
    console.log(this.state);
  };

  // API call to get products user has in their cart
  getProducts = async user_id => {
    try {
      const products = await fetch(
        // fetch call to the api
        process.env.REACT_APP_API_URL + "/api/v1/carts/" + user_id,
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
    // console.log("this.state -- cart");
    // console.log(this.state);
    return (
      <div>
        <Nav loggedInUser={this.state.loggedInUser} />
        <div>
          <h1>this is the cart page</h1>

          <ListItemsInUserCart products={this.state.products} />
          <button>Check Out</button>
        </div>
      </div>
    );
  }
}

export default Cart;
