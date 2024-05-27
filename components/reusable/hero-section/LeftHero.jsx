'use client'
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';




const LeftHero = ({ referredImg, title, itemOne, itemTwo, itemThree, itemFour, itemFive, bulletPoint }) => {

    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <div>
            <div className='px-4 lg:px-0 flex items-center'>
                <div className='flex w-full flex-col md:flex-row justify-around items-center gap-12 py-8'>
                    {/* Left Content  */}
                    <div className='xl:ml-28 2xl:mx-auto space-y-8 h-full' data-aos="flip-right">
                        <Image src={referredImg}
                            alt={title}
                            width={500}
                            height={500}
                            quality={100}
                            loading="eager"
                            priority={true} />
                    </div>
                    {/* Right Content  */}
                    <div className='md:w-2/4 lg:w-1/2 space-y-8 h-full'
                        data-aos="flip-left">
                        <h4 className='text-3xl font-bold'>{title}</h4>
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
    )
}

export default LeftHero;