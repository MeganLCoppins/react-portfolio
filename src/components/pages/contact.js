import React from "react";
import "../style/contact.css";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contact;
