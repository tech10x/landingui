import React from 'react';
import Founder from './Founder';

const OurTeam = () => {
  return (
    
<div className='my-12'>
  <div className="lg:max-w-2xl sm:max-w-2xl max-sm:max-w-sm min-w-xl mx-auto">
    <h2 className="text-3xl font-bold text-center">Who We Are</h2>
    <p className='text-center mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quasi, velit omnis, sed cum aspernatur nulla expedita quae dolore optio, repudiandae itaque illum consequuntur labore distinctio laudantium nam officia! Repudiandae.</p>
    
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-12">
  <div className="h-full mx-auto">
  <Founder 
  name={"Kunal Ch. Das"} 
  email={"kunalchandradasofficial@gmail.com"}
  position={'Software Engineer'}/>
  </div>
  <div className="h-full mx-auto">
  <Founder 
  name={"S. Kundu"} 
  email={"skunduofficial@gmail.com"}
  position={'Software Engineer'}/>
  </div>
</div>
  </div>
</div>

  
  )
}

export default OurTeam;