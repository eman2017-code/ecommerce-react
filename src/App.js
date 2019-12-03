import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import RegisterLogin from "./RegisterLogin";
import Nav from "./Nav";

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
          <Route path="/home" exact strict component={Nav} />
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
