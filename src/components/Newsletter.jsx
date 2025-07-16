import React, { useEffect, useRef, useState } from 'react';

const Newsletter = () => {
    
    return (
        <section className='newsletter_sec'>
            <div className='container'>
                <div className='newsletter'>
                   <form> <input className='form-control' type='text' />
                    <button className='btn btnbg fw-semibold'>Apply</button></form>
                </div>
            </div>
        </section>

    );
};

export default Newsletter;
