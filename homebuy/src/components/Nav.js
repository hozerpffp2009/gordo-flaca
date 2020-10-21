import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {

  render() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="mailto:"><FontAwesomeIcon id="check" icon={faEnvelope} size="2x" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="main_nav">
 <ul class="navbar-nav mx-auto">
	<li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
	<li class="nav-item"><a class="nav-link" href="/aboutUs"> About Us</a></li>
	<li class="nav-item"><a class="nav-link" href="/contactUs"> Contact Us </a></li>
</ul>
	  
  </div> 

</nav>
    );
  }
}

export default Nav;
