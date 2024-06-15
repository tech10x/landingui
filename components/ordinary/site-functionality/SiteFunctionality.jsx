import { React } from 'react';
import Image from 'next/image';
import javascript from '@/assets/icons/technology-icon/javascript.png';
import reactJs from '@/assets/icons/technology-icon/react-js.png';
import nodeJs from '@/assets/icons/technology-icon/node-js.png';
import expressJs from '@/assets/icons/technology-icon/express.png';
import nextJs from '@/assets/icons/technology-icon/next-js.png';
import typeScript from '@/assets/icons/technology-icon/typescript.png';
import mongoDb from '@/assets/icons/technology-icon/mongo-db.png';
import python from '@/assets/icons/technology-icon/python.png';
import java from '@/assets/icons/technology-icon/java.png';
import tailwind from '@/assets/icons/technology-icon/tailwind.png';
import ruby from '@/assets/icons/technology-icon/ruby.png';
import angular from '@/assets/icons/technology-icon/angular.png';



const SiteFunctionality = () => {
    return (
      <div className='bg-green-50 mt-12 pb-36 pt-2'>
         <div className='flex flex-col text-center my-24 mx-12 lg:mx-36 md:mx-28'>
            <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Enhance your sites functionality with plugins</h5>
            <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. Theres a plugin for everything.</h6>
         </div>


         <div className='flex flex-row'>
            <button className='transition-transform hover:scale-110'>
            <div className='relative lg:mx-2 md:mx-1 bottom-2 hover:rounded-md' data-aos="fade-down">
               <Image src={nextJs} alt='rto-optimizer' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-10 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={reactJs} alt='clarity' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-20 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={nodeJs} alt='shopify-importer' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-10 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={expressJs} alt='facebook' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-2 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={angular} alt='google-ads' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative bottom-5 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={typeScript} alt='google-analytic' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-2 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={javascript} alt='google-merchant' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-10 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={mongoDb} alt='trusted' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-20 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={python} alt='intercom' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-11 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={java} alt='mailchimp' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-5 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={tailwind} alt='privy' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative lg:mx-2 md:mx-1 bottom-2 hover:rounded-md' data-aos="fade-down">
               <Image src={ruby} alt='rto-optimizer' width={200} height={200} />
            </div>
            </button>
         </div>

         <div className='mt-36 flex justify-center'>
            <button className='py-1 px-4 lg:py-2 lg:px-8 border-2 bg-green-500 rounded-lg font-medium text-lg text-white shadow-slate-600 hover:rounded-md transition-transform hover:scale-110 hover:border-gray-400 focus:border-teal-400'>Take a look</button>
         </div>

      </div>
   )
}

export default SiteFunctionality;