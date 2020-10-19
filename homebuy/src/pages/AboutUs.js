import React, {Component} from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import samSel from "../images/sam-sel.jpeg";
import {Fade, Roll} from "react-reveal";

class AboutUs extends Component {
    render () {
        return(
            <body>
                <Container>
                    <Fade top>
                    <h1>About Us</h1>
                    </Fade>
                    <Roll bottom>
                    <Row>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}>
                        <Image id="samImg" src={samSel} />
                    </Col>
                    <Col xs={6} md={4}></Col>
                    </Row>
                    </Roll>
                </Container>
            </body>
        )
    }
}

export default AboutUs;