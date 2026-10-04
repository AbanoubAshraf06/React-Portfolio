export default function Education() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-5">
        <div className="education text-light d-flex justify-content-between">
          <div className="timeline">
            <div className="line-1" />
            <div className="circle" />
            <div className="line-2" />
            <div className="circle" />
            <div className="line-3" />
          </div>
          <div>
            <h5 className="header">Education</h5>
            <h3>
              2024 - <span>Present</span>
            </h3>
            <p>Faculty of Engineering - Cairo University</p>
            <p>Focus Areas:</p>
            <p>
              ㅤ• Embedded Systems <br />
              ㅤ• Software Development <br />
              ㅤ• Front-End Development
            </p>
            <p className="header mb-4">CGPA: 3.98</p>
            <h3>
              2021 - <span>2024</span>
            </h3>
            <p>Secondary School</p>
            <p>Graduated with a strong academic background.</p>
            <p className="header">Score: 98.17%</p>
          </div>
        </div>
        <div className="d-flex justify-content-between w-50">
          <img src="./education.png" alt width={250} height={300} />
          <img
            src="./cairo-university.jpg"
            alt
            width={300}
            height={300}
            className="cairo-university rounded-circle border border-dark border-3"
          />
        </div>
      </div>
    </div>
  );
}
