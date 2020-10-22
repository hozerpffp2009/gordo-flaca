import React, {Component} from "react";
import {Container, Image} from "react-bootstrap";
import samSel from "../images/sam-sel.jpeg";
import {Fade, Roll} from "react-reveal";

class AboutUs extends Component {
  render() {
    return (
      <body>
        <div className="aboutBackground">
          <div className="jumbotron">
          <Fade top>
            <h1>About Us</h1>
          </Fade>
          </div>
        <Container>

          <Roll bottom>
            <Image id="samImg" src={samSel} />
          </Roll>
          <Fade bottom>
            <p id="aboutText">
              Cras in quam non ligula dignissim egestas a et odio. Curabitur
              tincidunt id tortor eget tristique. Cras convallis mi quis
              tristique luctus. Vivamus vitae mollis sapien. Donec aliquam et ex
              non euismod. Integer lacinia, ante at bibendum molestie, neque
              sapien eleifend arcu, et aliquet lacus velit eu nisi. Suspendisse
              tristique convallis lorem, pellentesque pulvinar metus feugiat ac.
              Sed pellentesque, orci non efficitur euismod, dolor eros commodo
              sapien, id posuere arcu sapien quis nisi. In massa dui, commodo
              non placerat et, molestie eu tellus. Aliquam a aliquet libero,
              quis venenatis diam. Donec vel felis eros. Pellentesque molestie,
              lacus at porta iaculis, dui diam volutpat mi, ultrices tincidunt
              justo lorem in augue.
            </p>
          </Fade>
        </Container>
        </div>
      </body>
    );
  }
}

export default AboutUs;
