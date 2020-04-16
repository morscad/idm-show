import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserManager from "./services/UserManager";

const MainContext = React.createContext({ users: []});

const App = () => {
  const [state, setState] = useState({users: [] });
  return (
    <MainContext.Provider value={[state, setState]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage context={MainContext} />
          </Route>
        </Switch>
      </Router>
      <UserManager context={MainContext} />
    </MainContext.Provider>
  );
};

export default App;
