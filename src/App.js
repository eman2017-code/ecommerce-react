import React from "react";
import "./App.css";
import { Button, Icon } from "semantic-ui-react";
import iphone11 from "./iphone11Pro.png";
import AllProducts from "./AllProducts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      guest: true,
      showingProducts: false,
      loggedIn: false
    };
  }
  render() {
    return (
      <div>
        {this.state.showingProducts ? <AllProducts /> : null}
        <h3>ecommerce site</h3>
        <div className="top">
          <Button secondary>Wish List</Button>
          <Button secondary onClick={this.showMyAccount}>
            My Account
          </Button>
        </div>
        <Icon name="lock" size="huge" />
        <div className="nav">
          <Button>
            <Icon name="shopping cart" />
          </Button>
          <Button>
            <Icon name="search" />
          </Button>
          <Button secondary onClick={this.showAllProducts}>
            Products
          </Button>
          <Button secondary>Home</Button>
        </div>
        <div className="img">
          <img src={iphone11} alt="Iphone 11 Pro Max" />
          <Icon name="right arrow" size="huge" className="arrow" />
        </div>
      </div>
    );
  }
}

export default App;
