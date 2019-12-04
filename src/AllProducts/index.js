import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
import Nav from "../Nav";

class AllProducts extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <h1>product page</h1>
      </div>
    );
  }
}

export default AllProducts;
