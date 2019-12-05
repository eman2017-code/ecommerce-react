import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

class AdminAllProducts extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <h1>Admin Page for common user</h1>
        <Link to="/">
          <Button color="primary">Add Product</Button>
        </Link>
      </div>
    );
  }
}

export default AdminAllProducts;
