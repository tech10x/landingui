'use client';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CountUpSection = () => {
    // When user richout to this section the section will visable 
    const sectionRef = useRef();
    const [isVisable, setIsvisable] = useState();

    useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
     const entry = entries[0];
     setIsvisable(entry.isIntersecting);
    })
    observer.observe(sectionRef.current);
    }, []);


    return (
        <>   
        <div ref={sectionRef} className='flex flex-col justify-center items-center py-8 bg-black text-white'>
        {  
        isVisable 
            ?
              <div className='flex flex-col lg:flex-row md:flex-row justify-between gap-6 md:w-3/4 my-14 '>
                  <div className='flex flex-col justify-center items-center'>
                      <h3 className='text-3xl font-bold'>
                      <CountUp start={0} end={1200} duration={2.75}></CountUp>+</h3>
                      <p className='text-base font-semibold'>Our Clients</p>
                  </div>
  
                  <div className='flex flex-col justify-center items-center'>
                      <h3 className='text-3xl font-bold'>
                      <CountUp start={0} end={2500} duration={2.75}></CountUp>+
                      </h3>
                      <p className='text-base font-semibold'>Our Ratings</p>
                  </div>
  
                  <div className='flex flex-col justify-center items-center'>
                      <h3 className='text-3xl font-bold'>
                      <CountUp start={0} end={500} duration={2.75}></CountUp>+
                      </h3>
                      <p className='text-base font-semibold'>Pricing</p>
                  </div>
              </div>        
            : 
            <div>
                No Content
            </div>

        }
        </div>
        </>

    )
}

export default CountUpSection;