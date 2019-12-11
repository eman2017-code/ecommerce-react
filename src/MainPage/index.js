import React from "react";
import Nav from "../Nav";
import iphone11 from "../iphone11Pro.png";
import applwatch from "../applwatch.jpg";
import airpods from "../airPodsCase.jpeg";
import yeezy from "../yeezy.jpg";
import appleTvRemote from "../appleTvRemote.jpeg";
import samsungFridge from "../samsungFridge.webp";
import printer from "../printer.jpg";
import yeezys from "../yeezys.jpg";
import supremeHoodie from "../supremeHoodie.jpg";
import iphoneX from "../iphoneX.jpg";
import beats from "../beats.jpeg";
import bike from "../bike.jpg";
import samsungHeadphones from "../samsungHeadphones.jpg";
import oculus from "../oculus.jpg";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.location.loggedInUser
    };
  }

  render() {
    return (
      <div>
        <Nav loggedInUser={this.state.loggedInUser} />
        <div className="image">
          <img src={airpods} alt="air pods pro" className="img" />
          <h2>Electronics</h2>
        </div>
        <div className="middleImgDiv">
          <img src={iphone11} alt="Iphone 11 Pro Max" className="middleImg" />
          <img
            src={samsungHeadphones}
            alt="samsung headphones"
            className="middleImg"
          />
          <img src={oculus} alt="VR Headset" className="middleImg" />
        </div>
        <h4 className="newCollection">NEW COLLECTION</h4>
        <h1 className="trending">TRENDING PRODUCTS</h1>
        {/* <div className="lastImgDiv">
          <img src={yeezy} alt="yeezy" className="lastImg" />
        </div> */}
        <div className="lastImgDiv">
          <img src={appleTvRemote} alt="apple tv remote" className="lastImg" />
          <img src={samsungFridge} alt="samsung fridge" className="lastImg" />
          <img src={applwatch} alt="apple watch" className="lastImg" />
          <img src={supremeHoodie} alt="supreme hoodie" className="lastImg" />
          <img src={iphoneX} alt="Iphone X" className="lastImg" />
          <img src={yeezys} alt="yeezys" className="lastImg" />
          <img src={beats} alt="beats headphones" className="lastImg" />
          <img src={bike} alt="bicycle" className="lastImg" />
        </div>
      </div>
    );
  }
}

export default MainPage;
