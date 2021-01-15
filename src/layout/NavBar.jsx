import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";
import store from "store";

const NavBar = () => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Get current user
    let value = store.get("loggedIn");
    console.log("coming...", value);
    if (value !== undefined) {
      if (value.data.areaofspecialisation) {
        document.getElementById("profile-paitent").style.display = "none";
        // hide the lorem ipsum text
        document.getElementById("profile-doc").style.display = "block";
      } else {
        document.getElementById("profile-paitent").style.display = "block";
        // hide the lorem ipsum text
        document.getElementById("profile-doc").style.display = "none";
      }
      document.getElementById("login-signup").style.display = "none";
      // hide the lorem ipsum text
      document.getElementById("profile").style.display = "block";
      let userProfile = value.data;
      let fullName =
        userProfile.firstname.charAt(0) + userProfile.lastname.charAt(0);
      console.log(fullName);
      document.getElementById("profile-name").innerHTML = fullName;
    } else {
      document.getElementById("login-signup").style.display = "block";
      document.getElementById("profile").style.display = "none";
    }
    document.getElementById("log-out").addEventListener("click", function () {
      // Clear all keys
      store.clearAll();
      // Simulate a mouse click:
      window.location.href = "/";
      //validation code to see State field is mandatory.
    });
    document
      .getElementById("log-out-doc")
      .addEventListener("click", function () {
        // Clear all keys
        store.clearAll();
        // Simulate a mouse click:
        window.location.href = "/";
        //validation code to see State field is mandatory.
      });
  });

  return (
    <>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid wtcolor">
                <NavLink className="navbar-brand" to="/">
                  Project Name
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link active"
                        activeClassName="menu_active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown" id="login-signup">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Login
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/registration-doc">
                          As Doctor
                        </a>
                        <a
                          className="dropdown-item"
                          href="/registration-paitent"
                        >
                          As Paitent
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown" id="profile">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span
                          style={{ textTransform: "uppercase" }}
                          id="profile-name"
                        ></span>
                      </a>
                      <div className="dropdown-menu" id="profile-paitent">
                        <a className="dropdown-item" href="/profile-paitent">
                          Profile
                        </a>
                        <a
                          className="dropdown-item"
                          href="/change-password-paitent"
                        >
                          Change Password
                        </a>
                        <a className="dropdown-item" id="log-out" href="#">
                          Log Out
                        </a>
                      </div>
                      <div className="dropdown-menu" id="profile-doc">
                        <a className="dropdown-item" href="/profile-doc">
                          Profile
                        </a>
                        <a
                          className="dropdown-item"
                          href="/change-password-doc"
                        >
                          Change Password
                        </a>
                        <a className="dropdown-item " id="log-out-doc" href="#">
                          Log Out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
