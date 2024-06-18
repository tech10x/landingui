"use client";
import { React, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import loading from "./loading";
import blurBackground from '@/utils/custom-alert/CustomAlert.module.css';

const ProjectCard = ({ imageSource, title, siteUrl, dynamicLink }) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const handleRedirectLoading = () => {
    isClicked === false && setIsClicked(true);
  };
  return (
    <>
      {isClicked === true ? (
        loading()
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto ">
            <div className="flex" data-aos="flip-left">
              <div className="lg:w-full sm:w-full">
                <div className="flex relative w-full h-[450px] md:h-[500px] lg:h-[450px] xl:h-[500px] ">
                  <Image
                    alt={title}
                    className="rounded-md absolute inset-0 w-full h-full object-cover object-center shadow-custom"
                    width={500}
                    height={500}
                    src={imageSource}
                  />
                  <div className={`px-8 py-10 relative z-999 w-full border-gray-200 bg-white opacity-0 hover:opacity-100 rounded-lg shadow-2xl hover:transition-transform hover:scale-90 cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-900 
                   ${blurBackground.overlay}`}>
                    <h1 className="title-font text-lg font-medium text-blue-200 mb-3">
                     {title}
                    </h1>
                    <p className="leading-relaxed text-white">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>

                    <div className="mt-20 sm:mt-40 md:mt-36 lg:mt-20 xl:mt-36">
                      <a
                        href={siteUrl}
                        target="blank"
                        className="relative flex h-[50px] w-full mb-2 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-green-800 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-blue-900 hover:shadow-blue-600 hover:before:border-[25px] rounded-lg "
                      >
                        <span className="relative z-10">Preview</span>
                      </a>

                      <button
                        onClick={handleRedirectLoading}
                        className="before:ease relative h-[50px] w-full overflow-hidden border border-white text-blue-900 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gradient-to-r from-blue-800 to-green-800 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 rounded-lg font-semibold bg-white hover:border-blue-900"
                      >
                        <Link
                          href={`/projects/${dynamicLink}`}
                          className="relative z-10"
                        >
                          View Project
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectCard;
