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
import Link from 'next/link';



const SiteFunctionality = () => {
    return (
      <div className='bg-green-50 mt-12 pb-36 pt-2'>
         <div className='flex flex-col text-center my-24 mx-12 lg:mx-36 md:mx-28'>
            <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Transform Your Vision into Reality with Our Integrated Software Solutions</h5>
            <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>
            Discover the art of possibility as we bring innovation, efficiency, and scalability to every facet of your digital landscape.
            </h6>
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
         <Link href={'/services'}>
         <button className="before:ease relative h-[50px] w-40 overflow-hidden border border-white text-blue-900 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gradient-to-r from-blue-800 to-green-800 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 rounded-lg font-semibold bg-white hover:border-blue-900">
      <span className="relative z-10">Take a Look</span>
    </button>
    </Link>
         </div>

      </div>
   )
}

export default SiteFunctionality;