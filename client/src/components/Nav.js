import { Link } from "react-scroll";
import "./style/nav.css";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <Link
            className="text-light nav-link active"
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
          >
            Hi, i am Nirbhay
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <Link
                  className="cursor-pointer nav-link active"
                  to="home"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/">
                  About
                </a> */}
                <Link
                  className="cursor-pointer nav-link active"
                  to="about"
                  // activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="cursor-pointer nav-link active"
                  to="skills"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="cursor-pointer nav-link active"
                  to="project"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="cursor-pointer nav-link active"
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
