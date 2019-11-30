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
        <h3>ecommerce site</h3>
        <div className="top">
          <Button primary>Wish List</Button>
          <Button primary>My Account</Button>
        </div>
        <Icon name="lock" size="huge" />
        <div className="nav">
          <Button>
            <Icon name="shopping cart" />
          </Button>
          <Button>
            <Icon name="search" />
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
