
import ContactUsBody from '@/components/ordinary/contact-us-body/ContactUsBody';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import React from 'react';

const Contact = () => {
    return (
        <main className='my-40 min-h-screen'>
            <HeroHeading content={"Contact Us"} />
            <ContactUsBody />
        </main>
    )
}

export default Contact;