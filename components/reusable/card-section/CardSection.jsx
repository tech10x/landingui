import React from 'react';
import Image from 'next/image';
import cardStyle from './CardSection.module.css';

const CardSection = ({ referImg, title, content }) => {
    return (

        <div>
            <div className="p-2 h-full w-full max-w-sm block mx-auto 2xl:max-w-2xl xl:max-w-lg" data-aos="zoom-in" >
                <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col shadow-inner">
                    <div className="flex flex-col items-center my-3">
                        <div className='mb-4'>
                            <Image src={referImg}
                                alt='Service-Feature'
                                loading="lazy"
                                height={100}
                                width={100}
                                className={`hover:rounded-full ${cardStyle.gooey}`} />
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl font-medium">{title}</h2>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                        <p className="text-base lg:text-base md:text-base text-gray-500 dark:text-gray-300">
                            {content}
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CardSection;