import "./style/contact.css";
import React, { useState } from "react";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  const [data, setdata] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const chancedata = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = data;
    try {
      console.log(data);

      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const responcedata = await res.json();
      if ((await responcedata.status) === 422) {
        console.log("200 status not gets");
      } else {
        window.alert("message send successfully");
        setIsSubmitting(false);
        setdata({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      console.log("error in contact postdata");
    }
  };

  return (
    <>
      <div className="contact-container py-4">
        <h2>Contact Me</h2>
        <h2>
          {data.email} {data.message} {data.name}
        </h2>
        <div className="d-md-flex justify-content-around my-5">
          {/* image */}
          <div className="d-none d-md-block con-img-div">
            <div className="con-image-container">
              {/* eslint-disable-next-line */}
              <img className="con-image" src="contact.jpg" alt="Your Image" />
            </div>
          </div>

          {/* contact form */}
          <div>
            <form className="contact-form" method="POST">
              <p>Feel free to get in touch with me:</p>
              <div className="form-group">
                <label htmlFor="name">
                  <FiUser className="input-icon" />
                </label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={chancedata}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FiMail className="input-icon" />
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="email"
                  value={data.email}
                  onChange={chancedata}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageCircle className="input-icon" />
                </label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={chancedata}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button className="btn-con" onClick={postdata} type="submit">
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
