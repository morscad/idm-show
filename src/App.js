import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import showLogo from "./assets/images/showLogo.png";

function App() {
  return (
    <Router>
      <div className="App">
        <div className={"leftPortion"}>
          <div className="leftTextContainer">
            <div className={"showInfoTitle"}>Showcase 2020</div>
            <div className={"showInfoBody"}>
              Submit your work for the IDM 2020 Virtual Spring Showcase! The
              showcase is an opportunity for students to receive a public
              platform to share all of the incredible projects you’ve been
              working on. Through live screenings, social media, and our
              showcase site, this show will be a public-facing exhibition and
              celebration of the hard work IDM students have put in this year.
              Apply for a spot in the showcase by 04/24th{" "}
            </div>

            <div className={"showInfoSubTitle"}>Submission Dates</div>
            <div className={"showInfoBody"}>April 24</div>

            <div className={"showInfoSubTitle"}>Showcase Date</div>
            <div className={"showInfoBody"}>May 12</div>
          </div>
        </div>
        <div className={"rightPortion"}>
          <div className={"showLogo"}>
            <img
              src={showLogo}
              alt={"Integrated Digital Media Showcase Logo"}
            />
          </div>
          <div className={'buttonsContainer'}>
            <a
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSc0mOdXksJBTkFfSYAQO7SUwsE1hNeoPa3S2uesyoE9Ll2WuQ/viewform?usp=sf_link"
              }
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <div className={"joinBtn"}>Join the team</div>
            </a>
            <a
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSfwk1UJib-q6rRjoK7wOCpnK-wZDV_nX3KVQfPyEYnQfnaS-w/viewform"
              }
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <div className={"submitBtn"}>Submit Work</div>
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
