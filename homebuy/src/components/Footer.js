import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";

class Footer extends Component {
    render() {
        return(
            <MDBFooter color="blue" className="font-small pt-4 mt-4" id="footer">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Gordo and flaca</h5>
                  <p>
                   A loving husband and wife willing to purchase your home and make a reasonable offer for CASH.
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                    <MDBNavLink to="/gordo-flaca">Home</MDBNavLink>
                    </li>
                    <li className="list-unstyled">
                    <MDBNavLink to="/aboutUs">About Us</MDBNavLink>
                    </li>
                    <li className="list-unstyled">
                    <MDBNavLink to="/contactUs">Contact Us</MDBNavLink>
                    </li>
                    <li className="list-unstyled">
                      <MDBNavLink to="https://hozerpffp2009.github.io/reactPortfolio/">Created by Joseph A.</MDBNavLink>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        )
    }
}

export default Footer;