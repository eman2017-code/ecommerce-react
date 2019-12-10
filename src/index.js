// import React from "react";
// import ReactDOM from "react-dom";
// import "semantic-ui-css/semantic.min.css";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import MainPage from "./MainPage";
import UserDashboard from "./UserDashboard";
import RegisterLogin from "./RegisterLogin";
import Cart from "./Cart";
import AdminDashboard from "./AdminDashboard";
import AllProducts from "./AllProducts";

const ComponentToRender = () => (
  <Router>
    <div>
      <Route exact path="/" component={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={MainPage} />
      <Route exact path="/register-login" component={RegisterLogin} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/guest" component={AllProducts} />
      <Route exact path="/products" component={UserDashboard} />
      <Route exact path="/admin" component={AdminDashboard} />
    </div>
  </Router>
);

render(<ComponentToRender />, document.getElementById("root"));
