import React from "react";
import Nav from "../Nav";
import iphone11 from "../iphone11Pro.png";
import airpods from "../airpods.webp";
import yeezy from "../yeezy.jpg";

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
        <div class="image">
          <img src={airpods} alt="air pods pro" className="img" />
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
