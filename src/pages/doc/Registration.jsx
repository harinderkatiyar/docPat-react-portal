import React, { useState } from "react";
import web from "../../../src/images/img11.svg";
import axios from "axios";
import io from "../../config";
const Registration = () => {
  var styles = {
    box: { textAlign: "center", fontWeight: "bolder" },
  };
  const [data, setData] = useState({
    firstname: "",
    lastname: "",

    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    cityofpractice: "",
    typeofpractice: "",
    areaofspecialisation: "",
  });

  const InputEvent = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    data.purpose = "Doctor";

    // Send a POST request
    axios({
      method: "post",
      url: `${io.baseURL}/common/signUp`,
      data: data,
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status === true) {
          window.location.href = "/login-doc";
        }
        return false;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          <h1>Create an Account</h1>
          <small style={styles.box}>Only For Doctor's</small>
          <br />
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src={web}
              alt="registration-pic"
              style={{ marginTop: "-166px" }}
              className="animated img-fluid mb-3 d-none d-md-block"
            />
          </div>
          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={formSubmit}>
              <div className="row">
                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="firstname"
                    type="text"
                    onChange={InputEvent}
                    name="firstname"
                    value={data.firstname}
                    required
                    placeholder="First Name"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Last Name */}
                <div className="input-group  col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    required
                    onChange={InputEvent}
                    value={data.lastname}
                    placeholder="Last Name"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={InputEvent}
                    value={data.email}
                    required
                    placeholder="Email Address"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Phone Number */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted" />
                    </span>
                  </div>

                  <input
                    id="mobile"
                    type="tel"
                    required
                    name="mobile"
                    value={data.mobile}
                    onChange={InputEvent}
                    placeholder="Phone Number"
                    className="form-control bg-white border-md border-left-0 pl-3"
                  />
                </div>
                {/* city */}

                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="cityofpractice"
                    type="text"
                    name="cityofpractice"
                    value={data.cityofpractice}
                    onChange={InputEvent}
                    required
                    placeholder="City of Practice"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="typeofpractice"
                    type="text"
                    name="typeofpractice"
                    value={data.typeofpractice}
                    onChange={InputEvent}
                    required
                    placeholder="Types of Practice"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>

                {/* Job */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="form-control input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-black-tie text-muted" />
                    </span>
                  </div>
                  <select
                    id="areaofspecialisation"
                    name="areaofspecialisation"
                    value={data.areaofspecialisation}
                    onChange={InputEvent}
                    required
                    className="form-control custom-select bg-white border-left-0 border-md"
                  >
                    <option value="">Choose Area of Specialisation</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Own clinic">Own clinic</option>
                    <option value="Both">Both</option>
                  </select>
                </div>

                {/* Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    name="password"
                    onChange={InputEvent}
                    value={data.password}
                    placeholder="Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Password Confirmation */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="passwordConfirmation"
                    required
                    type="text"
                    onChange={InputEvent}
                    value={data.confirmPassword}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <button
                    type="submit"
                    className="btn  btn-primary btn-lg btn-block mb-3"
                  >
                    {" "}
                    Create your account{" "}
                  </button>
                </div>
                {/* Divider Text */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5" />
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5" />
                </div>

                {/* Already Registered */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <a href="/login-doc" className="text-primary ml-2">
                      Login
                    </a>
                  </p>
                </div>
                {/*Forgot Password */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Forgot Password?{" "}
                    <a href="/forgot-doc" className="text-primary ml-2">
                      Click here
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
