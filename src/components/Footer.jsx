import React from 'react';
import logo from "../../src/assets/images/logo (3).svg";
import vector from "../../src/assets/images/Vector (1).png";
import footermessage from "../../src/assets/images/footermessage.svg";
import footerphn from "../../src/assets/images/footerphn.svg";
import footerlocation from "../../src/assets/images/footerlocation.svg";
import twitter from "../../src/assets/images/twitter (1) 1.svg";
import footerfacebook from "../../src/assets/images/footerfacebook.svg";
import linkedin from "../../src/assets/images/linkedin (1) 1.svg";
import instagram from "../../src/assets/images/instagram.svg";

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container-fluid bg-dark  py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="row row-cols-1 flex-wrap row-cols-md-5 g-4 text-center text-md-start">
                {/* Logo & Description */}
                <div className="col p-4" >
                    <img src={logo} alt="Company Logo" className="mb-3" style={{ width: '120px' }} />
                    <p className="fs-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting.
                    </p>

                    <div className='d-flex gap-3 justify-content-center align-items-center '>
                        <div  className='footericon d-flex justify-content-center align-items-center'><img src={twitter} alt="" srcset="" /></div>
                        <div  className='footericon d-flex justify-content-center align-items-center'><img src={footerfacebook} className=''  alt="" srcset="" /></div>
                        <div  className='footericon d-flex justify-content-center align-items-center'><img src={linkedin} className=''  alt="" srcset="" /></div>
                        <div  className='footericon d-flex justify-content-center align-items-center'><img src={instagram} className=''  alt="" srcset="" /></div>


                    </div>
                </div>

                {/* Quick Links */}
                <div className="col p-4 ">
                    <h5 className="fw-semibold fs-5">Quick Links</h5>
                    <ul className="list-unstyled mt-3">
                        <li className="mb-2 d-flex align-items-center ">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="/about" className="text-decoration-none   ">About Us</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center  pt-3 ">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="/events/calendar" className="text-decoration-none  ">Event</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center pt-3">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="/membership" className="text-decoration-none   ">Membership</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center pt-3">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="/directory" className="text-decoration-none   ">Company Directory</Link>
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="col  p-4 ">
                    <h5 className="fw-semibold fs-5">Useful Links</h5>
                    <ul className="list-unstyled mt-3 ">
                        <li className="mb-2 d-flex align-items-center ">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Cooperation Risk Protection</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center pt-3">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Inquiry</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center pt-3">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Tools</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center pt-3">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Global Partner</Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div className="col  p-4 ">
                    <h5 className="fw-semibold fs-5">Services</h5>
                    <ul className="list-unstyled mt-3 gap-3">
                        <li className="mb-2 d-flex align-items-center">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Business Opportunity Matching</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center ">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Marketing & Promotion Services</Link>
                        </li>
                        <li className="mb-2 d-flex align-items-center">
                            <img src={vector} alt="" className="me-3" />
                            <Link to="#" className="text-decoration-none   ">Reduce Costs & Boost Efficiency</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col  p-4 ">
                    <h5 className="fw-semibold fs-5">Contact Us</h5>
                    <ul className="list-unstyled mt-3">
                        <li className="mb-2 d-flex align-items-center">
                            <img src={footerphn} alt="" className="me-3" />
                            <span className="  ">+65 8088 9324</span>
                        </li>
                        <li className="mb-2 d-flex align-items-center pt-3">
                            <img src={footermessage} alt="" className="me-3" />
                            <span className="  ">hello@fr8nity.com</span>
                        </li>
                        <li className="mb-2 d-flex align-items-start pt-3">
                            <img src={footerlocation} alt="" className="me-3" />
                            <span className="  ">Dummy Address, </span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
       
    );
};

export default Footer;
