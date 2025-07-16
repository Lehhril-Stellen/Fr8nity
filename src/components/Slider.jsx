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
        let contentWidth = logoItems.scrollWidth;
        let newImageArray = [...originalImages];

        while (contentWidth < containerWidth * 2) {
            newImageArray = [...newImageArray, ...originalImages];
            logoItems.innerHTML = newImageArray
                .map((src, index) => `<div class="logo_slide border  p-3"><img src="${src}" alt="logo-${index}" /></div>`)
                .join('');
            contentWidth = logoItems.scrollWidth;
        }

        setDuplicatedImages(newImageArray);
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
<div className="container-fluid blackdark py-5 px-2">
  <div className="pb-5">
    <h3 className="text-center fw-bold fs-2">Our Coverage</h3>
  </div>
  <div className="logos overflow-hidden">
    <div className="logo_items d-flex " ref={logoContainerRef}>
     <div className='logoslider' >  {duplicatedImages.map((src, idx) => (
        <div className="px-3 " key={idx} style={{background: ""}}>
         <img src={src} alt={`logo-${idx}`} className="img-fluid" />
        </div>
      ))}
      </div>
    </div>
  </div>
</div>

    );
};

export default Slider;
