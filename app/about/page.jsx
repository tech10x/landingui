import AboutBanner from '@/components/ordinary/about-banner/AboutBanner';
import MissionVision from '@/components/ordinary/mission-vision/MissionVision';
import OurTeam from '@/components/reusable/team/OurTeam';
import React from 'react';

const About = () => {
    return (
        <main className='min-height-screen'>
           <AboutBanner />
           <MissionVision />
           <OurTeam />
        </main>
    )
}

export default About;