import React from "react";
import Nav from "../Nav";

class CheckOut extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="checkout">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1>
            THANK YOU FOR YOUR ORDER! YOUR ITEMS WILL BE HERE IN 3 - 5 BUSINESS
            DAYS
          </h1>
        </div>
      </div>
    );
  }
}

export default CheckOut;
