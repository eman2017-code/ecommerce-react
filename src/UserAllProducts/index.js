import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

class UserAllProducts extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        {/* <Link to="/">
          <Button color="primary">Add Product</Button>
        </Link> */}
        <h1>Product Page for common user</h1>
      </div>
    );
  }
}

export default UserAllProducts;
