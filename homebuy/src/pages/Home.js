import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  Container,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Image from "react-bootstrap/Image";
import skyline from "../images/skyline.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons'

class Home extends Component {
  render() {
    return (
      <body>
        <Jumbotron fluid>
          <Container>
            <Fade top>
              <h1>Sell Your House Fast In San Antonio, Tx.</h1>
              <h3>Get A Fair Cash Offer No Fees. No Commissions!</h3>
            </Fade>
          </Container>
        </Jumbotron>
        <Zoom bottom>
          <Image id="imgSky" src={skyline}></Image>
        </Zoom>
        <Fade right>
          <Card style={{width: "18rem"}} className="homeCard">
            <Card.Img />
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is simple - to make selling your home as fast and
                easy as possible! We are a local compnay that specializes in
                helping homeowners sell their houses without agents, fees, or
                commissions! It doesn't matter what reason you have for selling,
                or the condition of your property - we can help. We make all
                CASH offers, and close quickly.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Button variant="primary" href="/aboutUs">
                About Us
              </Button>
            </Card.Body>
          </Card>
        </Fade>
        <br></br>
        <h3>Who We Help</h3>
        <Fade right>
          <Card style={{width: "18rem"}}>
            <Card.Img />
            <Card.Body>
              <Card.Title>Any Situation</Card.Title>
              <Card.Text>
                We help any situation that you may have. We respect your
                privacy, and have discreetly helped people in many situations,
                including :
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Pre-Foreclosure</ListGroupItem>
              <ListGroupItem>Divorce</ListGroupItem>
              <ListGroupItem>Behind on Payments</ListGroupItem>
              <ListGroupItem>Inherited Property</ListGroupItem>
              <ListGroupItem>Burned Out Landlord</ListGroupItem>
              <ListGroupItem>Bankruptcy</ListGroupItem>
              <ListGroupItem>Relocation</ListGroupItem>
              <ListGroupItem>Fire Damaged</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">ContactUs</Card.Link>
            </Card.Body>
          </Card>
        </Fade>
        <br></br>
        <Fade right>
          <Card style={{width: "18rem"}}>
            <Card.Img />
            <Card.Body>
              <Card.Title>Any Home Condition</Card.Title>
              <Card.Text>
                We understand that life happens, and you may need to sell your
                home "as is." We buy homes in any condition (even if the house
                needs repairs).
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Foundation Issues</ListGroupItem>
              <ListGroupItem>Water Damage</ListGroupItem>
              <ListGroupItem>Mold</ListGroupItem>
              <ListGroupItem>Fire Damage</ListGroupItem>
              <ListGroupItem>Extensive Repairs</ListGroupItem>
              <ListGroupItem>Needs New Roof</ListGroupItem>
              <ListGroupItem>Vandalism</ListGroupItem>
              <ListGroupItem>Hoarding</ListGroupItem>
            </ListGroup>
          </Card>
        </Fade>
        <br></br>
        <Fade right>
          <Card style={{width: "18rem"}}>
            <Card.Img />
            <Card.Body>
              <Card.Title>In Your Area</Card.Title>
              <Card.Text>
                We buy houses in your area (and many others). It doesn't matter where you live, we close quickly and pay all CASH!
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>San Antonio, TX</ListGroupItem>
              <ListGroupItem>Surounding Areas</ListGroupItem>
              <ListGroupItem>Out Of State</ListGroupItem>
            </ListGroup>
          </Card>
        </Fade>
        <br></br>
        <h3>How It Works</h3>
        <Fade right>
          <Card  style={{width: "18rem", }} >
            <Card.Img />
            <Card.Body>
            <FontAwesomeIcon id="check" icon={faCheckSquare} size="2x" />
              <Card.Title>Step #1: Offer</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Click the link below</ListGroupItem>
              <ListGroupItem>We contact you to get information</ListGroupItem>
              <ListGroupItem>We do not share your information</ListGroupItem>
              <ListGroupItem>We make a CASH offer</ListGroupItem>
            </ListGroup>
          </Card>
        </Fade>
        <br></br>
        <Fade right>
          <Card style={{width: "18rem"}}>
            <Card.Img />
            <Card.Body>
              <Card.Title>Step #2: Contract</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>If you accept the offer, we send a contract</ListGroupItem>
              <ListGroupItem>You sign the contract</ListGroupItem>
            </ListGroup>
          </Card>
        </Fade>
        <br></br>
        <Fade right>
          <Card style={{width: "18rem"}}>
            <Card.Body>
              <Card.Title>Step #3: Get Cash</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>You choose a closing date</ListGroupItem>
              <ListGroupItem>You get paid Cash (in as little as 7 days)</ListGroupItem>
            </ListGroup>
          </Card>
        </Fade>
        <br></br>
        <Fade bottom>
        <Card style={{width: "18rem"}}>
            <Card.Body>
              <Card.Title>Get Your Fair Cash Offer</Card.Title>
              <Card.Text>
              If you want to sell your house, but dont want to deal with agents,
              fees, commissions, showings, being listedon the MLS, or waiting
              months to close... then click the button below now. We
              can make a fair cash offer on your home and close quickly (in as
              little as 7 days). You are under No obligation to accept the
              offer, the choice is yours.
            </Card.Text>
            </Card.Body>
            <Button variant="primary" href="mailto: ">Get Your Cash Offer</Button>
          </Card>
        </Fade>
      </body>
    );
  }
}

export default Home;
