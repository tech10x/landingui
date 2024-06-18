import CardSection from '@/components/reusable/card-section/CardSection';
import React from 'react';
import WebDevelopment from '@/assets/icons/service-icon/web-development.png';
import WebDesign from '@/assets/icons/service-icon/web-design.png';
import AppDevelopment from '@/assets/icons/service-icon/app-development.png';
import ApiDevelopment from '@/assets/icons/service-icon/api-development.png';
import SEO from '@/assets/icons/service-icon/seo-optimization.png';
import DigitalMarketing from '@/assets/icons/service-icon/digital-marketing.png';

const ServicesSec = () => {
    const cardContent = [
        {
            imgUrl: WebDevelopment,
            title: "Web Development",
            textContent: "We create incredibly fast and responsive websites that enhance your online presence and user experience across all platforms."
        },
        {
            imgUrl: WebDesign,
            title: "Web Design",
            textContent: "Our team designs visually appealing and user-friendly websites that ensure a seamless browsing experience for all users."
        },
        {
            imgUrl: AppDevelopment,
            title: "App-Development",
            textContent: "We develop high-quality mobile and web applications that provide a smooth and engaging user experience, tailored to your business needs."
        },
        {
            imgUrl: ApiDevelopment,
            title: "Api Development",
            textContent: "Our API development services enable seamless integration and efficient management of data and access for employees and partners, enhancing your business operations."
        },
        {
            imgUrl: SEO,
            title: "SEO",
            textContent: "We optimize your website for search engines to increase visibility, attract more visitors, and drive higher engagement and conversion rates."
        },
        {
            imgUrl: DigitalMarketing,
            title: "Digital Marketing",
            textContent: "Our digital marketing strategies provide comprehensive insights into your website's performance, helping you make data-driven decisions and achieve your business goals."
        }
    ];
    return (
        <section className='bg-green-50 pb-12 pt-2 mt-8'>
            <div className='flex flex-col text-center my-16'>
                <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>Unleash Your Business Potential with Our Expert Services</h5>
                <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>Grow your online presence with our comprehensive suite of services.</h6>
            </div>

            {/* Card Items  */}
            <div className="grid gap-4 mx-auto grid-cols-1 sm:grid-cols-1 sm:mx-auto md:grid-cols-2 md:mx-12 md:gap-4 lg:grid-cols-3 lg:mx-12 2xl:mx-28 2xl:gap-2">

                {
                    cardContent.map(({ imgUrl, title, textContent }) =>
                        <CardSection key={title} referImg={imgUrl}
                            title={title}
                            content={textContent} />)
                }

            </div>

        </section>
    )
}

export default ServicesSec;