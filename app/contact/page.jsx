import ContactBanner from '@/components/ordinary/contact-page-banner/ContactBanner';
import ContactUsBody from '@/components/ordinary/contact-us-body/ContactUsBody';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import React from 'react';

const Contact = () => {
    return (
        <main className='min-h-screen'>
            <ContactBanner />
            <HeroHeading content={"Contact Us"} />
            <ContactUsBody />
            
          </main>
    )
}

export default Contact;