import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;
  state = {progress: 10}
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Navbar/>
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize="10" category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize="10" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize="10" category="entertainment"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize="10" category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize="10" category="science"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize="10" category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize="10" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
