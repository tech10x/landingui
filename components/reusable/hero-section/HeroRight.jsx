'use client';
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';



const HeroRight = ({ referredImg, title, itemOne, itemTwo, itemThree, itemFour, itemFive, bulletPoint }) => {

    useEffect(() => {
        AOS.init()
    }, []);


    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full" data-aos="flip-up">
                        <Image
                            alt={title}
                            src={referredImg}
                            quality={70}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24" data-aos="flip-down">
                        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

                        <div className="mt-4 text-gray-600">
                            <ul className='flex flex-col'>

                                <li className='inline-flex items-center my-1.5 text-lg font-semibold'>
                                    <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                                    {itemOne}
                                </li>

                                <li className='inline-flex items-center my-1.5 text-lg font-semibold'>
                                    <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                                    {itemTwo}
                                </li>

                                <li className='inline-flex items-center my-1.5 text-lg font-semibold'>
                                    <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                                    {itemThree}
                                </li>

                                <li className='inline-flex items-center my-1.5 text-lg font-semibold'>
                                    <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                                    {itemFour}
                                </li>

                                <li className='inline-flex items-center my-1.5 text-lg font-semibold'>
                                    <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                                    {itemFive}
                                </li>

                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroRight;