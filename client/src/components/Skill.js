import React from "react";
import "./style/skills.css";

const Skill = () => {
  const Skillsdisplay = (props) => {
    const { name, percent } = props;
    return (
      <>
        <div className="mb-2">
          <div className="skill-name">{name}</div>
          <div className="progress-bar">
            <div className="progress " style={{ width: `${percent}%` }}></div>
          </div>
          <div className="progress-percentage d-flex justify-content-end">
            {`${
              percent >= 80
                ? "Professional"
                : percent <= 50
                ? "Beginner"
                : "Average"
            }`}
          </div>
        </div>
      </>
    );
  };

  const skillsData = [
    { skill: "React", progress: 90 },
    { skill: "Node", progress: 80 },
    { skill: "MongoDb", progress: 75 },
    { skill: "JavaScript", progress: 80 },
    { skill: "HTML", progress: 90 },
    { skill: "CSS", progress: 80 },
    { skill: "JSON", progress: 84 },
    { skill: "NPM", progress: 90 },
    { skill: "REST APIs", progress: 80 },
    { skill: "React Hooks", progress: 75 },
    { skill: "Redux js", progress: 84 },
    { skill: "Context APIs", progress: 90 },
    { skill: "Frent-End-Development", progress: 80 },
    { skill: "Back-End-Development", progress: 80 },
    { skill: "Databases", progress: 84 },
    { skill: "NO-SQL", progress: 90 },
    { skill: "C Language", progress: 80 },
    { skill: "C++", progress: 75 },
    { skill: "Object oreanted programming", progress: 60 },
    { skill: "python programming", progress: 49 },
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
