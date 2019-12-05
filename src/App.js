import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserAllProducts from "./UserAllProducts";
import RegisterLogin from "./RegisterLogin";
import MainPage from "./MainPage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      admin: false
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
    console.log(parsedLoginResponse);

    // // if the response is good
    // if (response.ok) {
    //   this.setState({
    //     loggedIn: true
    //   });
    //   console.log("you have successfully registered");
    // } else {
    //   console.log("Registration Failed!");
    //   console.log(parsedLoginResponse);
    // }

    // check if the user is an admin
    if (parsedLoginResponse.data.admin === true) {
      this.setState({
        loggedIn: true,
        admin: true
      });
    } else {
      // if they are not an admin
      if (response.ok) {
        this.setState({
          logged: true,
          admin: false
        });
      } else {
        // print out the error
        console.log(parsedLoginResponse);
      }
    }
  };

  // // login route
  // login = async loginInfo => {
  //   const response = await fetch(
  //     process.env.REACT_APP_API_URL + "/api/v1/users/login",
  //     {
  //       method: "POST",
  //       credentials: "include",
  //       body: JSON.stringify(loginInfo),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   );
  //   // parse the reponse
  //   const parsedLoginResponse = await response.json();
  //   console.log("parsedLoginResponse");
  //   console.log(parsedLoginResponse);
  //   // if the response is good
  //   if (response.ok) {
  //     this.setState({
  //       loggedIn: true
  //     });
  //     console.log("they are logged in");
  //   } else {
  //     console.log("Login Failed");
  //     console.log(parsedLoginResponse);
  //   }
  // };

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" exact strict component={MainPage} />
          <Route
            path="/products-user"
            exact
            strict
            component={UserAllProducts}
          />
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
  // render() {
  //   const componentToRender = () => {
  //     // if they are the admin, bring them to the admin dashboard
  //     if (this.state.admin) {
  //       return (
  //         <Route path="/products-admin" exact strict component={AllProducts} />
  //       );
  //     } else if (this.state.loggedIn) {
  //       return (
  //         // if they are a padawan, bring them to the padawan dashboard
  //         <Route path="/home" exact strict component={MainPage} />
  //       );
  //     } else {
  //       return (
  //         // bring them to the loginRegister form
  //         <Route path="/register-login" exact strict component={MainPage} />
  //       );
  //     }
  //   };
  //   // invoke method that shows which component to render
  //   return (
  //     <Router>
  //       <div className="App">{componentToRender()}</div>
  //     </Router>
  //   );
  // }
}

export default App;
