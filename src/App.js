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

export const MainContext = React.createContext({ settings:{}, projects: {}, allProjects: [] });

const App = () => {
  const [state, setState] = useState({ settings:{}, projects: {} } );
  const [isInit, init] = useState(false);

  const getAllProjects = async () => {
    let projects = [];
    let settings = {};
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

    const result = await api.sendRequest(
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
      if (!projectByCategory[project.fields.conceptCategory]) {
        if (!project.fields.conceptCategory) {
          project.fields.conceptCategory = "Other";
        }
        projectByCategory[project.fields.conceptCategory] = [];
      }
      projectByCategory[project.fields.conceptCategory].push(project.fields);
    })

    setState({ settings: settings, projects: projectByCategory });
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
