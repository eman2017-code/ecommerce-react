import React from "react";
import { Button, Icon } from "semantic-ui-react";
import iphone11 from "../iphone11Pro.png";
import AllProducts from "../AllProducts";

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      guest: true,
      showingProducts: false
    };
  }

  // create a function the renders the product page
  showAllProducts = () => {
    console.log("hitting the product page");
    this.setState({
      showingProducts: true
    });
  };

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
          <Button primary onClick={this.showAllProducts}>
            Products
          </Button>
          <Button primary>Home</Button>
        </div>
        <div className="img">
          <img src={iphone11} alt="Iphone 11 Pro Max" />
          <Icon name="right arrow" className="arrow" />
        </div>
      </div>
    );
  }
}

export default MainPage;
