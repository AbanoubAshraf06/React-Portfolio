export default function Projects() {
  return (
    <div className="container mb-5">
      <h5 className="header text-center">Latest works</h5>
      <h3 className="text-light text-center mb-4">
        Explore my <span>projects</span>
      </h3>
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex justify-content-center align-items-center">
          <img src="./FlowChart.png" alt width={400} height={250} />
        </div>
        <div className="text-light mt-5">
          <h3>
            <span>FlowChart</span> Simulator
          </h3>
          <p>
            A desktop application developed using C++ and Object-Oriented
            Programming (OOP) <br />
            that allows users to design and execute flowcharts. The project
            supports creating <br />
            flowchart elements, connecting them logically, and simulating the
            execution flow to <br />
            visualize algorithms in an interactive and user-friendly way.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div className="text-light mt-5">
          <h3>
            4-Bit <span>ALU</span>
          </h3>
          <p>
            A 4-bit Arithmetic Logic Unit (ALU) designed using Verilog HDL and
            implemented <br />
            on an FPGA. The project performs arithmetic and logical operations
            such as addition, <br />
            subtraction, AND, OR, and XOR. It demonstrates digital logic design,
            hardware description, <br />
            and FPGA implementation while providing hands-on experience with
            digital systems development.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img src="./alu.png" alt width={400} height={250} />
        </div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div className="project-image d-flex justify-content-center align-items-center">
          <img
            className="rounded-4"
            src="./robot.jpeg"
            alt
            width={300}
            height={250}
          />
        </div>
        <div className="text-light mt-5">
          <h3>
            <span>Nursing</span> Robot
          </h3>
          <p>
            A smart nursing robot developed using ARM Assembly on an STM32
            microcontroller. <br />
            It monitors the patient's heart rate, body temperature, and
            breathing rate, serves <br />
            water when needed, and includes additional smart assistance features
            to improve patient <br />
            care. The project demonstrates the integration of embedded systems,
            sensors, and <br />
            healthcare technology in a practical real-world application.
          </p>
        </div>
      </div>
    </div>
  );
}
