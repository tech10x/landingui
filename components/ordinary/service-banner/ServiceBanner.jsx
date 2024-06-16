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
      <h2 className="lg:text-4xl md:text-5xl text-3xl font-bold lg:!leading-[64px] md:max-w-4xl">The <span className='text-blue-700'>Most Modern Card Platform </span> for Debit And Credit As Well</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="lg:text-2xl md:text-xl text-lg font-bold text-blue-700 leading-relaxed">
          <TypeWriter texts={texts} />
          </p>
          <div className="mt-12 flex flex-col md:flex-row lg:flex-row">


          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
          <span className="relative z-10">Getting Started</span>
          </button>



          <button className="lg:ml-4 ml-0 mt-6 lg:mt-0 md:mt-0 md:ml-4 before:ease relative h-[50px] w-40 overflow-hidden border border-white text-blue-900 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gradient-to-r from-blue-800 to-green-800 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 rounded-lg font-semibold bg-white hover:border-blue-900">
      <span className="relative z-10">Skew curtain</span>
    </button>


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