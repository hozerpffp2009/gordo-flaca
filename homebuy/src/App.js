import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="contactUs" component={ContactUs} />
            <Route path="aboutUs" component={AboutUs} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
