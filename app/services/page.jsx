import OurServices from '@/components/nested-service-routes-and-utils/our-services/OurServices';
import Advertisement from '@/components/ordinary/advertisement-section/Advertisement';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import ServiceBanner from '@/components/ordinary/service-banner/ServiceBanner';
import ServiceMarquee from '@/components/ordinary/service-marquee/ServiceMarquee';
import React from 'react';

const Services = () => {
    return (
        <main className='min-height-screen'>
            <ServiceBanner />
            <ServiceMarquee />
            <HeroHeading content={"Service We Provide"} />
            <OurServices />
            <Advertisement />
        </main>
    )
}

export default Services;