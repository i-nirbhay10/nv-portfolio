import React from "react";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <section className="work-experience py-5 bg-primary-subtle">
      <h2 className="text-center mb-4 text-dark">
        <FaBriefcase className="me-2" /> Work Experience
      </h2>

      <div className="px-3">
        {/* Jouls Ecotech Experience */}
        <div className="mb-4 fs-5">
          <h4>Full Stack Developer</h4>
          <h5 className="text-muted">Jouls Ecotech</h5>
          <p className="text-muted">December 2023 – August 2024</p>
          <ul>
            <li>
              Led the development and maintenance of both front-end and back-end
              components, ensuring a seamless application experience for users.
            </li>
            <li>
              Spearheaded the development of a React Native mobile application,
              optimizing performance across iOS and Android platforms.
            </li>
            <li>
              Implemented best practices in code quality through regular testing
              and code reviews, enhancing application stability and reliability.
            </li>
            <li>
              Continuously improved application performance and user experience
              with optimizations across all platforms.
            </li>
            <li>
              Designed and implemented scalable solutions to support the
              company’s growth objectives and technology efficiency.
            </li>
          </ul>
        </div>

        {/* Additional Experience Example */}
        {/* You can add more job experiences similarly */}
      </div>
    </section>
  );
};

export default WorkExperience;
