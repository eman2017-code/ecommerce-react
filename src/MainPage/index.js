import React from "react";
import { Button, Icon } from "semantic-ui-react";

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h3>ecommerce site</h3>
          <p className="icons">shopping cart icon here</p>
        </div>
        <div className="header">
          <Button primary>Home</Button>
          <Button secondary>Products</Button>
        </div>
        <div>
          <p>insert the main image here</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
