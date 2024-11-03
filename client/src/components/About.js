import React from "react";
import "./style/about.css";

const About = () => {
  return (
    <div className="about-container ">
      <h4>About Me</h4>
      <p>
        I’m a passionate MERN stack developer with a strong focus on crafting
        seamless web and mobile applications that make a real impact.
        Specializing in <strong>React.js</strong> and{" "}
        <strong>React Native</strong>, I deliver high-quality, cross-platform
        solutions that provide consistent user experiences across devices.
        Leveraging <strong>Node.js</strong>, <strong>Express.js</strong>, and{" "}
        <strong>MongoDB</strong> on the back end, I build scalable and
        feature-rich applications tailored to client needs. In my work as a
        full-stack developer, I’ve led the development of a range of projects,
        from full-featured web applications like <strong>Wiregram</strong> (an
        Instagram-inspired app with secure Google OAuth and JWT integration) to
        mobile portfolio apps showcasing skills and projects with React Native’s
        responsive, performance-focused architecture. My experience extends to
        real-time applications for news and weather, API integration, and
        deployment across <strong>Netlify</strong> and <strong>Render</strong>,
        ensuring optimal functionality and performance.
      </p>

      <h3>Education</h3>
      <ul>
        <li>
          <strong>Bachelor of Technology (Information Technology)</strong> - Dr.
          Ram Manohar Lohiya Awadh University, Ayodhya, UP (2023) - 77%
        </li>
        <li>
          <strong>Diploma in Computer Science and Engineering</strong> -
          Maharana Pratap Polytechnic, Gorakhpur, UP (2017) - 73%
        </li>
        <li>
          <strong>High School (State Board)</strong> - Govt. Jubilee Inter
          College, Gorakhpur, UP (2014) - 66%
        </li>
      </ul>
      <h3>Certifications</h3>
      <ul>
        <li>
          <strong>Full-Stack Web Development</strong> - Internshala (2022)
        </li>
        <li>
          <strong>Programming in Python</strong> - NIELIT (2019)
        </li>
        <li>
          <strong>Software Testing</strong> - Great Learning (2022)
        </li>
        <li>
          <strong>Communication Skills</strong> - Tata Consultancy Services
          (2022)
        </li>
      </ul>
    </div>
  );
};

export default About;
