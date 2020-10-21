import React, {Component} from "react";
import {Container} from "react-bootstrap";
import {Fade} from "react-reveal";


class ContactUs extends Component {
  render() {
    return (
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
    );
  }
}

export default ContactUs;
