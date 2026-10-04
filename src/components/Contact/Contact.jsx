export default function Contact() {
  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-between">
        <div className="form">
          <h5 className="header">Get in touch</h5>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-light"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput2"
              className="form-label text-light"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label text-light"
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={5}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="text-light mt-5">
          <h2>
            <span>Dont't</span> be shy
          </h2>
          <p className="mb-5">
            Feel free to reach out if you have any questions, collaboration
            opportunities,
            <br />
            or just want to connect. I'm always open to new projects and
            discussions.
          </p>
          <div className="d-flex justify-content-between align-items-center w-50 mb-4">
            <img src="./mail.png" alt width={40} height={35} />
            <div className="ms-2">
              <p className="header m-0">Mail me</p>
              <p className="m-0">abanoub.ashraf.ata@gmail.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-5">
              <img src="./Github.png" alt width={50} height={50} />
              <a href="https://github.com/AbanoubAshraf06" className="text-decoration-none text-light d-flex justify-content-center">
                Github
              </a>
            </div>
            <div>
              <img src="./LinkedIn.png" alt width={50} height={50} />
              <a href="https://www.linkedin.com/in/abanoub-ashraf-689102399/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7WKG4V%2FcRRWtIR2viz8E%2Fw%3D%3D" className="text-decoration-none text-light d-flex justify-content-center">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
