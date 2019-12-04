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
        <div className="img">
          {/* <h1>Shop Now</h1> */}
          <img src={airpods} alt="air pods pro" className="img" />
          <div className="middleImgDiv">
            <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
            <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
            <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
          </div>
          <div className="lastImgDiv">
            <img src={yeezy} alt="yeezy" className="lastImg" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
