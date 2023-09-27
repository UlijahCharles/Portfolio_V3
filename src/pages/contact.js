import React from "react";
import "../css/contact.css";
import Button from "../components/button";

const Contact = () => {
  return (
    <React.Fragment>
      <h2 className="contact-header">Want to contact me?</h2>
      <section className="contacts">
        <div className="container">
          <form action="https://formspree.io/f/mqkogwlo" method="POST">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <input
                type="message"
                className="form-control"
                id="message"
                name="message"
                required
              ></input>
            </div>
            <Button title="Get In Touch" class="contact" />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
