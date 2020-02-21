import React from "react";
import "../cssfiles/main.css";
// import "./date.css";
import Datep from "./Date";
import exp from "../img/exp_panel1.jpg";
import verify from "../img/verify_tick_icon.png";
import bgimg from "../img/patter1_top_right.png";
import clinic from "../img/clinic_logo.png";
function Main() {
  return (
    <div>
      <div class="top"></div>
      <div className="background1"></div>
      <img class="bg-img1" src={bgimg} alt="dot"></img>
      <img class="bg-img2" src={bgimg} alt="dot"></img>
      <div class="container cont1 ">
        <h1 class="blue1 top-h">Book an appointment.</h1>
        <div class="container cont2 ">
          <div class="row">
            <div class="col-md-2 col-sm-12 col1">
              <div class="profile">
                <div class="card card1">
                  <img
                    class="card-img-top card-img-top1"
                    src={exp}
                    alt="Card"
                  ></img>
                  <img class="aaa" src={verify} alt="icon"></img>
                  <div class="card-body">
                    {/* <h5 class="card-title">View Doctor's</h5> */}
                    <p class="card-text p3">
                      <h6 style={{ color: "white" }}>View Doctor's</h6>
                      <strong>
                        <h3 class="view1" style={{ color: "white" }}>
                          .............
                        </h3>
                      </strong>
                      <br></br>
                      <h5 class="line-h" style={{ color: "white" }}>
                        Profile
                      </h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-12 col2">
              <p class="p1">
                {/* <span class="top2"></span> */}
                <h1 class="blue1">Dr.Sarah Chapman</h1>
                <h3 class="red1">Diagnostic Radiology</h3>

                <div class="in">
                  <div class="in1">
                    <h4 class="light">RATING</h4>
                    <div class="container blue2">4.5/5</div>
                  </div>
                  <h4 class="feed light">
                    <div class="red1">23</div>FEEDBACKS
                  </h4>
                </div>
              </p>
              <h3 class="l-blue">Select Schedule</h3>
            </div>
            <div class="col-md-5 col-sm-12 ">
              <div class="col3 blue1">
                <h5>Pick Date</h5>
                <Datep />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col-md-5 col-sm-12 col2 blue1">
              <h4>Select Clinic</h4>
              <h4 class="dot2">:::::::::::::::::::::::::::::</h4>
            </div>
            <div class="col-md-5 col-sm-12"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col-md-5 col-sm-12 col2 blue1">
              <label>
                <input type="radio" name="option1" class="card-input-radio" />
                <div class="card card2">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 ">
                      <img class="card-img-top" src={clinic} alt="Card"></img>
                    </div>
                    <div class="col-md-6 col-sm-12 ">
                      <h6 class="light1">
                        <span class="blue1">25 Km</span> away
                      </h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 ">
                      <h5 style={{ textAlign: "left" }}>Belle Vue Clinic</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2 col-sm-12 ">
                      <i
                        class="fas fa-map-marker-alt"
                        style={{ color: "white" }}
                      ></i>
                    </div>
                    <div class="col-md-10 col-sm-12 ">
                      <p style={{ textAlign: "left" }}>
                        9, Dr. U. N. Brahmachari Street, <br></br>
                        Elgin, Kolkata, West Bengal 700017
                      </p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div class="col-md-5 col-sm-12 col2 blue1">
              <label>
                <input type="radio" name="option1" class="card-input-radio" />
                <div class="card card2">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 ">
                      <img class="card-img-top" src={clinic} alt="Card"></img>
                    </div>
                    <div class="col-md-6 col-sm-12 ">
                      <h6 class="light1">
                        <span class="blue1">25 Km</span> away
                      </h6>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 ">
                      <h5 style={{ textAlign: "left" }}>Belle Vue Clinic</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2 col-sm-12 ">
                      <i
                        class="fas fa-map-marker-alt"
                        style={{ color: "white" }}
                      ></i>
                    </div>
                    <div class="col-md-10 col-sm-12 ">
                      <p style={{ textAlign: "left" }}>
                        9, Dr. U. N. Brahmachari Street, <br></br>
                        Elgin, Kolkata, West Bengal 700017
                      </p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col-md-5 col-sm-12 col2 blue1">
              <h4>Pick Schedule</h4>
              <h4 class="dot2">::::::::::::::::::::::::::::::::</h4>
            </div>
            <div class="col-md-5 col-sm-12"></div>
          </div>
          <div class="row">
            <div class="col-md-2 col-sm-12"></div>
            <div class="col-md-10 col-sm-12 col2 blue1">
              <label>
                <input type="radio" name="option2" class="card-input-radio" />
                <div class="card3">9 a.m.</div>
              </label>

              <label>
                <input type="radio" name="option2" class="card-input-radio " />
                <div class="card3">12 p.m.</div>
              </label>

              <label>
                <input type="radio" name="option2" class="card-input-radio " />
                <div class="card3">4 p.m.</div>
              </label>
              <label>
                <input type="radio" name="option2" class="card-input-radio " />
                <div class="card3">6 p.m.</div>
              </label>
            </div>
            {/* <div class="col-md-4 col-sm-12"></div> */}
          </div>
          <div class="row">
            <div class="col-md-7 col-sm-12"></div>
            <div class="col-md-5 col-sm-12 col2 blue1">
              <button type="button" class="btn btn11">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
