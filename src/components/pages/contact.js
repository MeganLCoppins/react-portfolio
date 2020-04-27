import React from "react";
import "../style/contact.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    // <Container id="contact">
    <div className="contact">
        {/* <Jumbotron fluid style={{backgroundColor: "rgba(199, 57, 100, 0.755)", paddingTop: "2%", paddingBottom: "3%"}}>
        <Container>
        </Container>
        </Jumbotron> */}
          <h1>Let's Get In Touch!</h1>
      <div className="backgroundImg">
        <a href="https://github.com/MeganLCoppins" target="_blank" rel="noopener noreferrer"> <img fluid src="https://pngimg.com/uploads/github/github_PNG83.png" alt="github"></img></a>
        <a href="https://linkedin.com/in/meganlcoppins" target="_blank" rel="noopener noreferrer"> <img fluid src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_black-512.png" alt="linkedin"></img></a>

        <a href="https://docs.google.com/document/d/1WMkMextzoaoaByTTQHhFJt4iTbdCAmappNUgLW3fmDA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> <img fluid src="https://image.flaticon.com/icons/png/512/14/14573.png" alt="resume"></img></a>
      </div>
      <div className="form">
        <h3>MeganLCoppins@gmail.com</h3>
      {/* <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label style={{fontSize: "25px"}}>Email address</Form.Label>
          <Form.Control size="lg" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{fontSize: "25px"}}>Message</Form.Label>
          <Form.Control size="lg" as="textarea" rows="5" placeholder="Type your message here!" />
        </Form.Group>
      </Form> */}
      </div>
    </div>
    // </Container>
  );
}

export default Contact;
