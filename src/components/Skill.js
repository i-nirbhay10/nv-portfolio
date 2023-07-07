import React from "react";
import "./style/skills.css";

const Skill = () => {
  const Skillsdisplay = (props) => {
    const { name, percent } = props;
    return (
      <>
        <div>
          <div className="skill-name">{name}</div>
          <div className="progress-bar">
            <div className="progress " style={{ width: `${percent}%` }}></div>
          </div>
          <div className="progress-percentage d-flex justify-content-end">{`${percent}%`}</div>
        </div>
      </>
    );
  };

  // Define skills and their corresponding progress percentages
  const skillsData = [
    { skill: "React", progress: 90 },
    { skill: "Node", progress: 80 },
    { skill: "MongoDb", progress: 75 },
    { skill: "JavaScript", progress: 75 },
    { skill: "HTML", progress: 90 },
    { skill: "CSS", progress: 80 },
    { skill: "JSON", progress: 84 },
    { skill: "NPM", progress: 90 },
    { skill: "CSS", progress: 80 },
    { skill: "JavaScript", progress: 75 },
    { skill: "React", progress: 84 },
    { skill: "HTML", progress: 90 },
    { skill: "CSS", progress: 80 },
    { skill: "JavaScript", progress: 75 },
    { skill: "React", progress: 84 },
    { skill: "HTML", progress: 90 },
    { skill: "CSS", progress: 80 },
    { skill: "JavaScript", progress: 75 },
    { skill: "React", progress: 84 },
    // Add more skills as needed
  ];

  return (
    <>
      <section id="section4">
        <div className="skills-container">
          <h2 className="text-center">Skills</h2>
          <div className="row">
            {skillsData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="skill">
                  <Skillsdisplay name={item.skill} percent={item.progress} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
