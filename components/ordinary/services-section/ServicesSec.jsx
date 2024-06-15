import CardSection from '@/components/reusable/card-section/CardSection';
import React from 'react';
import WebDevelopment from '@/assets/icons/service-icon/web-development-icon.png';
import WebDesign from '@/assets/icons/service-icon/web-design-icon.png';
import AppDevelopment from '@/assets/icons/cards-icon/Android-app-icon.png';
import ApiDevelopment from '@/assets/icons/service-icon/api.png';
import SEO from '@/assets/icons/service-icon/seo-icon.png';
import DigitalMarketing from '@/assets/icons/service-icon/digital-marketing-icon.png';

const ServicesSec = () => {
    const cardContent = [
        {
            imgUrl: WebDevelopment,
            title: "Web Development",
            textContent: "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!"
        },
        {
            imgUrl: WebDesign,
            title: "Web Design",
            textContent: "One store, multiple locations. Ship products from multiple warehouses across India."
        },
        {
            imgUrl: AppDevelopment,
            title: "App-Development",
            textContent: "Offer a seamless shopping experience optimised for checkouts "
        },
        {
            imgUrl: ApiDevelopment,
            title: "Api Development",
            textContent: "Add employees, colleagues and teammates to help you grow your business while managing access."
        },
        {
            imgUrl: SEO,
            title: "SEO",
            textContent: "The world is mobile. It's time your store is too. Get more loyal customers with your mobile app."
        },
        {
            imgUrl: DigitalMarketing,
            title: "Digital Marketing",
            textContent: "All the information about your sales, traffic, regions and products, just a single click away."
        }
    ];
    return (
        <section className='bg-green-50 pb-12 pt-2 mt-8'>
            <div className='flex flex-col text-center my-16'>
                <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>E-commerce Simplified, Success Amplified</h5>
                <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>Empowering your online business growth with all the essential tools.</h6>
            </div>

            {/* Card Items  */}
            <div className="flex flex-wrap justify-center 
            mt-10 2xl:grid 2xl:grid-cols-3 min-[1488px]:grid-cols-2 min-[1896px]:mx-96 
            2xl:mx-48 min-[1600px]:mx-60 min-[1800px]:mx-80 
            min-[2000px]:mx-48 min-w-[1343px]:mx-48 max-[13px]:mx-48 xl:mx-28">

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