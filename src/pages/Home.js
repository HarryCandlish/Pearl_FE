  
import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

import people from "../images/people.jfif";
import website from "../images/website.jfif";
import community from "../images/community.jfif";


class Home extends Component {
  render() {

      var hs = homeStyles

    return (
      <div>
        <div className={hs.gridContainer}>
            <div className={hs.overlay}>
                <h1 className={hs.gridTitleOne}>
                     How we can help your business
                </h1>
                    <p className={hs.gridParagraphOne}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                   </p>
                <button className={hs.gridButtonOne}>SIGN UP</button>
            </div>
            <div>
                 <img className={hs.image} src={website} alt="website" />
            </div>
          </div>
            <div className={hs.gridContainerTwo}>
            <div>
  <img className={hs.imageTwo} src={people} alt="people" />
</div>
                <div className={hs.overlayTwo}>
            <h1 className={hs.gridTitleTwo}>
                 Are you a junior seeking employment?
            </h1>
  <p className={hs.gridParagraphTwo}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
  <button className={hs.gridButtonTwo}>JOIN US</button>
</div>
</div>
<div className={hs.gridContainer}>
            <div className={hs.overlay}>
                <h1 className={hs.gridTitleOne}>
                     Moving employment, shaping cities
                </h1>
                    <p className={hs.gridParagraphOne}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                   </p>
                <button className={hs.gridButtonOne}>ABOUT US</button>
            </div>
            <div>
                 <img className={hs.imageThree} src={community} alt="website" />
            </div>
          </div>
</div>
    );
  }
}

export default Home;