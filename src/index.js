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
import CheckOut from "./CheckOut";

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
      <Route exact path="/checkout" component={CheckOut} />
    </div>
  </Router>
);

render(<ComponentToRender />, document.getElementById("root"));
