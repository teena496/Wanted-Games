import wantedGamesLogo from "./assets/logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light fixed-top">
        <a className="navbar-brand" href="#">
          <img src={wantedGamesLogo} alt="Wanted games logo" height={50} />
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link fs-4 fw-bold"
                href="#about"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textTransform: "uppercase",
                }}
              >
                <h3>About Us</h3>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-4 fw-bold"
                href="#games"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textTransform: "uppercase",
                }}
              >
                <h3> Games</h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-4 fw-bold"
                href="#contact"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textTransform: "uppercase",
                  // fontWeight: 700,
                }}
              >
                <h3> Contact Us</h3>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
