import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { concat } from "lodash";

import "./App.scss";
import HomePage from "./pages/HomePage";
import UserManager from "./services/UserManager";
import api from "./services/apiService";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CalendarPage from "./pages/CalendarPage";
import LiveStage from "./pages/LiveStage";
import CategoriesPage from "./pages/CategoriesPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import siteSettings from "./assets/data/siteSettings";
import studentWork from "./assets/data/studentWork";
import liveSchedule from "./assets/data/liveSchedule";

export const MainContext = React.createContext({
  settings: {},
  projects: {},
  liveShows: []
});

const App = () => {
  const [state, setState] = useState({
    settings: {},
    projects: {},
    liveShows: []
  });
  const [isInit, init] = useState(false);

  const getAllProjects = async () => {
    let projects = [];
    let projectByCategory = {};
    let liveShows = [];
    let settings = {};
    Object.keys(siteSettings).map(key => {
      settings[key] = siteSettings[key];
    });

    studentWork.forEach(project => {
      if (!projectByCategory[project.techCategory]) {
        if (!project.techCategory) {
          project.techCategory = "Other";
        }
        projectByCategory[project.techCategory] = [];
      }
      projectByCategory[project.techCategory].push(project);
    });

    liveSchedule.map(res => {
      liveShows.push(res);
    });
    liveShows = liveShows.sort((a, b) => (a.time > b.time ? 1 : -1));

    /*

       const settingsResult = await api.sendRequest(
        process.env.REACT_APP_AIRTABLE_SETTINGS_URL.split("{-}").join(
            process.env.REACT_APP_AIRTABLE_BASE_ID
        ),
        {},
        "GET"
    );
    settingsResult.records.map((res) => {
      settings[res.fields.key] = res.fields.value;
    });


    const liveshowResult = await api.sendRequest(
        process.env.REACT_APP_AIRTABLE_LIVESHOW_URL.split("{-}").join(
            process.env.REACT_APP_AIRTABLE_BASE_ID
        ),
        {},
        "GET"
    );
    liveshowResult.records.map((res) => {
      liveShows.push(res.fields);
    });
    liveShows = liveShows.sort((a, b) => (a.time > b.time) ? 1 : -1)
     */

    /*const result = await api.sendRequest(
      process.env.REACT_APP_AIRTABLE_PROJECTS_URL.split("{-}").join(
        process.env.REACT_APP_AIRTABLE_BASE_ID
      ),
      {},
      "GET"
    );
    const { records, offset } = result;
    projects = concat(projects, records);
    if (!!offset && offset !== "") {
      const result2 = await api.sendRequest(
        `${process.env.REACT_APP_AIRTABLE_PROJECTS_URL.split("{-}").join(
          process.env.REACT_APP_AIRTABLE_BASE_ID
        )}?offset=${offset}`,
        {},
        "GET"
      );
      projects = concat(projects, result2.records);
      const { records2 } = result2;
    }
    let projectByCategory = {};
    projects.forEach((project) => {
      if (!projectByCategory[project.fields.techCategory]) {
        if (!project.fields.techCategory) {
          project.fields.techCategory = "Other";
        }
        projectByCategory[project.fields.techCategory] = [];
      }
      projectByCategory[project.fields.techCategory].push(project.fields);
    })*/

    setState({
      settings: settings,
      projects: projectByCategory,
      liveShows: liveShows
    });
  };
  useEffect(() => {
    if (!isInit) {
      init(true);
      getAllProjects();
    }
  }, [isInit]);
  return (
    <MainContext.Provider value={[state, setState]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/live-stage/:stageID">
            <LiveStage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/project/:projectID">
            <ProjectDetailsPage />
          </Route>
          <Route exact path="/category/:categoryName">
            <ProjectsPage />
          </Route>
          <Route exact path="/categories">
            <CategoriesPage />
          </Route>
          <Route exact path="/calendar">
            <CalendarPage />
          </Route>
        </Switch>
      </Router>
    </MainContext.Provider>
  );
};

export default App;
