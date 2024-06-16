import React from 'react';

const AboutBanner = () => {
  return (
    <div>
        <div className="font-sans text-[#333] bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3] py-40">
      <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
        <div>
          <h2 className="md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">Crafting Digital Elegance - Exploring <span className="text-blue-600">Tailwind CSS</span> for Intuitive User Interfaces</h2>
          <p className="mt-6 text-lg font-medium leading-relaxed">Indulge in a symphony of flavors as we curate culinary masterpieces designed to tantalize your taste buds. </p>
          <div className="grid sm:grid-cols-3 gap-6 items-center mt-14">
            <div className="flex flex-col items-center text-center">
            <div className='globalImageAndIconAnimation w-28 h-28 pt-4'>
              <h5 className="font-bold text-2xl text-blue-600 mb-1">10+</h5>
              <p className="text-sm font-semibold">Years Experience</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
            <div className='globalImageAndIconAnimation w-28 h-28 pt-4'>
              <h5 className="font-bold text-2xl text-blue-600 mb-1">890</h5>
              <p className="text-sm font-semibold">Cases Solved</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className='globalImageAndIconAnimation w-28 h-28 pt-4'>
              <h5 className="font-bold text-2xl text-blue-600 mb-1">250</h5>
              <p className="text-sm font-semibold">Business Partners</p>
              </div>
            </div>
          </div>
          <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">

          <button className="before:ease relative h-[50px] w-40 overflow-hidden border border-white text-blue-900 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gradient-to-r from-blue-800 to-green-800 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 rounded-lg font-semibold bg-white hover:border-blue-900">
      <span className="relative z-10">Skew curtain</span>
    </button>

          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
          <span className="relative z-10">Get Api</span>
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutBanner;

