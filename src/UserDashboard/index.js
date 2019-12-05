import React from "react";
import Nav from "../Nav";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class UserAllProducts extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <h1>Product Page for common user</h1>
      </div>
    );
  }
}

export default UserAllProducts;
