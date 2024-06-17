import React from 'react';
import Image from 'next/image';



const HeroRight = ({ referredImg, title, itemOne, itemTwo, itemThree, itemFour, itemFive, bulletPoint }) => {




    return (
        <section>
            <div className="mx-auto max-w-screen px-4 py-8 sm:px-6 pb-0 sm:pb-12 lg:px-8 lg:py-2 md:mx-auto ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relativeh-64 overflow-hidden sm:h-80 md:h-96 md:w-full lg:h-full my-auto lg:order-last" data-aos="flip-left">
                    
                        <Image
                            alt={title}
                            src={referredImg}
                            quality={100}
                            height={400}
                            width={400}
                            loading="lazy"
                            className="inset-0 object-cover mx-auto block sm:mx-auto md:mx-auto lg:mx-0"
                        />
                    </div>

                    <div className="lg:pt-20" data-aos="flip-right">
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