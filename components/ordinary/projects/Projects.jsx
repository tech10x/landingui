import React from 'react';
import getProjectData from '@/api/getProjectData';
import ProjectCard from '@/components/reusable/projects-card/ProjectCard';



const Projects = async ({sliceFrom, sliceTo}) => {
    const ourProjects = await getProjectData();
    const dataFlow = ourProjects.projects;

    return (
        <>
            <div className='flex justify-center px-6 mt-24 mb-14 mx-auto 2xl:mx-48' id='allProjects'>
                <h2 className='font-bold text-2xl flex flex-wrap justify-center md:text-3xl lg:text-4xl'>Kickstart your online store with these themes</h2>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mx-12 sm:mx-20 md:mx-28 xl:mx-36'>


                {
                    dataFlow.slice(sliceFrom, sliceTo).map((data) =>
                        <ProjectCard
                            key={data.id}
                            imageSource={data.thumbNail}
                            title={data.title}
                            siteUrl={data.url}
                            dynamicLink={data.id} />)
                }
            </div>
        </>
    )
}

export default Projects;