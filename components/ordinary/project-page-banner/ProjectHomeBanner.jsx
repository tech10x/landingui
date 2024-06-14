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
                                <a href='#allProjects' className='bg-blue-700 px-14 py-2 text-white font-bold text-xl hover:bg-black transition-all ease-in duration-200 rounded'>Get Started</a>
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