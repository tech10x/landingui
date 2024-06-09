import React from 'react';

const AboutBanner = () => {
  return (
    <div>
        <div className="font-sans text-[#333]">
      <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
        <div>
          <h2 className="md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">Crafting Digital Elegance - Exploring <span className="text-blue-600">Tailwind CSS</span> for Intuitive User Interfaces</h2>
          <p className="mt-6 text-sm leading-relaxed">Indulge in a symphony of flavors as we curate culinary masterpieces designed to tantalize your taste buds. Our dishes, meticulously crafted with passion and precision, promise to transform your dining experience into a gastronomic journey.</p>
          <div className="grid sm:grid-cols-3 gap-6 items-center mt-14">
            <div className="flex flex-col items-center text-center">
              <h5 className="font-bold text-2xl text-blue-600 mb-1">10+</h5>
              <p className="text-sm font-semibold">Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h5 className="font-bold text-2xl text-blue-600 mb-1">890</h5>
              <p className="text-sm font-semibold">Cases Solved</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h5 className="font-bold text-2xl text-blue-600 mb-1">250</h5>
              <p className="text-sm font-semibold">Business Partners</p>
            </div>
          </div>
          <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
            <button type='button'
              className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded px-5 py-3">Start a free trial</button>
            <button type='button'
              className="bg-transparent hover:bg-[#333] hover:text-white border-2 border-[#333] transition-all font-bold text-sm rounded px-5 py-3">API documentation</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutBanner;