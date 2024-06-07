import React from 'react';
import googleLogo from '@/assets/icons/google-logo.svg';
import faceBookLogo from '@/assets/icons/facebook-logo.svg';
import linkdinLogo from '@/assets/icons/linkedin-logo.svg';
import pinterestLogo from '@/assets/icons/pinterest-logo.svg';
import bannerImg from '@/assets/images/Independent-image/readymadeui_banner.webp';
import Image from 'next/image';
import TypeWriter from '../typewriter/TypeWriter';

const ServiceBanner = () => {
    const texts = [
        "Welcome Tech10x.online",
        "I'm a Next.js Developer",
        "Using Tailwind CSS",
        "Enjoy Your Stay!"
      ];
  return (
    
    <div className="font-sans bg-white text-[#333] py-40 px-4 bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3]">
    <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
      <h2 className="lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">The <span className='text-red-400'>Most Modern</span> Card Platform for Debit</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-3xl font-bold text-pink-400 leading-relaxed">
          <TypeWriter texts={texts} />
          </p>
          <div className="mt-12">
            <button type='button'
              className="bg-[#55F5A3] hover:bg-green-400 transition-all text-[#333] font-bold text-sm rounded-full px-5 py-3">Getting Started</button>
            <a href="#" className="text-sm font-bold underline sm:ml-6 ml-4 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <Image src={googleLogo} className="w-28 mx-auto" alt="google-logo" />
            <Image src={faceBookLogo} className="w-28 mx-auto" alt="facebook-logo" />
            <Image src={linkdinLogo} className="w-28 mx-auto" alt="linkedin-logo" />
            <Image src={pinterestLogo} className="w-28 mx-auto" alt="pinterest-logo" />
          </div>
        </div>
        <div>
          <Image src={bannerImg} alt='service-page-banner' className="shrink-0 w-full h-full rounded-md object-contain" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceBanner;