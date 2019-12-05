import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import RegisterLogin from "./RegisterLogin";
import MainPage from "./MainPage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }

  // create route to login and register
  register = async registerInfo => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/register",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(registerInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const parsedLoginResponse = await response.json();

    // if the response is good
    if (parsedLoginResponse.status.code === response.ok) {
      this.setState({
        loggedIn: true
      });
    } else {
      console.log("Registration Failed!");
      console.log(parsedLoginResponse);
    }
  };

  // create route for the user to login
  login = async loginInfo => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/login",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginInfo),
        header: {
          "Content-Type": "application/json"
        }
      }
    );
    // parse the reponse
    const parsedLoginResponse = await response.json();
    // if the response is good
    if (parsedLoginResponse.status.code === response.ok) {
      this.setState({
        loggedIn: true
      });
    } else {
      console.log("Login Failed");
      console.log(parsedLoginResponse);
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact strict component={MainPage} />
          <Route path="/products" exact strict component={AllProducts} />
          <Route
            login={this.login}
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
