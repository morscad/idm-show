import React, { useContext, useState } from "react";
import showLogo from "../assets/images/showLogo.png";

import "./MainLayout.scss";
import VisitorVisualizer from "../components/VisitorVisualizer";

import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

const MainLayout = ({ children, context }) => {
  const [showPOpup, setShowPopup] = useState(true);
  const [state, ] = useContext(context);

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
      {showPOpup && (
        <div className={"welcomePopup"}>
          <div className={"popupBody"}>
            <div className={"popupTitle"}>Hello Stranger</div>
            <div className={"popupContent"}>
              Welcome to the virtual IDM graduation show.<br />
              {state.users.length > 0 && <span>There are currently {state.users.length} other people attending
                this virtual show.</span>}
            </div>
            <div className={'dontShowAgain'} onClick={()=> {
              setShowPopup(false);
            }}>
              [x] Don't show this again
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
