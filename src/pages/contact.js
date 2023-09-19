import React from "react";
import "../css/contact.css";
import Button from "../components/button";

const Contact = () => {
  return (
    <React.Fragment>
      <h2 className="contact-header">Want to contact me?</h2>
      <section class="contacts">
        <div class="container">
          <form action="https://formspree.io/f/mqkogwlo" method="POST">
            <div class="form-grid">
              <div class="form-group">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="Message">Message</label>
              <input
                type="message"
                class="form-control"
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
