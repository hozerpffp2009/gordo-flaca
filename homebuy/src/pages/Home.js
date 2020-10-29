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

class Home extends Component {
  render() {
    return (     
      <body class="background">
        <div >
          <div class="jumbotron">
            <Fade top>
              <div className="jumboTitle">
                <h1>Sell Your House Fast In San Antonio, Tx.</h1>
                <h3>Get A Fair Cash Offer No Fees. No Commissions!</h3>
              </div>
            </Fade>
           
          </div>
          <Zoom bottom></Zoom>
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
        <h3>Contact Us</h3>
        </Fade>
        <Fade bottom>
        <form action="/action_page.php">
          <label for="fName">First Name</label>
          <input
            type="text"
            id="fName"
            name="firstname"
            placeholder="Your first name.."
          ></input>
          <label for="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            name="lastname"
            placeholder="Your last name.."
          ></input>
          <label for="state">State</label>
          <select id="state" name="state">
            <option value="Texas">Texas</option>
            <option value="Louisiana">Louisiana</option>
            <option value="Arkansas">Arkansas</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="New Mexico">New Mexico</option>
            <option value="Other">Other</option>
          </select>
          <label for="subject">Brief Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{height:200}}
          ></textarea>
          <input type="submit" value="Submit"></input>
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