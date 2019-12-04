import React from "react";
import Nav from "../Nav";

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <h1>main page with all the images</h1>
        <h2>main page with all the images</h2>
        <h3>main page with all the images</h3>
        <h4>main page with all the images</h4>
        <h5>main page with all the images</h5>
        <h6>main page with all the images</h6>
      </div>
    );
  }
}

export default MainPage;
