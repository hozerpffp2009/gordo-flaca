import React, {Component} from "react";
import {Container, Image} from "react-bootstrap";
import samSel from "../images/sam-sel.jpeg";
import {Fade} from "react-reveal";

class AboutUs extends Component {
  render() {
    return (
      <body className="background">
        <div className="jumbotron">
          <Fade top>
            <h1>About Us</h1>
          </Fade>
        </div>
        <Container>}
          <div class="flip-card">
          <div class="flip-card-inner">  
          <div class="flip-card-front">
            <Image id="samImg" src={samSel} />
            </div>             
          <div class="flip-card-back">
            <p> Our mission is simple - to make selling your home as fast and easy as possible! We are a local company that specializes
             in helping homeowners sell their houses without agents, fees, or commissions! It doesn't matter what reason you have for selling,
             or the condition fo your property - we can help. We make all CASH offers, and close quickly.</p>
          </div>
        </div>
      </div>
        </Container>
      </body>
    );
  }
}

export default AboutUs;
