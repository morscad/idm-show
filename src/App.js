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

export const MainContext = React.createContext({ projects: {} });

const App = () => {
  const [state, setState] = useState({ projects: {} } );
  const [isInit, init] = useState(false);

  const getAllProjects = async () => {
    let projects = [];
    const result = await api.sendRequest(
      process.env.REACT_APP_AIRTABLE_URL.split("{-}").join(
        process.env.REACT_APP_AIRTABLE_BASE_ID
      ),
      {},
      "GET"
    );
    const { records, offset } = result;
    projects = concat(projects, records);
    if (!!offset && offset !== "") {
      const result2 = await api.sendRequest(
        `${process.env.REACT_APP_AIRTABLE_URL.split("{-}").join(
          process.env.REACT_APP_AIRTABLE_BASE_ID
        )}?offset=${offset}`,
        {},
        "GET"
      );
      projects = concat(projects, result2.records);
      const { records2 } = result2;
    }
    console.log(projects);
    let projectByCategory = {};
    projects.forEach((project) => {
      if (!projectByCategory[project.fields.Type]) {
        projectByCategory[project.fields.Type] = [];
      }
      projectByCategory[project.fields.Type].push(project.fields);
    })

    setState({ projects: projectByCategory });
    // console.log(projects);
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
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
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
