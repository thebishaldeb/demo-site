import React from "react";
import "./founding.css";
import puneet from "../../../src/resources/puneet.jpg";
import shourya from "../../../src/resources/shourya.png";
import Bhupendra from "../../../src/resources/Bhupendra.jpg";
import abhishek from "../../../src/resources/abhishek.png";

class Founding extends React.Component {
  render() {
    return (
      <div className="founding">
        <div className="fheader">FOUNDING MEMBERS</div>
        <br></br>
        <div id="frows">
          <div id="row1">
            <div id="fcol">
              <div className="card" id="puneet">
                <img
                  src={puneet}
                  alt="Avatar"
                  className="images"
                />
                <div className="container">
                  <h4 className="name">PUNEET SHARMA</h4>
                  <p>
                    <b>FORMER STUDENT CHAIRPERSON</b>
                  </p>
                  <p>
                    B.Tech, Electronics and Communication Engineering, Tezpur
                    University
                  </p>
                </div>
              </div>
            </div>

            <div id="fcol">
              <div className="card" id="shourya">
                <img
                  src={shourya}
                  alt="Avatar"
                  className="images"
                />
                <div className="container">
                  <h4 className="name">SHOURYA MUNIM</h4>
                  <p>
                    <b>FORMER STUDENT VICE-CHAIRPERSON</b>
                  </p>
                  <p>
                    B.Tech, Electronics and Communication Engineering, Tezpur
                    University
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="row2">
            <div id="fcol">
              <div className="card" id="bhupendra">
                <img
                  src={Bhupendra}
                  alt="Avatar"
                  className="images"
                />
                <div className="container">
                  <h4 className="name">BHUPENDRA GUPTA</h4>
                  <p>
                    <b>FORMER STUDENT GENERAL SECRETARY</b>
                  </p>
                  <p>
                    B.Tech, Electronics and Communication Engineering, Tezpur
                    University
                  </p>
                </div>
              </div>
            </div>

            <div id="fcol">
              <div className="card" id="abhishek">
                <img
                  src={abhishek}
                  alt="Avatar"
                  className="images"
                />
                <div className="container">
                  <h4 className="name">ABHISHEK KUMAR</h4>
                  <p>
                    <b>FORMER STUDENT TREASURER</b>
                  </p>
                  <p>
                    B.Tech, Electronics and Communication Engineering, Tezpur
                    University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Founding;
