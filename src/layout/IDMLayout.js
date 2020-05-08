import React from "react";
import showLogo from "../assets/images/showLogo.png";
import tandon_long_black from "../assets/images/tandon_long_black.png";

import "./IDMLayout.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const IDMLayout = ({ children }) => {
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
              <div>May 12th, 3:00</div>
            </div>
            <div className={"headerMenuItem"}>Home</div>
            <div className={"headerMenuItem"}>About</div>
            <div className={"headerMenuItem"}>Projects</div>
            <div className={"headerMenuItem"}>Calendar</div>
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"content"}>{children}</div>
      </div>
      <div className={"footer"}>
        <div className={"footerContainer"}>
          <div className={'tandonLogoContainer'}>
            <img src={tandon_long_black} alt={"Tandon School of Engineering"}/>
          </div>
          <div className={'socialIconsContainer'}>
            <FontAwesomeIcon className={'socialIcons'} icon={faFacebookF} />
            <FontAwesomeIcon className={'socialIcons'} icon={faInstagram} />
            <FontAwesomeIcon className={'socialIcons'} icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDMLayout;
