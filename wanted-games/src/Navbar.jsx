import wantedGamesLogo from "./assets/logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top ">
        <a className="navbar-brand" href="#">
          <img src={wantedGamesLogo} alt="Wanted games logo" height={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={{ textDecoration: "none", padding: "30px" }}
              >
                <h3
                  style={{
                    textTransform: "uppercase",
                  }}
                >
                  About Us
                </h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#games"
                style={{ textDecoration: "none", padding: "30px" }}
              >
                <h3 style={{ textTransform: "uppercase" }}>Games</h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                style={{ textDecoration: "none", padding: "30px" }}
              >
                <h3 style={{ textTransform: "uppercase" }}>Contact Us</h3>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
