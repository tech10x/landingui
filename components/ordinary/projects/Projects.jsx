import getProjectData from '@/app/api/getProjectData';
import ProjectCard from '@/components/reusable/projects-card/ProjectCard';
import React from 'react';

const Projects = async () => {
    const ourProjects = await getProjectData();
    const dataFlow = ourProjects.projects;

    return (
        <>
            <div className='flex justify-center px-6 mt-24 mb-14 mx-auto'>
                <h2 className='font-bold text-2xl flex flex-wrap justify-center md:text-3xl lg:text-4xl'>Kickstart your online store with these themes</h2>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mx-8 sm:mx-20 md:mx-28 xl:mx-36'>


                {
                    dataFlow.slice(0, 6).map((data) =>
                        <ProjectCard
                            key={data.id}
                            imageSource={data.thumbNail}
                            title={data.title}
                            siteUrl={data.url} />)
                }
            </div>
        </>
    )
}

export default Projects;