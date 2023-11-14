import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_3e3c2oq",
          "template_wwogx9k",
          form.current,
          "1wCpUePurg5GKW1K0"
        )
        .then(
          (result) => {
            if (form.current) {
              console.log(result.text);
              form.current.reset();
            } else {
              console.log("Form is not defined");
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Form is not defined");
    }
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="contact-form-section">
        <label>Name</label>
        <input type="text" name="user_name" required/>
      </div>
      <div className="contact-form-section">
        <label>Email</label>
        <input type="email" name="user_email" required/>
      </div>
      <div className="contact-form-section">
        <label>Message</label>
        <textarea name="message" required/>
      </div>
      <input className="contact-form-button" type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
