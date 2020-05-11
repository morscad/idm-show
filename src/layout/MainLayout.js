import React, { useContext, useState } from "react";
import showLogo from "../assets/images/showLogo.png";
import tandon_long_black from "../assets/images/tandon_long_black.png";

import "./MainLayout.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVimeo,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const [showPOpup, setShowPopup] = useState(false);
  const { pathname } = useLocation();
  return (
    <div
      className={
        pathname === "/" || pathname.indexOf("/category/") > -1
          ? "bodyBlue"
          : "bodyBlack"
      }
    >
      <div className={"header"}>
        <div className={"container"}>
          <div
            className={`headerContainer ${
              pathname === "/" || pathname.indexOf("/category/") > -1
                ? "blackText"
                : "blueText"
            }`}
          >
            <div className={"logo"}>
              <img
                src={showLogo}
                alt={"Integrated Digital Media @ NYU graduation show"}
              />
              <div>May 12th, 3:00</div>
            </div>
            <div className={"headerMenuItem"}>
              <Link to={"/"}>Home</Link>
            </div>
            <div className={"headerMenuItem"}>
              <Link to={"/about"}>About</Link>
            </div>
            <div className={"headerMenuItem"}>
              <Link to={"/categories"}>Projects</Link>
            </div>
            <div className={"headerMenuItem"}>
              <Link to={"/calendar"}>Calendar</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={"container"}>
        <div className={"content"}>{children}</div>
      </div>
      <div className={"footer"}>
        <div className={"footerContainer"}>
          <div className={"tandonLogoContainer"}>
            <a
              href={"https://engineering.nyu.edu/"}
              target={"_blank"}
              referrerPolicy={"no-referrer"}
              rel={"noreferrer nofollow"}
            >
              <img
                src={tandon_long_black}
                alt={"Tandon School of Engineering"}
              />
            </a>
          </div>
          <div className={"socialIconsContainer"}>
            <a
                href={"hhttps://www.instagram.com/idmnyu/"}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
                rel={"noreferrer nofollow"}
            >
              <FontAwesomeIcon className={"socialIcons"} icon={faInstagram} />
            </a>
            <a
                href={"https://vimeo.com/idmnyu"}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
                rel={"noreferrer nofollow"}
            >
            <FontAwesomeIcon className={"socialIcons"} icon={faVimeo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
