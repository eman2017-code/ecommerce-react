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
    // const componentToRender = () => {
    //   if (this.state.admin === true && this.state.loggedIn === true) {
    //     // return <AdminDashboard />;
    //     return <Route path="/admin" component={AdminDashboard} />;
    //   } else if (this.state.loggedIn === true) {
    //     // return <UserDashboard />;
    //     return <Route path="/products" component={UserDashboard} />;
    //   } else {
    //     return (
    //       <Route path="/register-login"
    //       render={(props) => <RegisterLogin {...props} login={this.login} register={this.register}}
    //     );
    //   }
    // };
    // return <div>{componentToRender()}</div>;
    return <h1>hi</h1>;
  }
}

export default App;
