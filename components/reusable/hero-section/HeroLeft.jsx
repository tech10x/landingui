'use client';
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const HeroLeft = ({ referredImg, title, itemOne, itemTwo, itemThree, itemFour, itemFive, bulletPoint }) => {

    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
                        data-aos="flip-down">
                        <Image
                            alt={title}
                            src={referredImg}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16" data-aos="flip-up">
                        <h2 className="text-3xl font-bold sm:text-4xl pb-4">{title}</h2>
                        <div className="space-y-4 text-gray-600">
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

export default HeroLeft;