import React, { useState } from "react";
import web from "../../../src/images/paitentRes.svg";
import axios from "axios";
import io from "../../config";

const Registration = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
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
    console.log(e);
    // Send a POST request
    axios({
      method: "post",
      url: `${io.baseURL}/common/signUp`,
      data: data,
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status === true) {
          window.location.href = "/login-paitent";
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
                    id="firstName"
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
                {/* gender */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="form-control input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-black-tie text-muted" />
                    </span>
                  </div>
                  <select
                    id="gender"
                    name="gender"
                    onChange={InputEvent}
                    value={data.gender}
                    required
                    className="form-control custom-select bg-white border-left-0 border-md"
                  >
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* Dob */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="dob"
                    required
                    name="dob"
                    onChange={InputEvent}
                    value={data.dob}
                    placeholder="Date of Birth"
                    type="date"
                    className="textbox-n form-control bg-white border-left-0 border-md"
                  />
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
                    id="confirmPassword"
                    required
                    type="password"
                    onChange={InputEvent}
                    value={data.confirmPassword}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Address */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="address"
                    type="text"
                    onChange={InputEvent}
                    value={data.address}
                    name="address"
                    placeholder="Address"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>

                {/*City*/}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="city"
                    type="text"
                    onChange={InputEvent}
                    value={data.city}
                    name="city"
                    placeholder="City"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/*country*/}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="country"
                    type="text"
                    onChange={InputEvent}
                    value={data.country}
                    name="country"
                    placeholder="country"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/*zipCode*/}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text form-control bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="zipCode"
                    type="text"
                    onChange={InputEvent}
                    value={data.pincode}
                    name="pincode"
                    placeholder="Zip Code"
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
                    <a href="/login-paitent" className="text-primary ml-2">
                      Login
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
