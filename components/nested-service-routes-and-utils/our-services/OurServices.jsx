"use client";
import React, { useState } from "react";
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
  const [buttonNo, setButtonNo] = useState(1);
  const handleCustomRoute = (id) => {
    if (id === 1) {
      setButtonNo(1);
    } else if (id === 2) {
      setButtonNo(2);
    } else if (id === 3) {
      setButtonNo(3);
    } else if (id === 4) {
      setButtonNo(4);
    } else if (id === 5) {
      setButtonNo(5);
    } else if (id === 6) {
      setButtonNo(6);
    }else if (id === 7) {
        setButtonNo(7);
    }else if(id === 8){
        setButtonNo(8); 
    }
  };
  return (
    <div>
      <ul className="flex flex-col justify-center md:flex-col lg:flex-row">
        <li
          className={`${buttonNo === 1 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(1)}
        >
          Web Devlopment
        </li>

        <li
          className={`${buttonNo === 2 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(2)}
        >
          Web Design
        </li>

        <li
          className={`${buttonNo === 3 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(3)}
        >
          Api Development
        </li>

        <li
          className={`${buttonNo === 4 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(4)}
        >
          Degital Marketing
        </li>

        <li
          className={`${buttonNo === 5 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(5)}
        >
          Software Maintenance
        </li>

        <li
          className={`${buttonNo === 6 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(6)}
        >
          App Development
        </li>
        <li
          className={`${buttonNo === 7 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(7)}
        >
          SEO
        </li>
        <li
          className={`${buttonNo === 8 ? 'text-blue-600 font-bold text-base text-center bg-gray-50 py-3 px-6 border-b-2 border-blue-600 cursor-pointer transition-all' : "text-gray-600 font-semibold text-base text-center hover:bg-gray-50 py-3 px-6 border-b-2 cursor-pointer transition-all"}`}
          onClick={() => handleCustomRoute(8)}
        >
          CMS Solution
        </li>
      </ul>

      <ServiceDisplayer
        chiled={
          <main>
            {buttonNo === 1 && < WebDevelopment/>}
            {buttonNo === 2 && <WebDesign />}
            {buttonNo === 3 && <ApiDevelopment />}
            {buttonNo === 4 && <DigitalMarketing />}
            {buttonNo === 5 && <SoftwareMaintenance />}
            {buttonNo === 6 && <AppDevelopment />}
            {buttonNo === 7 && <Seo />}
            {buttonNo === 8 && <CmsSolution />}
            
          </main>
        }
      />
    </div>
  );
};

export default OurServices;
