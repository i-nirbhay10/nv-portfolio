// import React from "react";
import "./style/contact.css";
// import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h2>Contact Me</h2>
//       <p>You can reach out to me using the form below:</p>
//       <form className="contact-form">
//         <div className="input-group">
//           <FiUser className="input-icon" />
//           <input type="text" placeholder="Your Name" />
//         </div>
//         <div className="input-group">
//           <FiMail className="input-icon" />
//           <input type="email" placeholder="Your Email" />
//         </div>
//         <div className="input-group">
//           <FiMessageCircle className="input-icon" />
//           <textarea placeholder="Your Message"></textarea>
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="contact-container py-4">
        <h2>Contact Me</h2>

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
            <form className="contact-form">
              <p>Feel free to get in touch with me:</p>
              <div className="form-group">
                <label htmlFor="name">
                  <FiUser className="input-icon" />
                </label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FiMail className="input-icon" />
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageCircle className="input-icon" />
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button className="btn-con" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
