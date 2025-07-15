import React from 'react';
import headerlogo from "../assets/images/headerlogo.png"
import ourStory from "../assets/images/ourStory.png"
import Benefits1 from "../assets/images/Mask group (3).png"
import Benefits2 from "../assets/images/Mask group (4).png"
import Benefits3 from "../assets/images/Mask group (5).png"
import Benefits4 from "../assets/images/Mask group (6).png"
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
                        <img src={headerlogo} alt="" className="rotate-3d" />
                    </div>
                </div>
            </div>



            <div className="container-fluid  py-5">
                <div className='container blacklight'>
                    <div className="row align-items-center justify-content-center border   p-5">

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

            <div className="container py-5">
     <div >

 <div className="row  ">
        <div className="col-12 col-sm-6 col-lg-3 m-2 border">
          <img src={Benefits1} alt="Benefit 1" className="img-fluid mb-3" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3  m-2 border">
          <img src={Benefits2} alt="Benefit 2" className="img-fluid mb-3" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3  m-2 border">
          <img src={Benefits3} alt="Benefit 3" className="img-fluid mb-3" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 m-2 border">
          <img src={Benefits4} alt="Benefit 4" className="img-fluid mb-3" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

     </div>
    </div>


        </>
    );
};

export default Home;
