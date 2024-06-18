import getSingleProject from '@/api/getSingleProject';
import MockupHero from '@/components/reusable/project-mockup-hero-sec/MockupHero';
import React from 'react';
import desktopBulletIcon from '@/assets/icons/green-tick-1.png';
import mobileBulletIcon from '@/assets/icons/green-tick-2.png';
import tabletBulletIcon from '@/assets/icons/yellow-right-tick.png';
import SingleProjectContent from '@/components/reusable/single-project-content/SingleProjectContent';
import mockup1 from '@/assets/images/Dedicated-Image/mockups/All-screen-device-view-img.png';
import mockup2 from '@/assets/images/Dedicated-Image/mockups/ipad-pro-mockup (1).png';


const SingleProject = async({params}) => {
const {id} = params;
const projectData = await getSingleProject(id)
const dataFlow = projectData.project;

  return (
    <div className='mb-0'> 
    <SingleProjectContent 
    projectName ={dataFlow.title}
    thumbnail1={dataFlow.thumbNail}
    thumbnail2={mockup1}
    thumbnail3={mockup2}
    detail1={'A gray t-shirt is a wardrobe essential because it is so versatile.'}
    detail2={'Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.'}
    detail3={' This is easy to care for. They can usually be machine-washed and dried on low heat.'}
    detail4={'You can add your own designs, paintings, or embroidery to make it your own.'}
    detail5={' A gray t-shirt is a wardrobe essential because it is so versatile.'}
    detail6={' Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.'}
/>
    <MockupHero 
    desktopTitle={"This is Desktop View"}
    desktopParagraph={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reprehenderit esse incidunt officiis, iusto veniam similique doloremque odio deleniti maiores asperiores, a consequuntur aliquam ad alias doloribus consequatur animi illum?"}
    desktopImg={dataFlow.deskTopView}
    desktopBulletPoint={desktopBulletIcon}
    desktopList1={"Lorem ipsum dolor sit amet consectetur "}
    desktopList2={"Lorem ipsum dolor sit amet consectetur "}
    desktopList3={"Lorem ipsum dolor sit amet consectetur "}
    desktopList4={"Lorem ipsum dolor sit amet consectetur "}
    desktopList5={"Lorem ipsum dolor sit amet consectetur "}
    tabletTitle={"This is Tablet View"}
    tabletParagraph={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reprehenderit esse incidunt officiis, iusto veniam similique doloremque odio deleniti maiores asperiores, a consequuntur aliquam ad alias doloribus consequatur animi illum?"}
    tabletImg={dataFlow.tabView}
    tabletBulletPoint={tabletBulletIcon}
    tabletList1={"Lorem ipsum dolor sit amet consectetur "}
    tabletList2={"Lorem ipsum dolor sit amet consectetur "}
    tabletList3={"Lorem ipsum dolor sit amet consectetur "}
    tabletList4={"Lorem ipsum dolor sit amet consectetur "}
    tabletList5={"Lorem ipsum dolor sit amet consectetur "}
    mobileTitle={"This is Mobile View"}
    moblieParagraph={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit reprehenderit esse incidunt officiis, iusto veniam similique doloremque odio deleniti maiores asperiores, a consequuntur aliquam ad alias doloribus consequatur animi illum?"}
    mobileImg={dataFlow.mobileView}
    mobilebulletPoint={mobileBulletIcon}
    mobileList1={"Lorem ipsum dolor sit amet consectetur "}
    mobileList2={"Lorem ipsum dolor sit amet consectetur "}
    mobileList3={"Lorem ipsum dolor sit amet consectetur "}
    mobileList4={"Lorem ipsum dolor sit amet consectetur "}
    mobileList5={"Lorem ipsum dolor sit amet consectetur "}

    />
     </div>
  )
}

export default SingleProject;
