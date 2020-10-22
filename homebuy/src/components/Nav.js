import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class Nav extends Component {
  render() {
    return (
      <div class="topnav">
        <a class="navbar-brand" href="/contactUs"><FontAwesomeIcon id="check" icon={faEnvelope} size="2x" /></a>
        <a href="/">Home</a>
        <a href="/contactUs">Contact Us</a>
        <a href="/aboutUs">About Us</a>      
      </div>
    );
  }
}

export default Nav;