import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className=" text-center text-md-start">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Contact Info</h5>
            <p className="d-flex align-items-center justify-content-center justify-content-md-start">
              <FaEnvelope className="me-2 text-danger" />
              <a
                href="mailto:nirbhayverma10@gmail.com"
                className="text-white text-decoration-none"
              >
                nirbhayverma10@gmail.com
              </a>
            </p>
            <p className="d-flex align-items-center justify-content-center justify-content-md-start">
              <FaPhone className="me-2 text-success" /> +91 8787280055
            </p>
          </div>

          {/* Credits */}
          <div className="col-md-6 text-center text-md-end">
            <h4>Thanks for visiting!</h4>
            <h6 className="text-muted">Created by Nirbhay Verma</h6>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Nirbhay Verma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
