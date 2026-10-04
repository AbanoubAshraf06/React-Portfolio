export default function Skills() {
  return (
    <div className="container">
      <h5 className="text-center text-light">
        My <span>skills</span>
      </h5>
      <h2 className="text-center text-light mb-4">professional skills</h2>
      <div className="cards-1 d-flex justify-content-evenly align-items-center mb-4">
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
          <img src="./C.png" className="card-img-top" alt />
          <div className="card-body">
            <h5 className="card-title text-center text-light">C</h5>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
          <img src="./cpp.png" className="card-img-top" alt />
          <div className="card-body">
            <h5 className="card-title text-center text-light">C++</h5>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
          <img src="./arm.png" className="card-img-top" alt />
          <div className="card-body">
            <h5 className="card-title text-center text-light">Arm assembly</h5>
          </div>
        </div>
      </div>
      <div className="cards-2 d-flex justify-content-evenly align-items-center mb-5">
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
          <img src="./HTML.png" className="card-img-top" alt />
          <div className="card-body">
            <h5 className="card-title text-center text-light">HTML</h5>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
          <img src="./CSS.png" className="card-img-top" alt />
          <div className="card-body">
            <h5 className="card-title text-center text-light">CSS</h5>
          </div>
        </div>
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
          <img src="./JavaScript.png" className="card-img-top" alt />
          <div className="card-body">
            <h5 className="card-title text-center text-light">JavaScript</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
