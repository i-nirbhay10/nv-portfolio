import "./style/projects.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Projects = (props) => {
  const { proname } = props;
  return (
    <>
      <div className="contain container my-4">
        <div className="card">
          <div className="front-content">
            <p>{proname}</p>
          </div>
          <div className="content">
            <p className="heading">{proname}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
              mollitia pariatur odit, ab minus ratione adipisci accusamus vel
              est excepturi laboriosam magnam necessitatibus dignissimos
              molestias.
            </p>
            <div>
              <BsLinkedin className="  m-2 fs-2 text-primary" />
              <BsGithub className="m-2 fs-2 text-dark " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
