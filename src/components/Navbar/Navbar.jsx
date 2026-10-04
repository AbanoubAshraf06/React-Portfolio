import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h4 className="logo text-light">
            <span>A</span>banoub <span>A</span>shraf
          </h4>
          <ul className="list-unstyled d-flex">
            <li className="ms-5">
              <Link to="/home" className="link text-decoration-none text-light">
                Home
              </Link>
            </li>
            <li className="ms-5">
              <Link
                to="/about"
                className="link text-decoration-none text-light"
              >
                About
              </Link>
            </li>
            <li className="ms-5">
              <Link
                to="/education"
                className="link text-decoration-none text-light"
              >
                Education
              </Link>
            </li>
            <li className="ms-5">
              <Link
                to="/skills"
                className="link text-decoration-none text-light"
              >
                Skills
              </Link>
            </li>
            <li className="ms-5">
              <Link
                to="/projects"
                className="link text-decoration-none text-light"
              >
                Projects
              </Link>
            </li>
            <li className="ms-5">
              <Link
                to="/contact"
                className="link text-decoration-none text-light"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="long-line bg-light mb-5"></div>
    </>
  );
}
