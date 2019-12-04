import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import RegisterLogin from "./RegisterLogin";
import MainPage from "./MainPage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  // create route to login and register
  // register =

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact strict component={MainPage} />
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
