import React, { useState } from "react";
import web from '../../../src/images/forgot.svg';
import axios from "axios";
import io from "../../config";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
    
  });
  var styles =  {
    box: {  textAlign: 'center',
      fontWeight: 'bolder'},
  };
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
    console.log(";;;;;;",data);
    data.purpose="Doctor"
    // Send a POST request
    e.preventDefault();
      axios({
        method: "post",
        url: `${io.baseURL}/common/forgotPassword`,
        data: data,
      })
        .then(function (response) {
          console.log(response);
          if (response.data.status === true) {
            console.log(response.data.data);
            console.log("you're logged in. yay!");
            // Simulate a mouse click:
            // store.clearAll();
            //window.location.href = "/";
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
          <h1>Forgot password</h1>
          <small style={styles.box}>Only For Doctor's</small>
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

                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                <button type="submit" className="btn  btn-primary btn-lg btn-block mb-3">Send</button>
       
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;
