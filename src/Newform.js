import React from "react";
import bgimg2 from "./2020-02-09.png";
import "./Newform.css";
function Newform() {
  return (
    <div class="container-fluid">
      <img class="bg-img2" src={bgimg2} alt="dot"></img>
      <div class="container cont123">
        <div class="row">
          <div class="col-sm-12 col-md-9 col-doc">
            <div class="row">
              <p
                style={{
                  padding: "15px",
                  color: "darkblue",
                  fontWeight: "400"
                }}
              >
                <h2>Partner with us</h2>
                <h4>Expand your Practice</h4>
                <br />
                Manage your Practice efficiently, engage with patients to offer
                them a premium experience, or increase your visibility online.
              </p>
            </div>
            <div class="row r12">
              <div class="col-sm-12 col-md-6">
                <div class="row">
                  <div class="col-sm-12 col-md-6 cus-col">
                    <h5 class="h5-1">First name</h5>
                    <input type="text" name="firstname"></input>
                  </div>
                  <div class="col-sm-12 col-md-6 cus-col">
                    <h5 class="h5-1">last name</h5>
                    <input type="text" name="lastname"></input>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Gender</h5>
                <label>
                  <input type="radio" name="option2" class="card-input-radio" />
                  <div class="card13">Male</div>
                </label>

                <label>
                  <input
                    type="radio"
                    name="option2"
                    class="card-input-radio "
                  />
                  <div class="card13">Female</div>
                </label>
              </div>
            </div>
            <div class="row r12">
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Specialisation</h5>
                <select name="Specialisation" style={{ width: "100%" }}>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </div>
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Years of experience</h5>
                <select name="Experience" style={{ width: "60%" }}>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </div>
            </div>
            <div class="row r12 ">
              <div
                class="col-sm-12 col-md-6 cus-col "
                style={{ display: "flex" }}
              >
                <h5 class="h5-2">Qualification</h5>
                <button class="btn btn13">
                  <div
                    style={{
                      textDecorationLine: "underline",
                      textTransform: "none"
                    }}
                  >
                    <h5 class="h5-1" style={{ fontSize: "1.2em" }}>
                      + Add Qualification
                    </h5>
                  </div>
                </button>
              </div>
              <div class="col-sm-12 col-md-6 "></div>
            </div>
            <div class="row r12">
              <div class="col-sm-12 col-md-6 cus-col  col-deg">
                <h5 class="h5-1">Degree Type</h5>
                <select name="Degree" style={{ width: "100%" }}>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </div>
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Completed on(year)</h5>
                <select name="Year" style={{ width: "60%" }}>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </div>
            </div>
            <div class="row r12">
              <div class="col-sm-12 col-md-12 cus-col">
                <h5 class="h5-2" style={{ marginBottom: "19px" }}>
                  Registration{" "}
                </h5>
              </div>
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Registration Number</h5>
                <input type="text" name="Registration no."></input>
              </div>
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Registration Council</h5>
                <select name="Registration" style={{ width: "100%" }}>
                  <option value="option1">option1</option>
                  <option value="option2">option2</option>
                  <option value="option3">option3</option>
                  <option value="option4">option4</option>
                </select>
              </div>
            </div>
            <div class="row r12">
              <div class="col-sm-12 col-md-6  cus-col">
                <h5 class="h5-1">City</h5>
                <input type="text" name="City"></input>
              </div>
              <div class="col-sm-12 col-md-6 cus-col">
                <h5 class="h5-1">Pincode</h5>
                <input type="text" name="Pincode"></input>
              </div>
            </div>
            <div class="row r12">
              <div class="col-sm-12 col-md-2 col-lg-2 cus-col">
                <p class="h5-1">Upload relevant Documents:</p>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-5">
                <div class="container cont124">
                  <p class="p12">
                    Drag and Drop files here
                    <br />
                    or
                    <br />
                    <button class="btn btn131">
                      <div
                        style={{
                          textDecorationLine: "underline",
                          textTransform: "none"
                        }}
                      >
                        Browse
                      </div>
                    </button>
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-5 col-pdf">
                <div class="container cont125">
                  <h5>pdf</h5>
                </div>
                <div class="container cont125">
                  <h5>pdf</h5>
                </div>
                <div class="container cont125">
                  <h5>pdf</h5>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-9"></div>
              <div class="col-sm-12 col-md-3" style={{ textAlign: "center" }}>
                <button class="btn btn14">Save Update</button>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-3 col123 cus-col col-im">
            <div class=" container round12"></div>
            <button class="btn btn12">
              <div
                style={{
                  textDecorationLine: "underline",
                  textTransform: "none"
                }}
                class="h5-1"
              >
                Upload Image
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newform;
