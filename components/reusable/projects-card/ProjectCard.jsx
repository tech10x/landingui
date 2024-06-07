'use client';
import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import loading from './loading';

const ProjectCard = ({ imageSource, title, siteUrl, dynamicLink }) => {
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        AOS.init();
    }, []);

    const handleRedirectLoading =() => {
       isClicked === false && setIsClicked(true);
    }
    return (
        <>
        {isClicked === true ? loading() :
        <div className='border-current border-slate-400 rounded-lg shadow-2xl hover:transition-transform hover:scale-90 cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-900'
            data-aos="zoom-out">
            <article className="relative rounded-t-lg overflow-hidden shadow transition hover:shadow-lg sm:h-[550px] h-[600px] md:h-[500px] lg:h-[500px] 2xl:h-[600px]">
                <Image
                    alt={title}
                    src={imageSource}
                    width={500}
                    height={500}
                    className="absolute inset-0  w-full object-cover h-[600px] sm:h-[550px]  md:h-[500px] lg:h-[500px] 2xl:h-[600px]"
                />


            </article>
            <div className="relative bg-white rounded-b-lg">
                <div className='flex flex-col justify-between mx-2 py-6 min-[1620px]:flex-row'>

                    <h3 className="pt-1 pb-6 text-xl font-bold text-black"> {title} </h3>

                    <a href={siteUrl} target='blank' className='py-1 px-2 lg:py-2 lg:px-8 border-2 bg-black rounded-lg font-medium text-lg text-white shadow-slate-600 hover:rounded-md transition-transform hover:scale-90 hover:border-gray-400 focus:border-teal-400 flex justify-center'>Visit Page</a>

                   <button onClick={handleRedirectLoading}>
                    <Link href={`/projects/${dynamicLink}`} className='py-1 px-2 lg:py-2 mt-2 lg:px-8 border-2 bg-black rounded-lg font-medium text-lg text-white shadow-slate-600 hover:rounded-md transition-transform hover:scale-90 hover:border-gray-400 focus:border-teal-400 flex justify-center'>View Project</Link>
                    </button>
                </div>
            </div>
        </div>
}
        </>
    )
}

export default ProjectCard;