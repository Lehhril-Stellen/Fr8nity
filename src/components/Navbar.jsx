import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from "../assets/images/navlogo.svg"

const Navbar = () => {
    return (



        <nav className="navbar navbar-expand-lg navbar-dark blackbg">
            <div className="container-fluid  ">

    


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
                <div className="collapse navbar-collapse" id="mainNavbar d-flex justify-content-center align-items-center">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">

                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <Link className="nav-link" to="/about">About Us</Link>
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
                            <ul className="dropdown-menu" aria-labelledby="membershipDropdown">
                                <li><Link className="dropdown-item" to="/membership/benefits">Your Benefits</Link></li>
                                <li><Link className="dropdown-item" to="/membership/points">Point System</Link></li>
                                <li><Link className="dropdown-item" to="/membership/faq">FAQ</Link></li>
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
                            <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                                <li><Link className="dropdown-item" to="/events/calendar" >Events Calendar</Link></li>
                                <li><Link className="dropdown-item" to="/events/conference">Conference</Link></li>
                            </ul>
                        </li>

                 <Link className="" to="/">
                    <img src={navlogo} alt="" srcset="" />
                </Link>

             

                  
                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <Link className="nav-link" to="/spotlight">Spotlight</Link>
                        </li>

                        <li className="nav-item d-flex justify-content-center align-items-center">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
