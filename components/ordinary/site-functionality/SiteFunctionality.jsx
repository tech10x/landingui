import { React } from 'react';
import Image from 'next/image';
import amazonReview from '@/assets/images/Dedicated-Image/site-functionality-img/amazon-review-importer.svg';
import clarity from '@/assets/images/Dedicated-Image/site-functionality-img/clarity.svg';
import shopifyImporter from '@/assets/images/Dedicated-Image/site-functionality-img/shopify-importer.svg';
import facebook from '@/assets/images/Dedicated-Image/site-functionality-img/facebook.svg';
import googleAds from '@/assets/images/Dedicated-Image/site-functionality-img/google-ads.svg';
import googleAnalytic from '@/assets/images/Dedicated-Image/site-functionality-img/google-analytic.svg';
import googleMerchant from '@/assets/images/Dedicated-Image/site-functionality-img/google-merchant.svg';
import trusted from '@/assets/images/Dedicated-Image/site-functionality-img/trusted.svg';
import intercom from '@/assets/images/Dedicated-Image/site-functionality-img/intercom.svg';
import mailchimp from '@/assets/images/Dedicated-Image/site-functionality-img/mailchimp.svg';
import privy from '@/assets/images/Dedicated-Image/site-functionality-img/privy.svg';
import rtoOptimizer from '@/assets/images/Dedicated-Image/site-functionality-img/rto-optimizer.svg';





const SiteFunctionality = () => {
    return (
      <div className='bg-pink-50 mt-12 pb-36 pt-2'>
         <div className='flex flex-col text-center my-24 mx-12 lg:mx-36 md:mx-28'>
            <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Enhance your sites functionality with plugins</h5>
            <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>Choose from over 40+ plugins. Be it tracking analytics, managing shipments to building email lists. Theres a plugin for everything.</h6>
         </div>


         <div className='flex flex-row'>
            <button className='transition-transform hover:scale-110'>
            <div className='relative lg:mx-2 md:mx-1 bottom-2 hover:rounded-md' data-aos="fade-down">
               <Image src={amazonReview} alt='rto-optimizer' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-10 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={clarity} alt='clarity' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-20 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={shopifyImporter} alt='shopify-importer' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-10 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={facebook} alt='facebook' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-2 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={googleAds} alt='google-ads' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative bottom-5 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-up">
               <Image src={googleAnalytic} alt='google-analytic' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-2 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={googleMerchant} alt='google-merchant' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-10 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={trusted} alt='trusted' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-20 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={intercom} alt='intercom' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-11 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={mailchimp} alt='mailchimp' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative top-5 lg:mx-2 md:mx-1 hover:rounded-md' data-aos="fade-down">
               <Image src={privy} alt='privy' width={200} height={200} />
            </div>
            </button>

            <button className='transition-transform hover:scale-110'>
            <div className='relative lg:mx-2 md:mx-1 bottom-2 hover:rounded-md' data-aos="fade-down">
               <Image src={rtoOptimizer} alt='rto-optimizer' width={200} height={200} />
            </div>
            </button>
         </div>

         <div className='mt-36 flex justify-center'>
            <button className='py-1 px-4 lg:py-2 lg:px-8 border-2 bg-white rounded-lg font-medium text-lg text-gray-500 shadow-slate-600 hover:rounded-md transition-transform hover:scale-110 hover:border-gray-400 focus:border-teal-400'>Take a look</button>
         </div>

      </div>
   )
}

export default SiteFunctionality;