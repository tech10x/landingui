'use client'
import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroHeading = ({ content }) => {
    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <div className='block mx-auto text-2xl font-bold w-3/4  mt-28 mb-20 text-center sm:text-4xl' data-aos="fade-up"
            data-aos-anchor-placement="bottom-center">
            {content}
        </div>
    )
}

export default HeroHeading;