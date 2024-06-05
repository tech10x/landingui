import React from 'react';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import ProjectHomeBanner from '@/components/ordinary/project-page-banner/ProjectHomeBanner';
import CountUpSection from '@/utils/counup-section/CountUpSection';
import Projects from '@/components/ordinary/projects/Projects';
const Project = () => {
    return (
        <main>
         <ProjectHomeBanner />
         <CountUpSection />
         <HeroHeading content={"Our Total Projects"} />
        <Projects/>
        
        </main>
    )
}

export default Project;

