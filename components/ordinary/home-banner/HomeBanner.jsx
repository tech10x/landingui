import { React } from "react";
import heroImage from "@/assets/images/home-page/banner/home-page-banner-illustration.gif";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="w-200" data-aos="fade-up">
      <div>
        <div className="px-4 lg:px-24 flex items-center bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3]">
          <div className="flex w-full flex-col md:flex-col lg:flex-row justify-between items-center gap-12 pt-14 lg:pt-4 lg:pb-8 ">
            {/* Left Content  */}
            <div className="lg:w-1/2 space-y-8 h-full pt-28">
              <h2 className="text-2xl lg:text-4xl font-bold leading-snug lg:leading-[3.5rem] text-black">
                Transform Your Business,
                <span className="text-blue-700">
                  {" "}
                  Enhance Your Operations, 
                </span><br/>
                Achieve Success.
              </h2>
              <p className="md:w-4/5 text-md font-medium">
                We offer tailored digital solutions for everyone: startups,
                SMBs, enterprises, and individuals. Leverage our advanced tech
                expertise to improve operations, optimize processes, and
                maximize IT investments.
              </p>
              <div>
                <Link href={'/contact'} className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg">
                  <span className="relative z-10">Get Started</span>
                </Link>
              </div>
            </div>
            {/* Right Content  */}
            <div className="ml-0 md:ml-12 lg:ml-12">
              <Image
                src={heroImage}
                alt="Hero-image"
                width={700}
                height={700}
                quality={80}
                loading="eager"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
