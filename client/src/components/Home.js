import About from "./About";
import Projects from "./Projects";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import { BsGithub, BsFillEnvelopeAtFill, BsLinkedin } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import "./style/home.css";
import WorkExperience from "./WorkExperience";

const Home = () => {
  const getresume = () => {
    const url = "/NIRBHAY VERMA RT.pdf";
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="home-main-div" id="home">
        <div className="d-flex justify-content-end pe-4">
          <a
            href="https://www.linkedin.com/in/nirbhay-verma-441695217/"
            target="blank"
          >
            <BsLinkedin className="m-2 fs-3 text-primary" />
          </a>

          <a href="https://github.com/i-nirbhay10" target="blank">
            <BsGithub className="m-2 fs-3 text-light " />
          </a>
          <a href="mailto:nirbhayverma10@gmail.com" target="blank">
            <BsFillEnvelopeAtFill className="m-2 fs-3 text-danger" />
          </a>
        </div>
        <div className="d-lg-flex justify-content-between align-items-center">
          <div className="intro-div ">
            <div className="fs-1">
              <h1>
                Hi,
                <span>👋</span>I am Nirbhay Verma
              </h1>
              <h4 className="d-flex">
                <span>And I am &nbsp; </span>

                <span className="text-info">
                  <Typewriter
                    options={{
                      strings: [
                        "Full-Stack Developer",
                        "React.js & React Native Specialist",
                        "Web & Mobile App Developer",
                        "Building Scalable Solutions",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h4>
            </div>
            <p className="mt-4">
              I am a dedicated full-stack web developer with a passion for
              building efficient, scalable, and user-centered web applications.
              With a strong foundation in both front-end and back-end
              technologies, I specialize in crafting seamless digital
              experiences using JavaScript, HTML, CSS, and a wide range of
              frameworks and libraries. My expertise spans across developing
              responsive interfaces and robust back-end systems, ensuring each
              application not only looks great but performs exceptionally. I’m
              driven by a commitment to creating solutions that are both
              scalable and user-friendly, bringing both technical precision and
              creativity to every project I undertake.
            </p>
            <div className="d-flex justify-content my-2 mt-4">
              <button className="res-button" onClick={getresume}>
                Get Resume
              </button>
            </div>
          </div>

          <div className="img-div mb-3">
            <div className="image-container">
              <img className="image" src="myimg.jpeg" alt="Nirbhay img" />
            </div>
          </div>
        </div>
      </div>

      {/* about part */}

      <div id="about">
        <About />
      </div>
      {/* aWorkExperience part */}

      <div id="WorkExperience">
        <WorkExperience />
      </div>
      {/* skill part */}

      <div id="skills">
        <Skill />
      </div>

      <div id="project">
        <h4 className="text-center p-5 ">My projects</h4>
        <div className="find">
          <div className="d-flex flex-wrap justify-content-center gap-5 ">
            <div className=" ">
              <Projects
                proname={"Healthcare Mobail App"}
                // gitlink={"https://github.com/i-nirbhay10"}
                discrip={
                  "I’ve been working on an app as part of an assignment, and I’m thrilled to showcase some of the key features I’ve implemented."
                }
                linkedinlink={
                  "https://www.linkedin.com/posts/nirbhay-verma-441695217_appdevelopment-cloudinary-backendintegration-activity-7251495165993893888-9CqG?utm_source=share&utm_medium=member_desktop"
                }
              />
            </div>
            <div className=" ">
              <Projects
                proname={"Portfolio Mobile App"}
                // gitlink={"https://github.com/i-nirbhay10"}
                discrip={
                  "My Personal Portfolio App crafted with passion and powered by React Native!"
                }
                linkedinlink={
                  "https://www.linkedin.com/posts/nirbhay-verma-441695217_reactnative-mobiledevelopment-portfolioapp-activity-7175431324919345153-uBvR?utm_source=share&utm_medium=member_desktop"
                }
              />
            </div>
            <div className=" ">
              <Projects
                proname={"Wiregram Web App"}
                gitlink={"https://github.com/i-nirbhay10/inataDeploy"}
                discrip={
                  "Developed a dynamic Instagram clone using the MERN stack. Achieved a secure user authentication system with Google OAuth."
                }
                linkedinlink={
                  "https://www.linkedin.com/posts/nirbhay-verma-441695217_webdevelopment-instagramclone-techjourney-activity-7117769366468780032-V30H?utm_source=share&utm_medium=member_desktop"
                }
              />
            </div>
            <div className=" ">
              <Projects
                proname={"Analytical Dashboard"}
                gitlink={"https://github.com/i-nirbhay10/openin"}
                discrip={
                  "Designed and developed a high-fidelity web application focused on product analytics Integrated secure Google Authentication for user access control and implemented interactive Chart JS features for insightful data visualization"
                }
                linkedinlink={
                  "https://www.linkedin.com/posts/nirbhay-verma-441695217_webdevelopment-projectshowcase-reactjs-activity-7109788603588751360-ARsY?utm_source=share&utm_medium=member_desktop"
                }
              />
            </div>
            <div className="  ">
              <Projects
                proname={"Mern-app"}
                gitlink={"https://github.com/i-nirbhay10/MERN_Project"}
                discrip={
                  "I created a MERN web app with signup and signin functionality. Users can securely register and login, providing their information. The app then creates a personalized dashboard, allowing users to access and manage their data efficiently."
                }
                linkedinlink={
                  "https://www.linkedin.com/in/nirbhay-verma-441695217/"
                }
              />
            </div>
            <div className=" ">
              <Projects
                proname={"Weather-app"}
                gitlink={"https://github.com/i-nirbhay10/weather-info"}
                discrip={
                  "I developed a React-based weather web app that integrates with a weather API. This app provides users with real-time weather information for any location. With a sleek interface, it delivers accurate and up-to-date weather forecasts for an enhanced user experience."
                }
                linkedinlink={
                  "https://www.linkedin.com/in/nirbhay-verma-441695217/"
                }
              />
            </div>
            <div className=" ">
              <Projects
                proname={"News-app"}
                gitlink={"https://github.com/i-nirbhay10/news-app"}
                discrip={
                  "I built a React-based news web app that leverages a news API to provide users with real-time access to diverse news articles. It offers a user-friendly interface and keeps users informed with up-to-date news from various sources."
                }
                linkedinlink={
                  "https://www.linkedin.com/in/nirbhay-verma-441695217/"
                }
              />
            </div>
            <div className=" ">
              <Projects
                proname={"Portfolio"}
                gitlink={"https://github.com/i-nirbhay10/nv-portfolio"}
                discrip={
                  "I built my portfolio website using the MERN stack, featuring a contact form for seamless communication. With a modern and intuitive design, my portfolio showcases my skills, projects, and achievements while enabling visitors to connect with me easily."
                }
                linkedinlink={
                  "https://www.linkedin.com/in/nirbhay-verma-441695217/"
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
