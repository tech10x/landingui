'use client';
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const CardSection = ({ referImg, title, content }) => {


    useEffect(() => {
        AOS.init()
    }, []);


    return (

        <div>
            <div className="p-4 max-w-sm block mx-auto 2xl:max-w-2xl xl:max-w-lg" data-aos="zoom-in" >
                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col shadow-inner">
                    <div className="flex flex-col items-center my-3">
                        <div className='mb-4'>
                            <Image src={referImg}
                                alt='Site-Speed-Icon'
                                quality={70}
                                loading="lazy"
                                height={100}
                                width={100}
                                className='hover:rounded-md transition-transform hover:scale-110' />
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl font-medium">{title}</h2>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="leading-relaxed text-base lg:text-[1.1rem] md:text-[1rem] text-gray-500 dark:text-gray-300">
                            {content}
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CardSection;