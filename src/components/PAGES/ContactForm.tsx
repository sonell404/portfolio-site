import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

const ContactForm = () => {
  // State to follow if the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Ref to the form
  const form = useRef<HTMLFormElement>(null);

  // Function to send email
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevents the page from refreshing
    e.preventDefault();

    // Sends the email if the form is defined
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
              // Log the result of the email
              console.log(result.text);

              // Reset the form and set the state of submission to true
              form.current.reset();
              setIsSubmitted(true);
            } else {
              console.log("Form is not defined");
            }
          },
          (error) => {
            // Log the error of the email
            console.log(error.text);
          }
        );
    } else {
      // Log if the form is not defined
      console.log("Form is not defined");
    }
  };

  return (
    <>
      {/* If form is submitted, display success message, else display the form */}
      {isSubmitted ? (
        <div className="success-message" onClick={() => setIsSubmitted(false)}>
          <p>
            Message sent successfully!
            <br />
            __________<p className="jiffy">I'll get back to you in a jiffy.</p>
          </p>
        </div>
      ) : (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-form-section">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              aria-required="true"
            />
          </div>
          <div className="contact-form-section">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              aria-required="true"
            />
          </div>
          <div className="contact-form-section">
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              required
              aria-required="true"
            />
          </div>
          <input className="contact-form-button" type="submit" value="Send" />
        </form>
      )}
    </>
  ); // End of return
}; // End of ContactForm

export default ContactForm;
