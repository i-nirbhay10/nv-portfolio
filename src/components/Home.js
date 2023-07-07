import Projects from "./Projects";
import Skill from "./Skill";
import Footer from "./Footer";
import { BsGithub, BsFillEnvelopeAtFill, BsLinkedin } from "react-icons/bs";
import "./style/home.css";

const Home = () => {
  const getresume = () => {
    const url = "/myresume.pdf";
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="home-main-div">
        <h1>HI, I am Nirbhay Verma</h1>
        <h4>A Full-stack Web Developer.</h4>

        <p className="w-50 mx-auto my-6">
          A Full-stack Web Developer.A Full-stack Web Developer.A Full-stack Web
          Developer.A Full-stack Web Developer. A Full-stack Web Developer.AA
          Full-stack Web Developer. A Full-stack Web Developer. A Full-stack Web
          Developer.
        </p>
        <div className="my-2">
          <button className="button" onClick={getresume}>
            Get Resume
          </button>

          <BsLinkedin className=" ms-5 m-2 fs-1 text-primary" />
          <BsGithub className="m-2 fs-1 text-light " />
          <BsFillEnvelopeAtFill className="m-2 fs-1 text-secondory" />
        </div>
      </div>

      <h2 className="text-center m-5">My projects</h2>
      <section id="section3">
        <div className="">
          <div className="row find">
            <div className=" col-lg-4 col-md-6 ">
              <Projects proname={"mern-app"} />
            </div>
            <div className=" col-lg-4 col-md-6">
              <Projects proname={"Weather-app"} />
            </div>
            <div className=" col-lg-4 col-md-6">
              <Projects proname={"Weather-app"} />
            </div>
            <div className=" col-lg-6 col-md-6">
              <Projects proname={"Weather-app"} />
            </div>
            <div className=" col-lg-6 col-md-6">
              <Projects proname={"Weather-app"} />
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-center m-5">My Skills</h2>
      <div>
        <Skill />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
