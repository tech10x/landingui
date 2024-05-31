'use client'
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styleSheet from './Advertisement.module.css';
import rightTickIcon from '@/assets/icons/yellow-right-tick.png';
import Image from 'next/image';

const Advertisement = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={styleSheet.container} data-aos="fade-up">
      <div className={styleSheet.galaxy}>
        <div className={styleSheet.stars}>
          <div className='text-white'>

            <div className='flex flex-col text-center my-24 mx-12 lg:mx-36 md:mx-28 text-white'>
              <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Scale your business with Dukaan Enterprise</h5>
              <h6 className=' mx-12 lg:mx-28 text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-50 mt-4'>Unlock your brands’s online potential on Dukaan’s lightning fast infrastructure with custom built features.</h6>
            </div>



            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 2xl:w-[660px] xl:w-[660px] lg:w-[700px] mx-auto md:w-2/4 sm:w-[500px] w-[500px]">
              <div className="h-32">
                <div className='flex flex-col'>
                  <p className='inline-flex items-center my-1.5 text-lg font-semibold'>
                    <Image src={rightTickIcon} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                    99.5% Uptime
                  </p>
                  <p className='inline-flex items-center my-1.5 text-lg font-semibold'>
                    <Image src={rightTickIcon} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                    Returns & Exchange
                  </p>
                  <p className='inline-flex items-center my-1.5 text-lg font-semibold'>
                    <Image src={rightTickIcon} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                    Custom Plugins & Integrations
                  </p>
                </div>
              </div>
              <div className="h-32">
                <div className='flex flex-col'>
                  <p className='inline-flex items-center my-1.5 text-lg font-semibold'>
                    <Image src={rightTickIcon} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                    Under 1ms Latency
                  </p>
                  <p className='inline-flex items-center my-1.5 text-lg font-semibold'>
                    <Image src={rightTickIcon} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                    Controlled Shipping
                  </p>
                  <p className='inline-flex items-center my-1.5 text-lg font-semibold'>
                    <Image src={rightTickIcon} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                    Personalised Storefront Design
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:mt-12 md:mt-24 sm:mt-24 mt-8 flex justify-center'>
              <button className='py-1 px-4 lg:py-2 lg:px-8 border-2 bg-transparent rounded-lg font-medium text-lg text-white shadow-slate-600 hover:rounded-md transition-transform hover:scale-110 hover:border-gray-400 focus:border-teal-400 relative'>Take a look</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Advertisement;