import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import iphone11 from "./iphone11Pro.png";
import SearchProducts from "./SearchProducts";
import AllProducts from "./AllProducts";
import RegisterLogin from "./RegisterLogin";

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
      <Router>
        <div>
          <Route
            path="/home"
            exact
            strict
            render={() => {
              return (
                <div>
                  <div className="topNav">
                    <h2>Welcome to Ecommerce Store</h2>
                  </div>
                  <div className="topNavButtons">
                    <Button secondary size="large">
                      Wish List
                    </Button>
                    <Link to="/register-login">
                      <Button secondary size="large">
                        My Account
                      </Button>
                    </Link>
                  </div>
                  <div className="bottomNav">
                    <Icon.Group size="huge" className="logo">
                      <Icon name="puzzle" />
                    </Icon.Group>
                    <h1 className="websiteName">PRO - SELL</h1>
                    <Link to="/home">
                      <Button secondary size="huge">
                        Home
                      </Button>
                    </Link>
                    <Link to="/products">
                      <Button secondary size="huge">
                        Products
                      </Button>
                    </Link>
                    <SearchProducts />
                    <Button>
                      <Icon name="shopping cart" size="huge" />
                    </Button>
                  </div>
                  <div className="img">
                    <h1>Shop Now</h1>
                    <img src={iphone11} alt="Iphone 11 Pro Max" />
                    <Icon
                      link
                      name="right arrow"
                      size="big"
                      className="arrow"
                    />
                  </div>
                </div>
              );
            }}
          />
          <Route path="/products" exact strict component={AllProducts} />
          <Route
            path="/register-login"
            exact
            strict
            component={RegisterLogin}
          />
        </div>
      </Router>
    );
  }
}

export default App;
