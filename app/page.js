import React from 'react';
import HomeBanner from '@/components/ordinary/home-banner/HomeBanner.jsx';
import Marquee from '@/components/ordinary/marquee/Marquee';
import launchFastImg from '@/assets/images/home-page/hero-section/launch-fast-hero-illustration.svg';
import scaleFasterImg from '@/assets/images/home-page/hero-section/scale-up-your-business.svg';
import manageBetterImg from '@/assets/images/home-page/hero-section/manage-better-image.svg';
import firstHeroBulletIcon from '@/assets/icons/bullet-icon/star-1.gif';
import secondHeroBulletIcon from '@/assets/icons/bullet-icon/star-2.gif';
import thridHeroBulletIcon from '@/assets/icons/bullet-icon/star-3.gif';
import HeroHeading from '@/components/ordinary/hero-heading/HeroHeading';
import HeroLeft from '@/components/reusable/hero-section/HeroLeft';
import HeroRight from '@/components/reusable/hero-section/HeroRight';
import ServicesSec from '@/components/ordinary/services-section/ServicesSec';
import SiteFunctionality from '@/components/ordinary/site-functionality/SiteFunctionality';
import Testimonial from '@/components/ordinary/testimonial/Testimonial';
import Projects from '@/components/ordinary/projects/Projects';
import EarthAnimation from '@/components/ordinary/earth-animation/EarthAnimation';






const Home = () => {
  return (
    <>

      <HomeBanner />
      <Marquee />

      <HeroHeading content={"Whether you’re a startup or an established business, here’s why Tech10x is your best choice"} />


      <HeroLeft referredImg={launchFastImg} title={"Launch Fast"}
        itemOne={"Build responsive websites and mobile apps."}
        itemTwo={"Ensure 10X faster loading times."}
        itemThree={"Easily bulk upload and import content."}
        itemFour={"Integrate with payment gateways and APIs."}
        itemFive={"Effortlessly customize themes."}
        bulletPoint={firstHeroBulletIcon} />

      <HeroRight referredImg={scaleFasterImg} title={"Scale Faster"}
        itemOne={"Guarantee 99.6% uptime for your site."}
        itemTwo={"Utilize over 50+ third-party plugins and integrations."}
        itemThree={"Boost engagement with marketing tools and analytics."}
        itemFour={"Manage user accounts with defined roles."}
        itemFive={"Process unlimited transactions with low fees."}
        bulletPoint={secondHeroBulletIcon} />

      <HeroLeft referredImg={manageBetterImg} title={"Manage Better"}
        itemOne={"Track orders, handle invoicing, and generate reports."}
        itemTwo={"Edit content, prices, and inventory in bulk."}
        itemThree={"Manage global operations and deliveries smoothly."}
        itemFour={"Access in-depth business analytics."}
        itemFive={"Maintain security and compliance standards."}
        bulletPoint={thridHeroBulletIcon} />

      <ServicesSec />

      <Projects sliceFrom={0} sliceTo={6}/>
      <SiteFunctionality />

      <Testimonial />

      <EarthAnimation />
    </>
  )
}

export default Home;
