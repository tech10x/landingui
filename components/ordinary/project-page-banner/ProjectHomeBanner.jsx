import React from 'react';
import SwipeEffect from '../swipe-effect/SwipeEffect';
import getProjectData from '@/api/getProjectData';


const ProjectHomeBanner = async () => {
    const ourProjects = await getProjectData();
    const dataFlow = ourProjects.projects;
    return (
        <div>
            <div className='px-4 lg:px-24 bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3] flex items-center'>
                <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                    {/* Left Content  */}
                    <div className='md:w-1/2 space-y-8 h-full'>
                        <h2 className='text-4xl font-bold leading-snug text-blue-700'>
                            Buy And Sell Your Books
                            <span className='text-black'> For The Best Projects</span></h2>
                        <p className='md:w-4/5 text-lg font-medium'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex pariatur animi quas eligendi temporibus labore autem dolorum.</p>
                        <div>
                                <a href='#allProjects' className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
                               <span className="relative z-10">Get Started</span>
                               </a>
                            </div>
                    </div>
                    {/* Right Content  */}
                    <div><SwipeEffect data={dataFlow} /></div>
                </div>
            </div>
        </div>
    )
}

export default ProjectHomeBanner;