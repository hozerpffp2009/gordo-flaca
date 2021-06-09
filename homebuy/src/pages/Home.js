import React, {Component} from "react";
import {Container} from "react-bootstrap";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faHome,
  faCheck,
  faCheckCircle,
  faFileSignature,
  faHouseDamage,
  faMoneyBillAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import {MDBNavLink} from "mdbreact";
import logo from "../images/logo.jpg";
import ScrollableAnchor from "react-scrollable-anchor";
import emailjs from 'emailjs-com';

class Home extends Component {
  state ={
    name: "",
    email: "",
    message: "",
    emailStatus : ""
  }
  render() {
    function sendEmail(e) {
      e.preventDefault();
    
      emailjs.sendForm('service_0gw7b8s', 'template_7kxszml', e.target, 'user_nBn6qSWpfr7v7m8wDgzYV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
      <body>
        <div>
          <div class="jumbotron">
            <Fade top>
              <div className="jumboTitle">
                <h1>Sell Your House Fast In San Antonio, Tx.</h1>
                <h3>Get A Fair Cash Offer No Fees. No Commissions!</h3>
              </div>
            </Fade>
          </div>
          <Zoom bottom>
            <ScrollableAnchor id={"logo"}>
              <div id="logo">               
                  <img src={logo} alt="logo"></img>
              </div>
            </ScrollableAnchor>
          </Zoom>
          <div class="row">
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Img />
                  <Card.Body>
                    <Card.Title className="title">Our Mission</Card.Title>
                    <Card.Text>
                      Our mission is simple - to make selling your home as fast
                      and easy as possible! We are a local compnay that
                      specializes in helping homeowners sell their houses
                      without agents, fees, or commissions! It doesn't matter
                      what reason you have for selling, or the condition of your
                      property - we can help. We make all CASH offers, and close
                      quickly.
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <MDBNavLink to="/aboutUs">About Us</MDBNavLink>
                  </Card.Body>
                </Card>
              </Fade>
            </div>
            <br></br>
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Img />
                  <Card.Body>
                    <Card.Title className="title">In Your Area</Card.Title>
                    <Card.Text>
                      We buy houses in your area (and many others). It doesn't
                      matter where you live, we close quickly and pay all CASH!
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      San Antonio, TX
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Surounding Areas
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Out Of State
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Fade>
            </div>
          </div>
          <Container id="contactContainer">
            <Fade top>
              <h3>Sell Your House Fast</h3>
              <p>To receive a fair cash offer, submit the form below.</p>
            </Fade>
            <Fade bottom>
              <form onSubmit={sendEmail}>
 
                <label for="fName">First Name</label>
                <input
                  type="text"
                  id="fName"
                  name="firstname"
                  placeholder="Your first name.."
                  required
                ></input>
                <label for="lName">Last Name</label>
                <input
                  type="text"
                  id="lName"
                  name="lastname"
                  placeholder="Your last name.."
                  required
                ></input>
                <label for="email">Email</label>
                <input
                  type="text"
                  id="lName"
                  name="email"
                  placeholder="Enter your email"
                  required
                ></input>
                <label for="phone">Phone</label>
                <input
                  type="text"
                  id="lName"
                  name="phone"
                  placeholder="111-111-1111"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                ></input>
                <label for="address">Property Address</label>
                <input
                  type="text"
                  id="lName"
                  name="address"
                  placeholder="Enter Your Property Address"
                  required
                ></input>
                <label for="zip">Property Zip Code</label>
                <input
                  type="text"
                  id="lName"
                  name="zip"
                  placeholder="Enter Your Property Zip Code"
                  required
                ></input>
                <label for="beds">#Beds</label>
                <select id="state" name="beds">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
                <label for="baths">#Baths</label>
                <select id="state" name="baths">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
                <label for="subject">Brief Message</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{height: 200}}
                ></textarea>
                <input type="submit" value="Click To Get Your Offer"></input>
              </form>
            </Fade>
          </Container>
          <br></br>
          <div class="row">
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Img />
                  <Card.Body>
                    <FontAwesomeIcon id="home" icon={faHome} size="3x" />
                    <Card.Title className="title">
                      Any Home Condition
                    </Card.Title>
                    <Card.Text>
                      We understand that life happens, and you may need to sell
                      your home "as is." We buy homes in any condition (even if
                      the house needs repairs).
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Foundation Issues
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Water Damage
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Mold
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Fire Damage
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Extensive Repairs
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Needs New Roof
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Vandalism
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Hoarding
                      <FontAwesomeIcon id="iconCheck" icon={faCheckCircle} />
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Fade>
            </div>
            <br></br>
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Img />
                  <Card.Body>
                    <FontAwesomeIcon id="home" icon={faHouseDamage} size="3x" />
                    <Card.Title className="title">Any Situation</Card.Title>
                    <Card.Text>
                      We help any situation that you may have. We respect your
                      privacy, and have discreetly helped people in many
                      situations, including :
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Pre-Foreclosure
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Divorce
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Behind on Payments
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Inherited Property
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Burned Out Landlord
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Bankruptcy
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Relocation
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                    <ListGroupItem>
                      Fire Damaged
                      <FontAwesomeIcon id="iconCheck" icon={faCheck} />
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Fade>
            </div>
          </div>
          <br></br>
          <h3>How It Works</h3>
          <div class="row">
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Img />
                  <Card.Body>
                    <FontAwesomeIcon
                      id="check"
                      icon={faCheckSquare}
                      size="2x"
                    />
                    <Card.Title className="title">Step #1: Offer</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Click the link below</ListGroupItem>
                    <ListGroupItem>
                      We contact you to get information
                    </ListGroupItem>
                    <ListGroupItem>
                      We do not share your information
                    </ListGroupItem>
                    <ListGroupItem>We make a CASH offer</ListGroupItem>
                  </ListGroup>
                </Card>
              </Fade>
            </div>
            <br></br>
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Img />
                  <Card.Body>
                    <FontAwesomeIcon
                      id="check"
                      icon={faFileSignature}
                      size="2x"
                    />
                    <Card.Title className="title">Step #2: Contract</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      If you accept the offer, we send a contract
                    </ListGroupItem>
                    <ListGroupItem>You sign the contract</ListGroupItem>
                  </ListGroup>
                </Card>
              </Fade>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div className="column">
              <Fade right>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Body>
                    <FontAwesomeIcon
                      id="home"
                      icon={faMoneyBillAlt}
                      size="3x"
                    />
                    <Card.Title className="title">Step #3: Get Cash</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>You choose a closing date</ListGroupItem>
                    <ListGroupItem>
                      You get paid Cash (in as little as 7 days)
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Fade>
            </div>
            <br></br>
            <div className="column">
              <Fade bottom>
                <Card style={{width: "18rem"}} className="Card">
                  <Card.Body>
                    <FontAwesomeIcon id="home" icon={faWallet} size="3x" />
                    <Card.Title className="title">
                      Get Your Fair Cash Offer
                    </Card.Title>
                    <Card.Text>
                      If you want to sell your house, but dont want to deal with
                      agents, fees, commissions, showings, being listedon the
                      MLS, or waiting months to close... then click the button
                      below now. We can make a fair cash offer on your home and
                      close quickly (in as little as 7 days). You are under No
                      obligation to accept the offer, the choice is yours.
                    </Card.Text>
                  </Card.Body>
                  <MDBNavLink to="/contactUs">Get Your Cash Offer</MDBNavLink>
                </Card>
              </Fade>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Home;
