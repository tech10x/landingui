import React from 'react';
import pscStyle from './ProjectShowCase.module.css';

const ProjectShowCase = () => {
  return (
    <div className={`md:w-full md:block md:mx-auto ${pscStyle.body}`}>
        <div className={pscStyle.skeletonGrid}>
        <div className={pscStyle.skeletonBox}></div>
        <div className={pscStyle.skeletonBox}></div>
        <div className={pscStyle.skeletonBox}></div>
        <div className={pscStyle.skeletonBox}></div>
        <div className={pscStyle.skeletonBox}></div>
        <div className={pscStyle.skeletonBox}></div>

    </div>
    </div>
  )
}

export default ProjectShowCase;