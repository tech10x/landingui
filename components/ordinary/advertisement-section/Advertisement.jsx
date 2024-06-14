import React from 'react';
import Image from 'next/image';
import animationHeroImg from '@/assets/images/Independent-image/code-writing-anim.webp';

const Advertisement = () => {
  return (
  <>
  <div className="bg-black font-[sans-serif] text-green-800 p-6 mt-28">
      <div className="grid md:grid-cols-2 items-center gap-28 max-w-5xl max-md:max-w-md mx-auto">
        <div className="md:h-[300px]">
          <Image src={animationHeroImg} alt='Hero-Image' className="w-full h-4/5 my-8 object-contain" />
        </div>
        <div className="max-md:text-center">
          <h3 className="md:text-3xl text-2xl md:leading-10">Prompt Delivery and Enjoyable Dining Experience.</h3>
          <p className="mt-6 text-sm">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
          <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-green-800 text-green-800 hover:text-white hover:bg-green-800">Explore</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Advertisement;