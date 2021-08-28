import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News key="general" pageSize="10" category="general"/></Route>
            <Route exact path="/business"><News key="business" pageSize="10" category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize="10" category="entertainment"/></Route>
            <Route exact path="/health"><News key="health" pageSize="10" category="health"/></Route>
            <Route exact path="/science"><News key="science" pageSize="10" category="science"/></Route>
            <Route exact path="/sports"><News key="sports" pageSize="10" category="sports"/></Route>
            <Route exact path="/technology"><News key="technology" pageSize="10" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
