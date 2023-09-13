import About from "./About";
import TypingAnimation from "./TypingAnimation";
import Projects from "./Projects";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import { BsGithub, BsFillEnvelopeAtFill, BsLinkedin } from "react-icons/bs";
import "./style/home.css";

const Home = () => {
  const texts = ["Full-stack Web Developer", "problem solver", "and", "coder"];

  const getresume = () => {
    const url = "/myresume.pdf";
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="home-main-div" id="home">
        <div className="flex-main-style ">
          <div className="intro-div m-auto">
            <h1>Hi, I am Nirbhay Verma</h1>
            <h4 className="d-flex">
              <span>And I am &nbsp; </span>
              <TypingAnimation texts={texts} speed={100} />
            </h4>
            <p className="mt-4">
              I am a full-stack web developer with a passion for creating
              efficient, scalable, and user-friendly web applications. I have a
              strong background in both front-end and back-end development, with
              expertise in JavaScript, HTML, CSS, and various frameworks and
              libraries.
            </p>
            <div className="d-flex justify-content-between my-2 mt-4">
              <button className="res-button" onClick={getresume}>
                Get Resume
              </button>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nirbhay-verma-441695217/"
                  target="blank"
                >
                  <BsLinkedin className="m-2 fs-1 text-primary" />
                </a>

                <a href="https://github.com/i-nirbhay10" target="blank">
                  <BsGithub className="m-2 fs-1 text-light " />
                </a>
                <a href="mailto:nirbhayverma10@gmail.com" target="blank">
                  <BsFillEnvelopeAtFill className="m-2 fs-1 text-danger" />
                </a>
              </div>
            </div>
          </div>

          <div className="img-div mb-3">
            <div className="image-container">
              {/* eslint-disable-next-line */}
              <img className="image" src="myimg.jpeg" alt="Your Image" />
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line */}
      </div>

      {/* about part */}

      <div id="about">
        <About />
      </div>
      {/* skill part */}

      <div id="skills">
        <Skill />
      </div>

      <div id="project">
        <h4 className="text-center p-5 ">My projects</h4>
        <div className="find">
          <div className="row">
            <div className=" col-lg-4 col-md-6 ">
              <Projects
                proname={"Mern-app"}
                gitlink={"https://github.com/i-nirbhay10/MERN_Project"}
                discrip={
                  "I created a MERN web app with signup and signin functionality. Users can securely register and login, providing their information. The app then creates a personalized dashboard, allowing users to access and manage their data efficiently."
                }
              />
            </div>
            <div className=" col-lg-4 col-md-6">
              <Projects
                proname={"Weather-app"}
                gitlink={"https://github.com/i-nirbhay10/weather-info"}
                discrip={
                  "I developed a React-based weather web app that integrates with a weather API. This app provides users with real-time weather information for any location. With a sleek interface, it delivers accurate and up-to-date weather forecasts for an enhanced user experience."
                }
              />
            </div>
            <div className=" col-lg-4 col-md-6">
              <Projects
                proname={"News-app"}
                gitlink={"https://github.com/i-nirbhay10/news-app"}
                discrip={
                  "I built a React-based news web app that leverages a news API to provide users with real-time access to diverse news articles. It offers a user-friendly interface and keeps users informed with up-to-date news from various sources."
                }
              />
            </div>
            <div className=" col-lg-6 col-md-6">
              <Projects
                proname={"Portfolio"}
                gitlink={"https://github.com/i-nirbhay10/nv-portfolio"}
                discrip={
                  "I built my portfolio website using the MERN stack, featuring a contact form for seamless communication. With a modern and intuitive design, my portfolio showcases my skills, projects, and achievements while enabling visitors to connect with me easily."
                }
              />
            </div>
            <div className=" col-lg-6 col-md-6">
              <Projects
                proname={"Upcommings"}
                gitlink={"https://github.com/i-nirbhay10"}
                discrip={
                  "I am developing a chat app and several other feature-rich applications using React. With a focus on seamless communication and innovative functionality, these apps will enhance user experiences and offer unique solutions. Stay tuned for exciting updates in the pipeline."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* contect part */}

      <div id="contact">
        <Contact />
      </div>

      {/* footer part */}

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
