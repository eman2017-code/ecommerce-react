import React from "react";
import Nav from "../Nav";
import ListItemsInUserCart from "../ListItemsInUserCart";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

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

      this.setState({
        products: parsedProducts.data
      });
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <Nav loggedInUser={this.state.loggedInUser} />
        <div>
          <h1>this is the cart page</h1>

          <ListItemsInUserCart products={this.state.products} />
          <Link to="/checkout">
            <Button variant="contained">Check Out</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Cart;
