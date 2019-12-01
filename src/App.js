import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import iphone11 from "./iphone11Pro.png";
import SearchProducts from "./SearchProducts";
import AllProducts from "./AllProducts";
import RegisterLogin from "./RegisterLogin";
// import UserMyAccountPage from "./UserMyAccountPage";

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
                  <h3>ecommerce site</h3>
                  <div className="top">
                    <Button secondary>Wish List</Button>
                    <Link to="/register-login">
                      <Button secondary>My Account</Button>
                    </Link>
                  </div>
                  <p>logo</p>
                  <div className="nav">
                    <Button>
                      <Icon name="shopping cart" />
                    </Button>
                    <SearchProducts />

                    <Link to="/home">
                      <Button secondary>Home</Button>
                    </Link>
                    <Link to="/products">
                      <Button secondary>Products</Button>
                    </Link>
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
          {/* <div>
            <UserMyAccountPage />
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
