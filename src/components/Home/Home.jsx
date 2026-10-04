import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-5">
        <div className="text-light mt-5">
          <h5 className="header">Hello, my name is</h5>
          <h1>
            Abanoub <span>Ashraf</span>
          </h1>
          <h5 className="header">Computer Engineer</h5>
          <p>
            Front-End Developer | Software & Embedded Systems Engineer <br />
            Creating responsive web experiences while exploring software <br />
            development and embedded technologies.
          </p>
          <Link to="/contact">
            <button type="button" className="home-btn btn btn-outline">
              Contact me
            </button>
          </Link>
        </div>
        <div className="Abanoub-image border rounded-4">
          <img src="./Abanoub.png" alt width={360} height={450} />
        </div>
      </div>
    </div>
  );
}
