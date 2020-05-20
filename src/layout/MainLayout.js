import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import showLogo from "../assets/images/showLogo.png";
import tandon_long_black from "../assets/images/tandon_long_black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeo, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./MainLayout.scss";

import { Link, useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = open => event => {
    setDrawerState(open);
  };

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
            <div className={"mobileMenu"}>
              <Button onClick={toggleDrawer(true)}>
                <FontAwesomeIcon icon={faBars} className={`mobileMenuIcon ${
                    pathname === "/" || pathname.indexOf("/category/") > -1
                        ? "blackText"
                        : "blueText"
                }`}/>
              </Button>
            </div>

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
              rel={"noopener noreferrer"}
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
              rel={"noopener noreferrer"}
            >
              <FontAwesomeIcon className={"socialIcons"} icon={faInstagram} />
            </a>
            <a
              href={"https://vimeo.com/idmnyu"}
              target={"_blank"}
              referrerPolicy={"no-referrer"}
              rel={"noopener noreferrer"}
            >
              <FontAwesomeIcon className={"socialIcons"} icon={faVimeo} />
            </a>
          </div>
        </div>
      </div>
      <Drawer open={drawerState} onClose={toggleDrawer(false)} >
        <div className={"mobileMenuDrawer"}>
          <div className={"headerMenuItemMobile"}>
            <Link to={"/"}>Home</Link>
          </div>
          <div className={"headerMenuItemMobile"}>
            <Link to={"/about"}>About</Link>
          </div>
          <div className={"headerMenuItemMobile"}>
            <Link to={"/categories"}>Projects</Link>
          </div>
          <div className={"headerMenuItemMobile"}>
            <Link to={"/calendar"}>Calendar</Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MainLayout;
