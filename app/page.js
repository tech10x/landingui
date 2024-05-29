import React from 'react';
import HomeBanner from '@/components/ordinary/home-banner/HomeBanner.jsx';
import Marquee from '@/components/ordinary/marquee/Marquee';
import launchFastImg from '@/assets/images/Dedicated-Image/landing-page-hero-sec-img/launch-fast.svg';
import scaleFasterImg from '@/assets/images/Dedicated-Image/landing-page-hero-sec-img/scale-faster.svg';
import manageBetterImg from '@/assets/images/Dedicated-Image/landing-page-hero-sec-img/manage-better.svg';

import firstHeroBulletIcon from '@/assets/icons/bullet-purple-icon-removebg-preview.png';
import secondHeroBulletIcon from '@/assets/icons/black-blue-bulltet-point.webp';
import thridHeroBulletIcon from '@/assets/icons/green-bullet-point.png';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import HeroLeft from '@/components/reusable/hero-section/HeroLeft';
import HeroRight from '@/components/reusable/hero-section/HeroRight';
import ServicesSec from '@/components/ordinary/services-section/ServicesSec';
import SiteFunctionality from '@/components/ordinary/site-functionality/SiteFunctionality';
import Testimonial from '@/components/ordinary/testimonial/Testimonial';
import Projects from '@/components/ordinary/projects/Projects';




const Home = () => {

  return (
    <>

      <HomeBanner />
      <Marquee />

      <HeroHeading content={"Whether you’re a startup or an established business, here’s why Tech10x is your best choice"} />


      <HeroLeft referredImg={launchFastImg} title={"Launch Fast"}
        itemOne={"Fully responsive e-commerce website & mobile app."}
        itemTwo={"Loads 6X faster than existing solutions."}
        itemThree={"Upload/import products and inventory in bulk."}
        itemFour={"Integrate payment gateways."}
        itemFive={"Easily customizable themes."}
        bulletPoint={firstHeroBulletIcon} />

      <HeroRight referredImg={scaleFasterImg} title={"Scale Faster"}
        itemOne={"Guaranteed 99.5% uptime for your store - We keep you open for business."}
        itemTwo={"60+ third party plugins."}
        itemThree={"Marketing tools and discounts to drive repeat orders."}
        itemFour={"Add staff accounts, assign different roles."}
        itemFive={"Unlimited transactions, minimal transaction fees."}
        bulletPoint={secondHeroBulletIcon} />

      <HeroLeft referredImg={manageBetterImg} title={"Manage Better"}
        itemOne={"Order tracking, invoicing and order reports."}
        itemTwo={"Bulk edit product prices, variants, inventory."}
        itemThree={"Manage global deliveries."}
        itemFour={"In-depth business analytics."}
        itemFive={"Automate all tax calculations."}
        bulletPoint={thridHeroBulletIcon} />

      <ServicesSec />

      <Projects />
      <SiteFunctionality />

      <Testimonial />

    </>
  )
}

export default Home;
