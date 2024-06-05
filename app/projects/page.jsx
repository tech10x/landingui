import React from 'react';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import ProjectHomeBanner from '@/components/ordinary/project-page-banner/ProjectHomeBanner';
import HeroRight from '@/components/reusable/hero-section/HeroRight';
import CountUpSection from '@/utils/counup-section/CountUpSection';
import mobileMockupsImg from '@/assets/images/Dedicated-Image/mockups/Mobile-View-Mockup.png';
import allScreenImg from '@/assets/images/Dedicated-Image/mockups/All-screen-device-view-img.png';
import HeroLeft from '@/components/reusable/hero-section/HeroLeft';
import ipadPro from '@/assets/images/Dedicated-Image/mockups/ipad-pro-mockup (1).png';
import tickIcon from '@/assets/icons/yellow-right-tick.png';
const Project = () => {
    return (
        <main>
         <ProjectHomeBanner />
         <CountUpSection />
         <HeroHeading content={"Our Total Projects"} />
         <HeroRight referredImg={mobileMockupsImg} title={"Scale Faster"}
        itemOne={"Guaranteed 99.5% uptime for your store - We keep you open for business."}
        itemTwo={"60+ third party plugins."}
        itemThree={"Marketing tools and discounts to drive repeat orders."}
        itemFour={"Add staff accounts, assign different roles."}
        itemFive={"Unlimited transactions, minimal transaction fees."}
        bulletPoint={tickIcon} />
        <HeroLeft referredImg={ipadPro} title={"Manage Better"}
        itemOne={"Order tracking, invoicing and order reports."}
        itemTwo={"Bulk edit product prices, variants, inventory."}
        itemThree={"Manage global deliveries."}
        itemFour={"In-depth business analytics."}
        itemFive={"Automate all tax calculations."}
        bulletPoint={tickIcon} />
        <HeroRight referredImg={allScreenImg} title={"Scale Faster"}
        itemOne={"Guaranteed 99.5% uptime for your store - We keep you open for business."}
        itemTwo={"60+ third party plugins."}
        itemThree={"Marketing tools and discounts to drive repeat orders."}
        itemFour={"Add staff accounts, assign different roles."}
        itemFive={"Unlimited transactions, minimal transaction fees."}
        bulletPoint={tickIcon} />
        
        </main>
    )
}

export default Project;

