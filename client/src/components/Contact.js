import React, { useState } from "react";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = data;
    try {
      const res = await fetch("https://nvportfolio.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const responseData = await res.json();
      if (res.status === 422) {
        console.error("Failed to send message.");
      } else {
        alert("Message sent successfully!");
        setData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10 shadow-lg p-4 rounded">
        <h2 className="text-center mb-4 text-dark">Contact Me</h2>
        <p className="text-muted text-center mb-4">
          I’d love to hear from you! Please fill out the form below to get in
          touch.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <FiUser />
              </span>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <FiMail />
              </span>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <div className="input-group">
              <span className="input-group-text bg-primary text-white">
                <FiMessageCircle />
              </span>
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
