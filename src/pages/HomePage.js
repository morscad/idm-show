import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
import moment from "moment";
import { has } from "lodash";

import "./HomePage.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MainContext } from "../App";

const HomePage = () => {
  const [state, setState] = useContext(MainContext);
  const [firstStageCurrentTitle, setFirstStageCurrentTitle] = useState("");
  const [firstStageCurrentBody, setFirstStageCurrentBody] = useState("");
  const [firstStageNextTitle, setFirstStageNextTitle] = useState("");
  const [firstStageNextBody, setFirstStageNextBody] = useState("");

  const [secondStageCurrentTitle, setSecondStageCurrentTitle] = useState("");
  const [secondStageCurrentBody, setSecondStageCurrentBody] = useState("");
  const [secondStageNextTitle, setSecondStageNextTitle] = useState("");
  const [secondStageNextBody, setSecondStageNextBody] = useState("");

  const generateDateFromSchedule = t => {
    const rawHour = t.split(" ")[0];
    const realHour = parseInt(rawHour.split(":")[0]) + 12;
    const realMins = parseInt(rawHour.split(":")[1]);
    const now = new Date();
    const date = new Date();
    date.setHours(realHour);
    date.setMinutes(realMins);

    return date;
  };
  useEffect(() => {
    if (has(state, "liveShows") && state.liveShows.length > 0) {
      // if (moment().format('h:mm A').isBefore(state.liveShows[0])) {

      let date = generateDateFromSchedule(state.liveShows[0].time);
      let dateNext = generateDateFromSchedule(state.liveShows[0].time);
      console.log(moment().format("h:mm A"), date);
      if (moment().isBefore(date)) {
        setFirstStageCurrentTitle("Live stream didn't start yet");
        setSecondStageCurrentTitle("Live stream didn't start yet");

        setFirstStageCurrentBody("");
        setSecondStageCurrentBody("");

        setFirstStageNextTitle("Live at");
        setFirstStageNextBody(state.liveShows[0].time);

        setSecondStageNextTitle("Live at");
        setSecondStageNextBody(state.liveShows[0].time);
      } else {
        setFirstStageCurrentTitle("No current live streams");
        setFirstStageCurrentBody("");

        setSecondStageCurrentTitle("No current live streams");
        setSecondStageCurrentBody("");
        for (let i = 0; i < state.liveShows.length; i++) {
          date = generateDateFromSchedule(state.liveShows[i].time);
          if (moment().isSameOrAfter(date)) {
            if (i < state.liveShows.length - 2) {
              date = generateDateFromSchedule(state.liveShows[i + 1].time);
              if (moment().isBefore(date)) {
                if (state.liveShows[i].theatre1 !== "") {
                  setFirstStageCurrentTitle("Currently Streaming");
                  setFirstStageCurrentBody(state.liveShows[i].theatre1);
                }

                if (state.liveShows[i].theatre2 !== "") {
                  setSecondStageCurrentTitle("Currently Streaming");
                  setSecondStageCurrentBody(state.liveShows[i].theatre2);
                }
              }
            }
            let foundNext = false;
            let foundNext2 = false;
            for (let j = i; j < state.liveShows.length; j++) {
              dateNext = generateDateFromSchedule(state.liveShows[j].time);
              if (
                moment().isBefore(dateNext) &&
                !foundNext &&
                state.liveShows[j].theatre1 !== ""
              ) {
                foundNext = true;
                setFirstStageNextTitle("Next presentation");
                setFirstStageNextBody(
                  state.liveShows[j].theatre1 + " at " + state.liveShows[j].time
                );
              }
              if (
                moment().isBefore(dateNext) &&
                !foundNext2 &&
                state.liveShows[j].theatre2 !== ""
              ) {
                foundNext2 = true;

                setSecondStageNextTitle("Next presentation");
                setSecondStageNextBody(
                  state.liveShows[j].theatre2 + " at " + state.liveShows[j].time
                );
              }
            }
          }
        }
      }

      // }
    }
  }, [state]);

  return (
    <MainLayout>
      <div className={"streamContainer"}>
        <Link to={"/live-stage/1"} style={{ textDecoration: "none" }}>
          <div className={"streamBubble"}>
            <div className={"streamBubbleTitle"}>Live Stream 1</div>
            <div className={"streamBubbleBody"}>
              <div>
                <div className={"currentlyStreamingTitle"}>
                  {firstStageCurrentTitle}
                </div>
                <div className={"currentlyStreamingBody"}>
                  {firstStageCurrentBody}
                </div>
                <div className={"nextStreamingTitle"}>
                  {firstStageNextTitle}
                </div>
                <div className={"nextStreamingBody"}>{firstStageNextBody}</div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/live-stage/2"} style={{ textDecoration: "none" }}>
          <div className={"streamBubble"}>
            <div className={"streamBubbleTitle"}>Live Stream 2</div>
            <div className={"streamBubbleBody"}>
              <div>
                <div className={"currentlyStreamingTitle"}>
                  {secondStageCurrentTitle}
                </div>
                <div className={"currentlyStreamingBody"}>
                  {secondStageCurrentBody}
                </div>
                <div className={"nextStreamingTitle"}>
                  {secondStageNextTitle}
                </div>
                <div className={"nextStreamingBody"}>{secondStageNextBody}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </MainLayout>
  );
};

export default HomePage;
