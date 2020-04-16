import React from "react";
import "./LiveEvents.scss";
import dj from "../assets/images/dj.png";
import qa from "../assets/images/zoomChat.png";
const LiveEvents = () => {
  return (
    <div className={'liveEvents'}>
      <div className={"sectionsMainTitle"}>Coming up soon</div>
      <div className={"liveEventsContainer"}>
        <div className={"liveElementBlock"}>
          <div className={"liveElementTitle"}>Live performance at 8:30PM</div>
          <div>
            <img src={dj} alt={'Live performance at 8:30PM'} />
          </div>
        </div>
        <div className={"liveElementBlock"}>
          <div className={"liveElementTitle"}>Artist Q&A at 7:45PM</div>
          <div className={"liveElementImage"}>
            <img src={qa} alt={'Artist Q&A at 7:45PM'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;
