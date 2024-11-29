export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link px-2 text-body-secondary">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#games" className="nav-link px-2 text-body-secondary">
              Games
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link px-2 text-body-secondary">
              Contact Us
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © {new Date().getFullYear()} Wanted Games &trade;
        </p>
      </footer>
    </div>
  );
}
