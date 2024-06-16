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
            <article className="relative rounded-t-lg overflow-hidden shadow transition hover:shadow-lg sm:h-[450px] h-[450px] md:h-[450px] lg:h-[450px] 2xl:h-[450px]">
                <Image
                    alt={title}
                    src={imageSource}
                    width={500}
                    height={300}
                    className="absolute inset-0  w-full object-cover h-[450px] sm:h-[450px]  md:h-[450px] lg:h-[450px] 2xl:h-[600px]"
                />


            </article>
            <div className="relative bg-white rounded-b-lg">
                <div className='flex flex-col justify-between mx-2 py-2 min-[1620px]:flex-row'>

                    <h3 className="pt-1 pb-2 text-xl font-bold text-black"> {title} </h3>



                    <a href={siteUrl} target='blank' className="relative flex h-[50px] w-full mb-2 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg ">
                     <span className="relative z-10">Preview</span>
                     </a>


                    <button onClick={handleRedirectLoading}
                     className="before:ease relative h-[50px] w-full overflow-hidden border border-white text-blue-900 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gradient-to-r from-blue-800 to-green-800 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 rounded-lg font-semibold bg-white hover:border-blue-900">
                     <Link href={`/projects/${dynamicLink}`} className="relative z-10">View Project</Link>
                     </button>
                </div>
            </div>
        </div>
}
        </>
    )
}

export default ProjectCard;