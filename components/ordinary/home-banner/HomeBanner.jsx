import { React } from 'react';
import heroImage from '@/assets/images/Independent-image/Home-banner-hero-img.png';
import Image from 'next/image';



const HomeBanner = () => {
    return (
        <div className='w-200' data-aos="fade-up">

            <div>
                <div className='px-4 lg:px-24 flex items-center' id='homeBannerBg'>
                    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                        {/* Left Content  */}
                        <div className='md:w-1/2 space-y-8 h-full'>
                            <h2 className='text-4xl font-bold leading-snug text-black'>
                                Your Global Commerce Partner,
                                <span className='text-blue-700'>Engineered for Peak Performance</span></h2>
                            <p className='md:w-4/5 text-lg font-medium'>
                                Launch your eye-catching online store with ease, attract and convert more customers than ever before.</p>
                            <div>
                                <button className='bg-blue-700 px-14 py-2 text-white font-bold text-xl hover:bg-black transition-all ease-in duration-200 rounded'>Get Started</button>
                            </div>
                        </div>
                        {/* Right Content  */}
                        <div>
                            <Image src={heroImage}
                                alt='Hero-image'
                                width={500}
                                height={500}
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