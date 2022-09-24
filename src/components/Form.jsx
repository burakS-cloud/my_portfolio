import "./FormStyles.css";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Form = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fm5hpet",
        "template_tf626gb",
        form.current,
        "wTNafF3rV_8qedcdB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Your Name</label>
          <input type="text" name="user_name" />
          <label htmlFor="">Email</label>
          <input type="email" name="user_email"></input>
          <label htmlFor="">Subject</label>
          <input type="text" name="user_subject"></input>
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            placeholder="Type Your Message Here"
            rows="6"
          ></textarea>
          <button className="btn">Submit</button>
          {done && (
            <p style={{ textAlign: "center", marginTop: "1.5em" }}>
              Thank you!
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
