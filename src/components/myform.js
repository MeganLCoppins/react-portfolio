import React from "react";
import "./myform.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mpzyybne"
          method="POST"
          id="contactForm"
          style={{
            margin: "3% 10%",
            height: 800,
          }}
        >
          <input type="name" name="name" className="contactInput" />
          <br />
          <label>Name</label>
          <br />
          <input type="email" name="email" className="contactInput" />
          <br />
          <label>Email</label>
          <br />
          <textarea
            type="text"
            name="message"
            wrap="soft"
            className="contactInput"
            style={{ padding: "3px 5px 100px 5px" }}
          ></textarea>
          <br></br>
          <label>Message</label>
          <br></br>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button id="submitBtn">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
