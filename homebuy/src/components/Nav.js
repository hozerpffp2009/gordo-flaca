import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

class Nav extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  };
  render() {
    return (
      <MDBNavbar className="topnav" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/contactUs">
            <a class="navbar-brand">
              <FontAwesomeIcon id="check" icon={faEnvelope} size="2x" />
            </a>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/gordo-flaca">Home</MDBNavLink>
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
    );
  }
}

export default Nav;
