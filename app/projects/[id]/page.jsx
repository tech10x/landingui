import getSingleProject from '@/api/getSingleProject';
import SingleProjectSlider from '@/components/reusable/single-project-slider/SingleProjectSlider';
import React from 'react';

const SingleProject = async({params}) => {
const {id} = params;
const projectData = await getSingleProject(id)
const dataFlow = projectData.project;


  return (
    <div className='mb-0'> 
    <SingleProjectSlider 
    projectImg={dataFlow.thumbNail} 
    projectTitle={dataFlow.title}/>
     </div>
  )
}

export default SingleProject;