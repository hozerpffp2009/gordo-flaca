import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
  } from "mdbreact";

class Nav extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <MDBNavbar className="topnav" dark expand="md">
      <MDBNavbarBrand>
      <a class="navbar-brand" href="/contactUs"><FontAwesomeIcon id="check" icon={faEnvelope} size="2x" /></a>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/contactUs">Contact Us</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/aboutUs">About Us</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>

      // <div class="topnav">
      //   <a class="navbar-brand" href="/contactUs"><FontAwesomeIcon id="check" icon={faEnvelope} size="2x" /></a>
      //   <a href="/">Home</a>
      //   <a href="/contactUs">Contact Us</a>
      //   <a href="/aboutUs">About Us</a>      
      // </div>
    );
  }
}

export default Nav;