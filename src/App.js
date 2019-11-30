import React from "react";
import "./App.css";
import { Button, Icon, Menu, Dropdown } from "semantic-ui-react";
import iphone11 from "./iphone11Pro.png";
import AllProducts from "./AllProducts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      guest: true,
      showingProducts: false,
      loggedIn: false,
      options: [
        { key: 1, text: "Sign Up", value: 1 },
        { key: 2, text: "Login", value: 2 }
      ]
    };
  }

  // create a method that will allow the user to see the products page
  showProducts = () => {
    console.log("you are hitting the products page");
    this.setState({
      showingProducts: true
    });
  };

  // create a method that will show the myAccount Component

  render() {
    return (
      <div>
        <h3>ecommerce site</h3>
        <div className="top">
          <Button secondary>Wish List</Button>
          <Menu compact>
            {/* <Button secondary>My Account</Button> */}
            <Dropdown
              text="My Account"
              options={this.state.options}
              simple
              item
            />
          </Menu>
        </div>
        <p>logo</p>
        <div className="nav">
          <Button>
            <Icon name="shopping cart" />
          </Button>
          <Button>
            <Icon name="search" />
          </Button>
          <Button secondary onClick={this.showProducts}>
            Products
          </Button>
          <Button secondary>Home</Button>
        </div>
        {/* {this.state.showingProducts ? <AllProducts /> : null} */}
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
