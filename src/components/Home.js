import Projects from "./projects";
import { BsGithub, BsFillEnvelopeAtFill, BsLinkedin } from "react-icons/bs";
import "./style/home.css";

const Home = () => {
  return (
    <>
      <div className="home-main-div">
        <h1>HI, I am Nirbhay Verma</h1>
        <h4>A Full-stack Web Developer.</h4>

        <p className="w-50 mx-auto my-4">
          A Full-stack Web Developer.A Full-stack Web Developer.A Full-stack Web
          Developer.A Full-stack Web Developer. A Full-stack Web Developer.AA
          Full-stack Web Developer. A Full-stack Web Developer. A Full-stack Web
          Developer.
        </p>
        <div className="my-2">
          <button class="button">Get Resume</button>
          <BsLinkedin className=" ms-2 m-2 fs-1 text-primary" />
          <BsGithub className="m-2 fs-1 " />
          <BsFillEnvelopeAtFill className="m-2 fs-1 text-secondory" />
        </div>
      </div>

      <h2 className="text-center m-5">My projects</h2>
      <div className="">
        <div className="row find">
          <div className=" col-md-4">
            <Projects proname={"News-app"} />
          </div>
          <div className=" col-md-4">
            <Projects proname={"Weather-app"} />
          </div>
          <div className=" col-md-4">
            <Projects proname={"Weather-app"} />
          </div>
          <div className=" col-md-6">
            <Projects proname={"Weather-app"} />
          </div>
          <div className=" col-md-6">
            <Projects proname={"Weather-app"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
