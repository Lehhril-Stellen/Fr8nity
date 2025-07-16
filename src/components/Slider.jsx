import React, { useEffect, useRef, useState } from 'react';
import FlagofEurope from '../assets/images/Flag_of_Europe 1.png';
import Oceania_cruises_logo from '../assets/images/Oceania_cruises_logo 2.png';
import unitedstates from '../assets/images/united-states 2.png';

const originalImages = [
  FlagofEurope,
  Oceania_cruises_logo,
  unitedstates,
];

const Slider = () => {
  const logoContainerRef = useRef(null);
  const [duplicatedImages, setDuplicatedImages] = useState([...originalImages]);

  const calculateDuplicates = () => {
    const container = logoContainerRef.current?.parentElement;
    const logoItems = logoContainerRef.current;

    if (!container || !logoItems) return;

    const containerWidth = container.offsetWidth;
    const singleLoopWidth = originalImages.length * 186;
    const repeatCount = Math.ceil((containerWidth * 2) /singleLoopWidth);
    const newImages = Array(repeatCount).fill(originalImages).flat();

    setDuplicatedImages(newImages);
  };

  useEffect(() => {
    const preloadImages = originalImages.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    );

    Promise.all(preloadImages).then(() => {
      calculateDuplicates();
    });

    window.addEventListener('resize', calculateDuplicates);
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, []);

  return (
    <div className="container blackdark py-5 px-2 pt-2">
      <div className="pb-1">
          <div className="text-center">
            <h2 className="text-center fw-bold fs-2">Our Coverage</h2>
           <div className="underline mb-4 mx-auto">
                    <span className="move delay-0" />
                    <span className="move delay-1" />
                  </div>
         </div>
      </div>
      <div className="logos overflow-hidden">
        <div className="logo_items" ref={logoContainerRef}>
          {duplicatedImages.map((src, idx) => (
            <div className='gradient_rounded'>
              <div className="logo_slide" key={idx}>
              <img src={src} alt={`logo-${idx}`} />
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
