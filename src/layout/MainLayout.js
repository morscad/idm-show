import React from "react";
import showLogo from "../assets/images/showLogo.png";

import "./MainLayout.scss";
import VisitorVisualizer from "../components/VisitorVisualizer";

import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

const MainLayout = ({ children, context }) => {
  return (
    <div>
      <div className={"header"}>
        <div className={"container"}>
          <div className={"headerContainer"}>
            <div className={"logo"}>
              <img
                src={showLogo}
                alt={"Integrated Digital Media @ NYU graduation show"}
              />
            </div>
            <div className={"socialIcons"}>
              <div>
                <img src={instagram} alt={"IDM on Instagram"} />
              </div>
              <div>
                <img src={twitter} alt={"IDM on twitter"} />
              </div>
            </div>
            <VisitorVisualizer context={context} />
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"content"}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
