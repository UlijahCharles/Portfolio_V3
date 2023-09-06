import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <h2>Want to contact me?</h2>
      <section class="contacts">
        <div class="container">
          <h1 id="contact">Contact</h1>
          <form action="https://formspree.io/f/mqkogwlo" method="POST">
            <div class="form-group">
              <label for="Name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="Email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="Message">Message</label>
              <textarea
                class="form-control"
                id="message"
                name="message"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <input
              type="submit"
              value={"Get In Touch"}
              class="btn btn-light"
            ></input>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
