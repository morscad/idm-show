import React from "react";
import about from "../assets/images/about.png";
import idm from "../assets/images/IDM-logo.png";
import "./AboutPage.scss";
import MainLayout from "../layout/MainLayout";
const AboutPage = () => {
  return (
    <MainLayout>
      <div className={"aboutContainer"}>
        <div className={"aboutImage"}>
          <img src={about} alt={"The Integrated Digital Media Spring showcase"}/>
        </div>
        <div className={"aboutContent"}>
          <div className={"aboutText"}>
            The Integrated Digital Media Spring showcase is a virtual event
            featuring the work of our Undergraduate and Graduate students. In
            our upcoming live stream, our students will present and share their
            work in a variety of mediums - including XR projects, Games, UX
            design, Audio, Video, Interactive media, and other experimental and
            inventive work.
          </div>
          <div className={"aboutLink"}>
            <div>
              <a
                href={"http://idm.engineering.nyu.edu/"}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
                rel={"noopener noreferrer nofollow"}
              >
                <img src={idm} alt={"The Integrated Digital Media Program @ NYU"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
