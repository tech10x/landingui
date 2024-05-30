import React from 'react';
import styleSheet from './Advertisement.module.css';

const Advertisement = () => {
  return (
    <div className={styleSheet.container}>

<div className={styleSheet.galaxy}>
  <div className={styleSheet.stars}>
    <div className='text-white'>
     
      <div className='flex flex-col text-center my-24 mx-12 lg:mx-36 md:mx-28 text-white'>
            <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Scale your business with Dukaan Enterprise</h5>
            <h6 className=' mx-12 lg:mx-28 text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-50 mt-4'>Unlock your brands’s online potential on Dukaan’s lightning fast infrastructure with custom built features.</h6>
         </div>

      <div className='text-white grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-0 text-center space-y-4'>
        
        <ul className='ml-0 lg:ml-48 xl:ml-96 2xl:ml-96 items-center'>
          <li>99.5% Uptime</li>
          <li>Returns & Exchange</li>
          <li>Custom Plugins & Integrations</li>
        </ul>
        <ul className='mr-0 lg:mr-48 xl:mr-96 2xl:mr-96'>
         <li>Under 1ms Latency</li>
         <li>Controlled Shipping</li>
         <li>Personalised Storefront Design</li>
        </ul>

        </div>
      
      <div className='mt-36 flex justify-center'>
            <button className='py-1 px-4 lg:py-2 lg:px-8 border-2 bg-transparent rounded-lg font-medium text-lg text-white shadow-slate-600 hover:rounded-md transition-transform hover:scale-110 hover:border-gray-400 focus:border-teal-400'>Take a look</button>
         </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default Advertisement;