import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import UserAllProducts from "./UserDashboard";
// import AdminDashboard from "./AdminDashboard";
// import RegisterLogin from "./RegisterLogin";
// import UserDashboard from "./UserDashboard";
// import MainPage from "./MainPage";
// import UserDashboard from "./UserDashboard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      admin: false,
      loggedInUser: null
    };
  }

  render() {
    return <h1>hi</h1>;
  }
}

export default App;
