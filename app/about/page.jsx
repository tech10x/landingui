import AboutBanner from '@/components/ordinary/about-banner/AboutBanner';
import MissionVision from '@/components/ordinary/mission-vision/MissionVision';
import OurTeam from '@/components/reusable/team/OurTeam';
import SmCardSk from '@/utils/small-card-skeleton/SmCardSk';
import React from 'react';

const About = () => {
    return (
        <main className='mt-40 min-height-screen'>
           <AboutBanner />
           <MissionVision />
           <OurTeam />
           <SmCardSk />
        </main>
    )
}

export default About;