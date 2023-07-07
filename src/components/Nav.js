const Nev = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="/">
            HI, i am Nirbhay
          </a>
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
                <a
                  className="nav-link text-light  active"
                  aria-current="page"
                  href="#section1"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#section4">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#section3">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Contects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nev;
