import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import ProjectHomeBanner from '@/components/ordinary/project-page-banner/ProjectHomeBanner';
import Projects from '@/components/ordinary/projects/Projects';
import React from 'react';

const Project = () => {
    return (
        <main>
         <ProjectHomeBanner />
         <HeroHeading content={"Our Total Projects"} />
         <Projects />
        </main>
    )
}

export default Project;

