import React from 'react';
import teamMember from '@/assets/images/Dedicated-Image/our-clients/bill-gates.jpeg';
import Image from 'next/image';

const OurTeam = () => {
  return (
    
<div className='my-12'>
  <div className="lg:max-w-2xl sm:max-w-2xl max-sm:max-w-sm min-w-xl mx-auto">
    <h2 className="text-3xl font-bold text-center">Who We Are</h2>
    <p className='text-center mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quasi, velit omnis, sed cum aspernatur nulla expedita quae dolore optio, repudiandae itaque illum consequuntur labore distinctio laudantium nam officia! Repudiandae.</p>
    <div className="grid lg:grid-cols-2 sm:grid-cols gap-8 max-md:justify-center mt-8">
      <div className="grid grid-cols-2 items-center bg-gray-100 p-4 rounded-md relative">
        <div className="col-span-2">
        <Image src={teamMember} alt='Kunal Chandra Das' className="rounded-md" width={300} height={300} />
        </div>
        <div className="bg-white rounded-md p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
          <h4 className="text-sm font-bold">Sourav Kundu</h4>
          <p className="text-[10px] text-gray-500">Founder</p>
          <p className="mt-2 text-[10px] font-semibold">Software Engineer</p>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center bg-gray-100 p-4 rounded-md relative">
        <div className="col-span-2">
          <Image src={teamMember} alt='Sourav Kundu' className="rounded-md" width={300} height={300} />
        </div>
        <div className="bg-white rounded-md p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
          <h4 className="text-sm font-bold">Kunal Chandra Das</h4>
          <p className="text-[10px] text-gray-500">Co-Founder</p>
          <p className="mt-2 text-[10px] font-semibold">Software Engineer</p>
        </div>
      </div>
    </div>
  </div>
</div>

  
  )
}

export default OurTeam;