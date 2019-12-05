import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

class AllProducts extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <Link to="/">
          <Button color="primary">Add Product</Button>
        </Link>
      </div>
    );
  }
}

export default AllProducts;
