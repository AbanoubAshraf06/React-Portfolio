import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="long-line bg-light"></div>
      <div className="container">
        <div className="footer d-flex justify-content-between text-light">
          <div className="mt-4">
            <h5 className="logo text-light">
              <span>A</span>banoub <span>A</span>shraf
            </h5>
            <p>Front-End Developer | Software & Embedded Systems Engineer</p>
            <p>
              🖈
              <br />
              Benha, Egypt
            </p>
            <p>© 2026 Portfolio. All Rights Reserved.</p>
          </div>
          <div>
            <div>
              <ul className="list-unstyled d-flex mt-5">
                <li className="ms-3">
                  <Link to="/home" className="text-decoration-none text-light">
                    Home
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/about" className="text-decoration-none text-light">
                    About
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/education" className="text-decoration-none text-light">
                    Education
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/skills" className="text-decoration-none text-light">
                    Skills
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/projects" className="text-decoration-none text-light">
                    Projects
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="/contact" className="text-decoration-none text-light">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-unstyled d-flex mt-5">
                <li className="ms-3">
                  <a href="https://www.linkedin.com/in/abanoub-ashraf-689102399/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7WKG4V%2FcRRWtIR2viz8E%2Fw%3D%3D" className="text-decoration-none text-light">
                    LinkedIn
                  </a>
                </li>
                <li className="ms-3">
                  <a href="https://github.com/AbanoubAshraf06" className="text-decoration-none text-light">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
