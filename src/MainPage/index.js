import React from "react";
import Nav from "../Nav";
import iphone11 from "../iphone11Pro.png";
import iphone11ProMax from "../iphone11ProMax.jpg";
import airpods from "../MWP22_AV2.jpeg";
import yeezy from "../yeezy.jpg";
// import Slider from "../Slider";

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
        <div id="image">
          {/* <img src={airpods} alt="air pods pro" className="img" /> */}
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
