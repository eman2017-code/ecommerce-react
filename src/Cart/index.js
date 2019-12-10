import React from "react";
import Nav from "../Nav";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    console.log("props");
    console.log(props);

    this.state = {
      loggedInUser: this.props.location.state.loggedInUser
    };
  }

  render() {
    console.log("this.state -- cart");
    console.log(this.state);
    return (
      <div>
        <Nav />
        <div>
          <h1>this is the cart page</h1>
        </div>
      </div>
    );
  }
}

export default Cart;
