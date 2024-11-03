import "./style/projects.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Projects = (props) => {
  const { proname, gitlink, discrip, linkedinlink } = props;
  return (
    <>
      <div className="contain container my-4">
        <div className="card">
          <div className="front-content">
            <p className="text-center">{proname}</p>
          </div>
          <div className="content">
            <p className="heading text-center">{proname}</p>
            <p>{discrip}</p>
            <div className="pro-social-icons">
              <a href={linkedinlink} target="blank" rel="social-link">
                <BsLinkedin className="mx-2 fs-3 text-primary" />
              </a>

              <a href={gitlink} target="blank" rel="social-link">
                <BsGithub className="mx-2 fs-2 text-light " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
