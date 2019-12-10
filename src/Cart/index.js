import React from "react";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import Nav from "../Nav";

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
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
