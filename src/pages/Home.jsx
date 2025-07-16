import React from 'react';
import headerlogo from "../assets/images/bannervideo.mp4"
import ourStory from "../assets/images/ourStory.png"
import Benefits1 from "../assets/images/Mask group (3).png"
import Benefits2 from "../assets/images/Mask group (4).png"
import Benefits3 from "../assets/images/Mask group (5).png"
import Benefits4 from "../assets/images/Mask group (6).png"
import eventimg1 from "../assets/images/image 8.png"
import eventimg2 from "../assets/images/eventimg2.png"
import eventimg3 from "../assets/images/eventimg3.png"
import arrow from "../assets/images/arrow.png"
const Home = () => {

    const benefits = [
        { img: Benefits1, title: 'Benefit 1' },
        { img: Benefits2, title: 'Benefit 2' },
        { img: Benefits3, title: 'Benefit 3' },
        { img: Benefits4, title: 'Benefit 4' },

    ];

    return (
        <>
            <div className="container-fluid blackbg">
                <div className="row ">

                    <div className='col d-flex justify-content-center align-items-center flex-column'>
                        <div className="   ">
                            <h1 className='fw-bolder size'>When One Thrives,<br /> We All Rise</h1>
                            <p className='fs-2'>Logistics Network Reimagined</p>
                            <button type="button" class="btn btnbg fe-semibold">Primary</button>
                        </div></div>

                    <div className="col">
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



            <div className="container-fluid  py-5">
                <div className='container blacklight'>
                    <div className="row align-items-center justify-content-center border p-5">

                        {/* Image Column */}
                        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                            <img
                                src={ourStory}
                                alt="Our Story"
                                className="img-fluid rounded shadow"
                                style={{ maxWidth: '100%', height: '450px' }}
                            />
                        </div>

                        {/* Text Column */}
                        <div className="col-12 col-md-6 ">
                            <h2 className="mb-3 fw-bold">Our Story</h2>
                            <p className='fs-6'>
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </p>
                            <p className='fs-6'>
                                has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </p>
                            <button type="button" class="btn btnbg fe-semibold">Read More</button>
                        </div>
                    </div>



                </div>

            </div>

       <div className="container-fluid  py-5 px-2">
        <h3 className='text-center fw-bold fs-2'>Your Benefits</h3>
  <div className="row mx-auto align-items-stretch">
<div className="col-12 col-sm-6 col-lg-3">
  <div className="border m-2 h-100 d-flex flex-column  p-2">
    <img src={Benefits1} alt="Benefit 1" className="img-fluid mb-3" />
    <div className="px-4 d-flex flex-column h-100">
      <h6 className="textcolor fw-semibold fs-4">Business Opportunity Matching</h6>
      <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    </div>
  </div>
</div>

    <div className="col-12 col-sm-6 col-lg-3">
      <div className="border m-2 h-100 d-flex flex-column p-2">
        <img src={Benefits2} alt="Benefit 2" className="img-fluid mb-3" />
        <div className="px-4">
          <h6 className="textcolor fw-semibold fs-4">Cooperation Risk Protection</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-lg-3">
      <div className="border m-2 h-100 d-flex flex-column">
        <img src={Benefits3} alt="Benefit 3" className="img-fluid mb-3 p-2" />
        <div className="px-4">
          <h6 className="textcolor fw-semibold fs-4">Marketing and Promotion Services</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-lg-3 ">
      <div className="border m-2 h-100 d-flex flex-column p-2">
        <img src={Benefits4} alt="Benefit 4" className="img-fluid mb-3" />
        <div className="px-4">
          <h6 className="textcolor fw-semibold fs-4">Reduce Costs and Boost efficiency</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="container-fluid blacklight py-5 px-2">
        <h3 className='text-center fw-bold fs-2'>Upcoming Events</h3>

          <div className="row mx-auto align-items-stretch blacklight">
<div className="col-12 col-sm-4 col-lg-4 blacklight ">
  <div className="border m-2 h-100 blackdark d-flex flex-column  p-2">
    <img src={eventimg1} alt="Benefit 1" className="img-fluid mb-3" />
    <div className="px-4 d-flex flex-column h-100">
      <h6 className="textcolor fw-semibold fs-4">Business Opportunity Matching</h6>
   <div className="d-flex justify-content-between fs-6">
  <span className="yellowcolor">View More <img src={arrow} alt="" srcset="" /></span>
  <span>July 22’ 2025</span>
</div>

   
    </div>
  </div>
</div>

    <div className="col-12 col-sm-4 col-lg-4 blacklight ">
      <div className="border blackdark m-2 h-100 d-flex flex-column p-2">
        <img src={eventimg2} alt="Benefit 2" className="img-fluid mb-3" />
        <div className="px-4">
          <h6 className="textcolor fw-semibold fs-4">Cooperation Risk Protection</h6>
           <div className="d-flex justify-content-between fs-6">
  <span className="yellowcolor">View More <img src={arrow} alt="" srcset="" /></span>
  <span>July 22’ 2025</span>
</div>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-4 col-lg-4 blacklight ">
      <div className="border blackdark m-2 h-100 d-flex flex-column">
        <img src={eventimg3} alt="Benefit 3" className="img-fluid mb-3 p-2" />
        <div className="px-4">
          <h6 className="textcolor fw-semibold fs-4">Marketing and Promotion Services</h6>
       <div className="d-flex justify-content-between fs-6">
  <span className="yellowcolor">View More <img src={arrow} alt="" srcset="" /></span>
  <span>July 22’ 2025</span>
</div>
        </div>
      </div>
    </div>

    
  </div>
 <div className="row justify-content-center align-items-center pt-5">
  <button type="button" className="btn btnbg fw-semibold">
    View All Upcoming Events
  </button>
</div>


</div>


      <div className="container-fluid blacklight py-5 px-2">
        <h3 className='text-center fw-bold fs-2'>Upcoming Events</h3>

          <div className="row mx-auto align-items-stretch blacklight">
<div className="col-12 col-sm-4 col-lg-6 blacklight ">
  <div className="border m-2 h-100 blackdark d-flex flex-column  p-2">
    <img src={eventimg1} alt="Benefit 1" className="img-fluid mb-3" />
    <div className="px-4 d-flex flex-column h-100">
      <h6 className="textcolor fw-semibold fs-4">Business Opportunity Matching</h6>
   <div className="d-flex justify-content-between fs-6">
  <span className="yellowcolor">View More <img src={arrow} alt="" srcset="" /></span>
  <span>July 22’ 2025</span>
</div>

   
    </div>
  </div>
</div>

    <div className="col-12 col-sm-4 col-lg-6 blacklight ">
      <div className="border blackdark m-2 h-100 d-flex flex-column p-2">
        <img src={eventimg2} alt="Benefit 2" className="img-fluid mb-3" />
        <div className="px-4">
          <h6 className="textcolor fw-semibold fs-4">Cooperation Risk Protection</h6>
           <div className="d-flex justify-content-between fs-6">
  <span className="yellowcolor">View More <img src={arrow} alt="" srcset="" /></span>
  <span>July 22’ 2025</span>
</div>
        </div>
      </div>
    </div>

   

    
  </div>
 <div className="row justify-content-center align-items-center pt-5">
  <button type="button" className="btn btnbg fw-semibold">
    View All Member
  </button>
</div>


</div>



        </>
    );
};

export default Home;
