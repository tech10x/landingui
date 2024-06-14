"use client";
import React, { useState, useEffect } from "react";
import WebDevelopment from "../service-we-provide/WebDevelopment";
import WebDesign from "../service-we-provide/WebDesign";
import ApiDevelopment from "../service-we-provide/ApiDevelopment";
import DigitalMarketing from "../service-we-provide/DigitalMarketing";
import SoftwareMaintenance from "../service-we-provide/SoftwareMaintenance";
import AppDevelopment from "../service-we-provide/AppDevelopment";
import ServiceDisplayer from "../service-displayer/ServiceDisplayer";
import Seo from "../service-we-provide/Seo";
import CmsSolution from "../service-we-provide/CmsSolution";

const OurServices = () => {
  const [buttonNo, setButtonNo] = useState(0);
  const [isSmallDevice, setSmallDevice] = useState(false);

  // Detarmine current screen width 
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 960){
        setSmallDevice(true);
      }else{
        setSmallDevice(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // This function is detarmine which button is clicked by user then what to do
  const handleCustomRoute = (id) => {
    if (id === 0) {
      setButtonNo(0);
    } else if (id === 1) {
      setButtonNo(1);
    } else if (id === 2) {
      setButtonNo(2);
    } else if (id === 3) {
      setButtonNo(3);
    } else if (id === 4) {
      setButtonNo(4);
    } else if (id === 5) {
      setButtonNo(5);
    }else if (id === 6) {
        setButtonNo(6);
    }else if(id === 7){
        setButtonNo(7); 
    }
  };

  // List item array 
  const ourService = [
    "Web Devlopment",
    "Web Design",
    "Api Development",
    "Digital Marketing",
    "Software Maintenance",
    "App Development",
    "SEO",
    "CMS Solution"
  ];
  return (
    <div>

      <ul className="flex flex-col justify-center md:flex-col lg:flex-row">
       {/* Maping ourservice array to create list item */}
        {
          ourService.map((item, index) => 
          <li key={index} className={`${buttonNo === index ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-0 lg:px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`} 
          onClick={() => handleCustomRoute(index)}>{item} {/* Item Showing from ourservice Array  */}
          


          {/* If user using small device then render this  */}
          {
          isSmallDevice && index === buttonNo ?
          <ServiceDisplayer
          chiled={
            <main>
              {buttonNo === 0 && < WebDevelopment/>}
              {buttonNo === 1 && <WebDesign />}
              {buttonNo === 2 && <ApiDevelopment />}
              {buttonNo === 3 && <DigitalMarketing />}
              {buttonNo === 4 && <SoftwareMaintenance />}
              {buttonNo === 5 && <AppDevelopment />}
              {buttonNo === 6 && <Seo />}
              {buttonNo === 7 && <CmsSolution />}
              
            </main>
          }
        /> : ""
        }
          </li>)
        }
      </ul>

{/* If user using large device then render this */}
{
  isSmallDevice === false &&
  <ServiceDisplayer
  chiled={
    <main>
      {buttonNo === 0 && < WebDevelopment/>}
      {buttonNo === 1 && <WebDesign />}
      {buttonNo === 2 && <ApiDevelopment />}
      {buttonNo === 3 && <DigitalMarketing />}
      {buttonNo === 4 && <SoftwareMaintenance />}
      {buttonNo === 5 && <AppDevelopment />}
      {buttonNo === 6 && <Seo />}
      {buttonNo === 7 && <CmsSolution />}
    </main>
  }
/>
}
    </div>
  );
};

export default OurServices;
