import { React } from 'react';
import heroImage from '@/assets/images/home-page/banner/home-page-banner-illustration.gif';
import Image from 'next/image';



const HomeBanner = () => {
    return (
        <div className='w-200' data-aos="fade-up">

            <div>
                <div className='px-4 lg:px-24 flex items-center bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3]'>
                    <div className='flex w-full flex-col md:flex-col lg:flex-row justify-between items-center gap-12 pt-14 lg:pt-4 lg:pb-8 '>
                        {/* Left Content  */}
                        <div className='lg:w-1/2 space-y-8 h-full pt-28'>
                            <h2 className='text-2xl lg:text-4xl font-bold leading-snug lg:leading-[3.5rem] text-black'>
                                Your Global Commerce Partner,
                                <span className='text-blue-700'> Engineered for Peak Performance</span></h2>
                            <p className='md:w-4/5 text-lg font-medium'>
                                Launch your eye-catching online store with ease, attract and convert more customers than ever before.</p>
                            <div>
                                <button className='bg-blue-700 px-14 py-2 text-white font-bold text-xl hover:bg-black transition-all ease-in duration-200 rounded'>Get Started</button>
                            </div>
                        </div>
                        {/* Right Content  */}
                        <div className='ml-0 md:ml-12 lg:ml-12'>
                            <Image src={heroImage}
                                alt='Hero-image'
                                width={700}
                                height={700}
                                quality={80}
                                loading="eager"
                                priority={true} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeBanner;