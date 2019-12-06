import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserAllProducts from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import RegisterLogin from "./RegisterLogin";
import MainPage from "./MainPage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      admin: false,
      loggedInUser: null
    };
  }

  // register route
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
    // check if the user is an admin
    if (parsedLoginResponse.data.admin === true) {
      this.setState({
        loggedIn: true,
        admin: true,
        loggedInUser: parsedLoginResponse.data
      });
      // console.log(this.state);
    } else {
      // if they are not an admin
      if (response.ok) {
        this.setState({
          logged: true,
          admin: false,
          loggedInUser: parsedLoginResponse.data
        });
      } else {
        // print out the error
        // console.log(parsedLoginResponse);
      }
    }
    // console.log(this.state);
  };

  // login route
  login = async loginInfo => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/api/v1/users/login",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // parse the reponse
    const parsedLoginResponse = await response.json();
    if (parsedLoginResponse.data.admin === true) {
      this.setState({
        loggedIn: true,
        admin: true,
        loggedInUser: parsedLoginResponse.data
      });
    } else {
      // if they are not an admin
      if (response.ok) {
        this.setState({
          logged: true,
          admin: false,
          loggedInUser: parsedLoginResponse.data
        });
      } else {
        // print out the error
        console.log(parsedLoginResponse);
      }
    }
    // console.log(this.state);
  };

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact strict component={MainPage} />
          {this.state.admin ? (
            <Route
              path="/products-user"
              exact
              strict
              render={props => (
                <AdminDashboard
                  {...props}
                  loggedInUser={this.state.loggedInUser}
                />
              )}
            />
          ) : (
            <Route
              path="/products-user"
              exact
              strict
              component={UserAllProducts}
            />
          )}
          <Route
            path="/register-login"
            render={props => (
              <RegisterLogin
                {...props}
                login={this.login}
                register={this.register}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
