import React from "react";
import Nav from "../Nav";
import iphone11 from "../iphone11Pro.png";
import iphone11ProMax from "../iphone11ProMax.jpg";
import airpods from "../airpods.webp";
import yeezy from "../yeezy.jpg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.location.loggedInUser
    };
  }

  render() {
    console.log("this.state -- UserDashboard");
    console.log(this.state);
    return (
      <div>
        <Nav loggedInUser={this.state.loggedInUser} />
        <h4>Save 30% till December 24th -- Offer ends at Midnight!</h4>
        <div className="image">
          <img src={iphone11ProMax} alt="air pods pro" className="img" />
          <h2>Electronics</h2>
        </div>
        <div className="middleImgDiv">
          <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
          <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
          <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
        </div>
        <h3>Trending Now</h3>
        <div className="lastImgDiv">
          <img src={yeezy} alt="yeezy" className="lastImg" />
        </div>
      </div>
    );
  }
}

export default MainPage;
