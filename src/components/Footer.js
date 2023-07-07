import React from "react";
import "./style/footer.css"; // Import CSS file for styling
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import email and phone icons from react-icons library

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <div className="contact-text">
            <FaEnvelope className="me-3" />
            <a href="nirbhayverma10@gmail.com">nirbhayverma10@gmail.com</a>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-text">
            <FaPhone className="me-3" /> +91 8787280055
          </div>
        </div>
        <div className="credit text-center">
          <h4>Thanks for visiting.</h4>
          <h3>Created By Nirbhay verma.</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
