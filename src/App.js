import React from "react";
import "./App.css";
import { Button, Icon } from "semantic-ui-react";
import iphone11 from "./iphone11Pro.png";
import SearchProducts from "./SearchProducts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // everyone who enters the site is going to be a guest
      guest: true,
      // in order to add something to their cart, they must be logged in
      loggedIn: false
    };
  }

  render() {
    return (
      <div>
        <h3>ecommerce site</h3>
        <div className="top">
          <Button secondary>Wish List</Button>
          <Button secondary>My Account</Button>
        </div>
        <p>logo</p>
        <div className="nav">
          <Button>
            <Icon name="shopping cart" />
          </Button>
          <SearchProducts />
          <Button secondary>Products</Button>
          <Button secondary>Home</Button>
        </div>
        <div className="img">
          <h1>Shop Now</h1>
          <img src={iphone11} alt="Iphone 11 Pro Max" />
          <Icon link name="right arrow" size="big" className="arrow" />
        </div>
      </div>
    );
  }
}

export default App;
