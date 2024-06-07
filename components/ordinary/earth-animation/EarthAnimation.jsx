import React from 'react';
import animationStyle from './EarthAnimation.module.css';


const EarthAnimation = () => {
  return (
    <main className={animationStyle.main} data-aos="fade-up"
    data-aos-anchor-placement="top-center">
        <div className={animationStyle.body}>
        <div className='flex flex-col text-center my-24 mx-12 lg:mx-36 md:mx-28 text-white'>
              <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Scale your business with Dukaan Enterprise</h5>
              <h6 className=' mx-12 lg:mx-28 text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-50 mt-4'>Unlock your brands’s online potential on Dukaan’s lightning fast infrastructure with custom built features.</h6>
            </div>
            <div className={`mb-12 ${animationStyle.world}`}>
              <div className={animationStyle.zoom}></div>  
            </div>

        </div>
    </main>
  )
}

export default EarthAnimation;