import React from "react";
import "./style/about.css";
const About = () => {
  return (
    <div className="about-container">
      <h4>About Me</h4>
      <p>
        As a React full-stack developer, I specialize in building web
        applications that provide exceptional user experiences. With expertise
        in front-end technologies like HTML, CSS, and JavaScript, I create
        visually appealing and interactive interfaces using the powerful React
        library. On the back-end, I leverage technologies such as Node.js and
        databases like MongoDB to handle data management and server-side logic
        efficiently. With a focus on scalability and performance, I develop
        responsive applications that work seamlessly across different devices
        and platforms. My proficiency in both front-end and back-end development
        enables me to deliver high-quality, feature-rich web solutions that meet
        client requirements and user expectations.
      </p>
      <h3>Education</h3>
      <ul>
        <li>
          <strong>Bachelor of Information Technology</strong> -Dr. RMLAU
          University, Ayodhya, UP (2023)
        </li>
        <li>
          <strong>Diploma in Computer Sscience and Engeneering</strong> -MP
          Polytechnic , Gorakhpur, UP (2020)
        </li>
      </ul>
      <h3>Certifications</h3>
      <ul>
        <li>
          <strong>Full-Stack Web Development</strong> - Internshala (2022)
        </li>
        <li>
          <strong>Programming in python</strong> - Nielit (2018)
        </li>
        <li>
          <strong>Communication Skills</strong> - Tata Counsultancy Services
          (2022)
        </li>
      </ul>
    </div>
  );
};

export default About;
