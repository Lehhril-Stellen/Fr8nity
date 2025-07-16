import React from "react";
import { Link } from "react-router-dom";
import navlogo from "../assets/images/navlogo.svg";
import mailicon from "../assets/images/mail_icon.png";
import callicon from "../assets/images/call_icon.png";
import fbicon from "../assets/images/fb_icon.png";
import instaicon from "../assets/images/insta_icon.png";
import xicon from "../assets/images/x_icon.png";
import youtubeicon from "../assets/images/youtube_icon.png";

const Navbar = () => {
  return (
    <>
    <div className="top_head">
        <div className="container">
            <div className="row position-relative z-3">
                <div className="col-12 col-md-6">
                    <ul>
                        <li><img src={callicon}/> <a href="#">+65 8088 9324</a></li>
                        <li><img src={mailicon}/> <a href="#">hello@fr8nity.com</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <ul className="justify-content-end gap-3">
                        <li><a href="#"><img src={fbicon} /></a></li>
                        <li><a href="#"><img src={instaicon} /></a></li>
                        <li><a href="#"><img src={xicon} /></a></li>
                        <li><a href="#"><img src={youtubeicon} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark blackbg">
          <div className="container">
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Content */}
            <div
              className="collapse navbar-collapse"
              id="mainNavbar d-flex justify-content-center align-items-center"
            >
              <ul className="header_nav">
                <div className="navbar-nav">
                  <li className="nav-item d-flex justify-content-center align-items-center">
                    <Link className="nav-link active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item d-flex justify-content-center align-items-center">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item dropdown d-flex justify-content-center align-items-center">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="membershipDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Membership
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="membershipDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/membership/benefits"
                        >
                          Your Benefits
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/membership/points">
                          Point System
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/membership/faq">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown d-flex justify-content-center align-items-center">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="eventsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Events
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="eventsDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/events/calendar">
                          Events Calendar
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/events/conference">
                          Conference
                        </Link>
                      </li>
                    </ul>
                  </li>
                </div>

                <Link className="logo" to="/">
                  <img src={navlogo} alt="" srcset="" />
                </Link>
                <div className="navbar-nav">
                  <li className="nav-item d-flex justify-content-center align-items-center">
                    <Link className="nav-link" to="/spotlight">
                      Spotlight
                    </Link>
                  </li>

                  <li className="nav-item d-flex justify-content-center align-items-center">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item d-flex justify-content-center align-items-center"></li>
                  <li className="nav-item d-flex justify-content-center align-items-center">
                    <Link
                      className="btn btnbg fe-semibold text-dark"
                      to="/Login"
                    >
                      Login/Register
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
