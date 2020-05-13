import React, { useContext, useEffect } from "react";

import "./CalendarPage.scss";
import MainLayout from "../layout/MainLayout";
import { MainContext } from "../App";
import { has } from "lodash";
const CalendarPage = () => {
  const [state, setState] = useContext(MainContext);
  return (
    <MainLayout>
      <div className={"calendarContainer"}>
        <div className={"scheduleTitle"}>Calendar - May 12th</div>
        <div className={"tableHeader"}>
          <div className={"tableCelSmall"}>Time</div>
          <div className={"tableCel"}>Theatre 1</div>
          <div className={"tableCel"}>Theatre 2</div>
        </div>
        {has(state, "liveShows") &&
          state.liveShows.length > 0 &&
          state.liveShows.map((show, index) => {
            return (
              <div className={"tableRow"}>
                {show.sectionIntro === "no" && (
                  <>
                    <div className={`tableCelSmall normalColors`}>
                      {show.time}
                    </div>
                    <div className={`tableCel normalColors`}>
                      {show.theatre1}
                    </div>
                    <div className={`tableCel normalColors`}>
                      {show.theatre2}
                    </div>
                  </>
                )}
                {show.sectionIntro === "common" && (
                  <>
                    <div className={`tableCelSmall invertedColors`}>
                      {show.time}
                    </div>
                    <div className={`tableCelLong invertedColors`}>
                      {show.theatre1}
                    </div>
                  </>
                )}
                {show.sectionIntro === "theatre1" && (
                  <>
                    <div className={`tableCelSmall invertedColors`}>
                      {show.time}
                    </div>
                    <div className={`tableCel invertedColors`}>
                      {show.theatre1}
                    </div>
                    <div className={`tableCel normalColors`}>
                      {show.theatre2}
                    </div>
                  </>
                )}
                {show.sectionIntro === "theatre2" && (
                  <>
                    <div className={`tableCelSmall normalColors`}>
                      {show.time}
                    </div>
                    <div className={`tableCel normalColors`}>
                      {show.theatre1}
                    </div>
                    <div className={`tableCel invertedColors`}>
                      {show.theatre2}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </MainLayout>
  );
};

export default CalendarPage;
