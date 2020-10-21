import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return(
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Gordo and flaca</h5>
                  <p>
                    Here you can use rows and columns here to organize your footer
                    content.
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Links</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="/">Home</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/aboutUs">About Us</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="/contactUs">Contact Us</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://hozerpffp2009.github.io/reactPortfolio/">Created by Joseph A.</a>
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