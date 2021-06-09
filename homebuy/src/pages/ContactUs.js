import React, {Component} from "react";
import {Container} from "react-bootstrap";
import emailjs from 'emailjs-com';

class ContactUs extends Component {
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
      <Container id="contactContainer">
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
</Container>
    );
  }
};
  export default ContactUs;


