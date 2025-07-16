import React from "react";
import headerlogo from "../assets/images/bannervideo.mp4";
import ourStory from "../assets/images/ourStory.png";
import Benefits1 from "../assets/images/Mask group (3).png";
import Benefits2 from "../assets/images/Mask group (4).png";
import Benefits3 from "../assets/images/Mask group (5).png";
import Benefits4 from "../assets/images/Mask group (6).png";
import eventimg1 from "../assets/images/image 8.png";
import eventimg2 from "../assets/images/eventimg2.png";
import eventimg3 from "../assets/images/eventimg3.png";
import arrow from "../assets/images/arrow.png";
import Slider from "../components/Slider";
import funder1 from "../assets/images/funder1.png";
import funder2 from "../assets/images/funder2.png";
const Home = () => {
  const benefits = [
    { img: Benefits1, title: "Benefit 1" },
    { img: Benefits2, title: "Benefit 2" },
    { img: Benefits3, title: "Benefit 3" },
    { img: Benefits4, title: "Benefit 4" },
  ];

  return (
    <>
      <section>
        <div className="container blackbg">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center  flex-column text-center text-md-start">
              <div>
                <h1 className="fw-bold size text_image">
                  When One Thrives,
                  <br /> We All Rise
                </h1>
                <p className="fs-2">Logistics Network Reimagined</p>
                <button type="button" className="btn btnbg fe-semibold mt-3">
                 <span> Become a Member</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <video
                src={headerlogo}
                autoPlay
                muted
                loop
                playsInline
                className="w-100"
              ></video>
            </div>
          </div>
        </div>
      </section>

      <section className="about_sec">
        <div className="container  py-5">
          <div className="container gradient_rounded radies_20">
            <div className="blacklight radies_20">
              <div className="row  align-items-center justify-content-center p-5">
                {/* Image Column */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                  <img
                    src={ourStory}
                    alt="Our Story"
                    className="img-fluid radies_20 shadow"
                    style={{ maxWidth: "100%", height: "450px" }}
                  />
                </div>

                {/* Text Column */}
                <div className="col-12 col-md-6 ">
                  {/* <h2 className="mb-3 fw-bold">Our Story</h2> */}

                  <h2 className="mb-3 fw-bold">Our Story</h2>
                  <div className="underline mb-4">
                    <span className="move delay-0" />
                    <span className="move delay-1" />
                  </div>

                  <p className="fs-6">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <p className="fs-6">
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <button type="button" class="btn btnbg fe-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits_sec">
        <div className="container py-5 pt-3 px-2">
         <div className="text-center">
            <h2 className="text-center fw-bold fs-2">Your Benefits</h2>
           <div className="underline mb-4 mx-auto">
                    <span className="move delay-0" />
                    <span className="move delay-1" />
                  </div>
         </div>
          <div className="row mx-auto align-items-stretch">
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="gradient_rounded radies_20 m-2 h-100">
                 <div class="card blacklight radies_20 p-2 h-100">
                    <img
                    src={Benefits1}
                    alt="Benefit 1"
                    className="img-fluid mb-3"
                  />
                    <div class="card-content">
                      <div class="card-title">Business Opportunity Matching</div>
                      <div class="card-desc"> Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    </div>
                  </div>
              </div>
            </div>
               <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="gradient_rounded radies_20 m-2 h-100">
                 <div class="card blacklight radies_20 p-2 h-100">
                    <img
                    src={Benefits2}
                    alt="Benefit 1"
                    className="img-fluid mb-3"
                  />
                    <div class="card-content">
                      <div class="card-title">Cooperation Risk Protection</div>
                      <div class="card-desc"> Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    </div>
                  </div>
              </div>
            </div>
             <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="gradient_rounded radies_20 m-2 h-100">
                 <div class="card blacklight radies_20 p-2 h-100">
                    <img
                    src={Benefits3}
                    alt="Benefit 1"
                    className="img-fluid mb-3"
                  />
                    <div class="card-content">
                      <div class="card-title">Marketing and Promotion Services</div>
                      <div class="card-desc"> Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    </div>
                  </div>
              </div>
            </div>
             <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="gradient_rounded radies_20 m-2 h-100">
                 <div class="card blacklight radies_20 p-2 h-100">
                    <img
                    src={Benefits4}
                    alt="Benefit 1"
                    className="img-fluid mb-3"
                  />
                    <div class="card-content">
                      <div class="card-title">Reduce Costs and Boost efficiency</div>
                      <div class="card-desc"> Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="blacklight events_sec">
        <div className="container py-5 px-2">
          <div className="text-center">
            <h2 className="text-center fw-bold fs-2">Upcoming Events</h2>
           <div className="underline mb-4 mx-auto">
                    <span className="move delay-0" />
                    <span className="move delay-1" />
                  </div>
         </div>
          <div className="row mx-auto align-items-stretch  ">
            <div className="col-12 col-sm-4 col-lg-4 mb-3 ">
              <div className="gradient_rounded radies_20 m-2">
                <div className="p-2 h-100 blackdark radies_20">
                  <img
                    src={eventimg1}
                    alt="Benefit 1"
                    className="img-fluid mb-3"
                  />
                  <div className="px-4 d-flex flex-column pb-4">
                    <h6 className="textcolor fw-semibold fs-4">
                      Business Opportunity Matching
                    </h6>
                    <div className="d-flex justify-content-between fs-6 mt-2">
                      <span className="yellowcolor">
                        View More <img src={arrow} alt="" srcset="" />
                      </span>
                      <span>July 22’ 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 mb-3 ">
              <div className="gradient_rounded radies_20 m-2">
                <div className="p-2 h-100 blackdark radies_20">
                  <img
                  src={eventimg2}
                  alt="Benefit 2"
                  className="img-fluid mb-3"
                />
                <div className="px-4 pb-4">
                  <h6 className="textcolor fw-semibold fs-4">
                    Cooperation Risk Protection
                  </h6>
                  <div className="d-flex justify-content-between fs-6 mt-2">
                    <span className="yellowcolor">
                      View More <img src={arrow} alt="" srcset="" />
                    </span>
                    <span>July 22’ 2025</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 mb-3 ">
              <div className="gradient_rounded radies_20 m-2">
                <div className="p-2 h-100 blackdark radies_20">
                 <img
                  src={eventimg3}
                  alt="Benefit 3"
                  className="img-fluid mb-3 p-2"
                />
                <div className="px-4 pb-4">
                  <h6 className="textcolor fw-semibold fs-4">
                    Marketing and Promotion Services
                  </h6>
                  <div className="d-flex justify-content-between fs-6 mt-2">
                    <span className="yellowcolor">
                      View More <img src={arrow} alt="" srcset="" />
                    </span>
                    <span>July 22’ 2025</span>
                  </div>
                </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row justify-content-center align-items-center pt-2">
            <button type="button" className="btn btnbg fw-semibold">
              View All Upcoming Events
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5 px-2">
           <div className="text-center">
            <h2 className="text-center fw-bold fs-2">Founders</h2>
           <div className="underline mb-4 mx-auto">
                    <span className="move delay-0" />
                    <span className="move delay-1" />
                  </div>
         </div>

          <div className="row mx-auto align-items-stretch">
            <div className="col-12 col-lg-6 mb-3 ">
              <div className="gradient_rounded radies_20 m-2">
                <div className="p-3 h-100 radies_20 blacklight">
                   <img src={funder1} alt="Benefit 1" className="img-fluid mb-3" />
                    <div className="px-4 d-flex flex-column">
                      <h3 className="h5 textcolor">
                        Cheryl Tan
                      </h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
              </div>
            </div>
            
             <div className="col-12 col-lg-6 mb-3 ">
              <div className="gradient_rounded radies_20 m-2">
                <div className="p-3 h-100 radies_20 blacklight">
                  <img src={funder2} alt="Benefit 2" className="img-fluid mb-3" />
                    <div className="px-4 d-flex flex-column">
                      <h3 className="h5 textcolor">
                        Dawn Tan
                      </h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row justify-content-center align-items-center pt-3">
            <button type="button" className="btn btnbg fw-semibold">
              View All Member
            </button>
          </div>
        </div>
      </section>

      <Slider />
    </>
  );
};

export default Home;
