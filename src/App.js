import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Select from "./Select.js";
import Assign from "./Assign.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/select">
            <Select />
          </Route>
          <Route path="/assign">
            <Assign />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
