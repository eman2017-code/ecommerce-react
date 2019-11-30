import React from "react";
import { Button, Icon } from "semantic-ui-react";
import iphone11 from "../iphone11Pro.png";

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      guest: true
    };
  }

  render() {
    return (
      <div>
        <div className="top">
          <h3>ecommerce site</h3>
          <Button primary>Wish List</Button>
          <Button primary>My Account</Button>
        </div>
        <p className="logo">logo</p>
        <div className="leftSide">
          <Button>
            <Button.Content visible>Search Icon</Button.Content>
            <Icon name="search" />
          </Button>
          <Button>
            <Button.Content visible>Shopping Cart</Button.Content>
            <Icon name="shopping cart" />
          </Button>
          <Button primary>Products</Button>
          <Button primary>Home</Button>
        </div>
        <div>
          <img src={iphone11} alt="Iphone 11 Pro Max" />
        </div>
      </div>
    );
  }
}

export default MainPage;
