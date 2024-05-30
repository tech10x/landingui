import CardSection from '@/components/reusable/card-section/CardSection';
import React from 'react';
import SiteSpeedIcon from '@/assets/icons/cards-icon/Site-Speed-Icon.png';
import MultiWarehouse from '@/assets/icons/cards-icon/Warehouse-icon.png';
import OptimisedCheckout from '@/assets/icons/cards-icon/Checkout-icon.png';
import StaffAccounts from '@/assets/icons/cards-icon/Staff-Acount-icon.png';
import AndroidApp from '@/assets/icons/cards-icon/Android-app-icon.png';
import AdvancedAnalytics from '@/assets/icons/cards-icon/Advance-Analysis-icon.png';

const ServicesSec = () => {
    const cardContent = [
        {
            imgUrl: SiteSpeedIcon,
            title: "Site Speed",
            textContent: "Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!"
        },
        {
            imgUrl: MultiWarehouse,
            title: "Multi-Warehouse",
            textContent: "One store, multiple locations. Ship products from multiple warehouses across India."
        },
        {
            imgUrl: OptimisedCheckout,
            title: "Optimised Checkouts",
            textContent: "Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates."
        },
        {
            imgUrl: StaffAccounts,
            title: "Staff Accounts",
            textContent: "Add employees, colleagues and teammates to help you grow your business while managing access."
        },
        {
            imgUrl: AndroidApp,
            title: "Android App",
            textContent: "The world is mobile. It's time your store is too. Get more loyal customers with your mobile app."
        },
        {
            imgUrl: AdvancedAnalytics,
            title: "Advanced Analytics",
            textContent: "All the information about your sales, traffic, regions and products, just a single click away."
        }
    ];
    return (
        <section className='bg-pink-50 pb-12 pt-2 mt-8'>
            <div className='flex flex-col text-center my-16'>
                <h5 className='text-2xl font-bold lg:text-4xl md:text-3xl'>E-commerce Simplified, Success Amplified</h5>
                <h6 className='text-[0.9rem] lg:text-[1.3rem] md:text-[1rem] font-medium text-gray-500 mt-4'>Empowering your online business growth with all the essential tools.</h6>
            </div>

            {/* Card Items  */}
            <div className="flex flex-wrap justify-center 
            mt-10 2xl:grid 2xl:grid-cols-3 min-[1896px]:mx-96 
            2xl:mx-48 min-[1600px]:mx-60 min-[1800px]:mx-80 
            min-[2000px]:mx-96">

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