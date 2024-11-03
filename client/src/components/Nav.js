import { Link } from "react-scroll";
import "./style/nav.css";

const Nav = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link
          className="navbar-brand text-light"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={400}
        >
          Hi, I am Nirbhay
        </Link>

        {/* Navbar Toggler */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="WorkExperience"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                WorkExperience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="project"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
