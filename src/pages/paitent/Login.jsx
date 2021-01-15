import React, { useState } from "react";
import web from "../../../src/images/sign_in.svg";
import axios  from "axios";
import io from '../../config';
import store from 'store';

const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function validateForm() {
    return data.email.length > 0 && data.password.length > 0;
  }
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
      url: `${io.baseURL}/common/login`,
      data: data,
    })
      .then(function (response) {
        console.log(response);
        if (response.data.status === true) {
         
          console.log(response.data.data,'-------',response.data.token);
          console.log("you're logged in. yay!");
          store.set('loggedIn', response.data);
          // Simulate a mouse click:
          window.location.href = "/";
  
        }else{
       
        }
        return false;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {" "}
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          <h1>Please login to your account</h1>

          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src={web}
              alt="registration-pic"
              className="animated img-fluid mb-3 d-none d-md-block"
            />
          </div>
          {/* Registeration Form */}
          <div className="col-md-7 col-lg-6 ml-auto">
            <form onSubmit={formSubmit}>
              <div className="row">
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
                    placeholder="Email"
                    className="form-control bg-white border-left-0 border-md"
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
                    onChange={InputEvent}
                    value={data.password}
                    required
                    name="password"
                    placeholder="Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>

                  {/* Submit Button */}
                  <div className="form-group col-lg-12 mx-auto mb-0">
                <button type="submit"  disabled={!validateForm()} className="btn  btn-primary btn-lg btn-block mb-3">LOG IN</button>
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
                    New User?{" "}
                    <a
                      href="/registration-paitent"
                      className="text-primary ml-2"
                    >
                      Create your account
                    </a>
                  </p>
                </div>
                {/*Forgot Password */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Forgot Password?{" "}
                    <a href="/forgot-paitent" className="text-primary ml-2">
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
export default Login;
