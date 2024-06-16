"use client";
import Image from "next/image";
import React, { useState } from "react";
import bulletPoint from "@/assets/icons/green-tick-1.png";
import htmlIcon from "@/assets/icons/technology-icon/html.png";
import tailwindIcon from "@/assets/icons/technology-icon/tailwind.png";
import javascriptIcon from "@/assets/icons/technology-icon/javascript.png";
import reactjsIcon from "@/assets/icons/technology-icon/react-js.png";
import nextjsIcon from "@/assets/icons/technology-icon/next-js.png";
import nodejsIcon from "@/assets/icons/technology-icon/node-js.png";
import expressjsIcon from "@/assets/icons/technology-icon/express.png";
import mongodbIcon from "@/assets/icons/technology-icon/mongo-db.png";
import { SiGoogleforms } from "react-icons/si";
import techBlobBg from './Blob.module.css';
const SingleProjectContent = ({
  projectName,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
}) => {
  const [isClick, setClick] = useState(1);
  const [imgClick, setImgClick] = useState(1);
  const handleDescriptionTab = (id) => {
    if (id === 1) {
      setClick(1);
    } else if (id === 2) {
      setClick(2);
    }
  };
  const handleImgClick = (id) => {
    if (id === 1) {
      setImgClick(1);
    } else if (id === 2) {
      setImgClick(2);
    } else if (id === 3) {
      setImgClick(3);
    }
  };
  const technologies = [
    {
      name: "Html",
      icon: htmlIcon,
    },
    {
      name: "Tailwind Css",
      icon: tailwindIcon,
    },
    {
      name: "Javascript",
      icon: javascriptIcon,
    },
    {
      name: "React Js",
      icon: reactjsIcon,
    },
    {
      name: "Next Js",
      icon: nextjsIcon,
    },
    {
      name: "Node Js",
      icon: nodejsIcon,
    },
    {
      name: "Express Js",
      icon: expressjsIcon,
    },
    {
      name: "Mongo Db",
      icon: mongodbIcon,
    },
  ];
  const detailsList = [detail1, detail2, detail3, detail4, detail5, detail6];

  return (
    <main className="mt-40">
      <div className="font-sans">
        <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full lg:sticky top-0 flex gap-3">
              <Image
                src={
                  imgClick === 1
                    ? thumbnail1
                    : imgClick === 2
                    ? thumbnail2
                    : thumbnail3
                }
                alt="Product"
                height={500}
                width={500}
                className="w-3/4 rounded-xl object-cover"
                priority={true}
              />
              <div className="w-20 flex flex-col max-sm:mb-4 gap-3">
                <Image
                  src={thumbnail1}
                  alt="Product1"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(1)}
                />
                <Image
                  src={thumbnail2}
                  alt="Product2"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(2)}
                />
                <Image
                  src={thumbnail3}
                  alt="Product3"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(3)}
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800">
                {projectName}
              </h2>
              <div className="text-lg mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                non a ab nesciunt impedit, adipisci consectetur blanditiis ad
                ipsam sit iusto officiis distinctio laudantium vitae? Magni
                voluptatum molestiae ducimus sequi!
              </div>

              <ul className="flex flex-col mt-2">
                <div>
                  <h4 className="text-xl font-bold my-2 text-black">
                    Main Features
                  </h4>
                </div>
                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <Image
                    src={bulletPoint}
                    height={22}
                    width={22}
                    alt="Bulltet-Points"
                    className="mr-3"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <Image
                    src={bulletPoint}
                    height={22}
                    width={22}
                    alt="Bulltet-Points"
                    className="mr-3"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <Image
                    src={bulletPoint}
                    height={22}
                    width={22}
                    alt="Bulltet-Points"
                    className="mr-3"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <Image
                    src={bulletPoint}
                    height={22}
                    width={22}
                    alt="Bulltet-Points"
                    className="mr-3"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <Image
                    src={bulletPoint}
                    height={22}
                    width={22}
                    alt="Bulltet-Points"
                    className="mr-3"
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-8 py-2 bg-blue-800 hover:bg-gray-900 text-white shadow-xl text-base rounded"
                >
                  <SiGoogleforms className="w-5 h-5 cursor-pointer fill-current inline mr-3" />
                  Enroll Now
                </button>
              </div>

              <ul className="grid grid-cols-2 mt-10">
                <li
                  className={`text-gray-800 font-semibold text-base text-center py-3  px-4 border-b-2 ${
                    isClick === 1 && "border-gray-800 bg-gray-50"
                  } cursor-pointer`}
                  onClick={() => handleDescriptionTab(1)}
                >
                  Technology Used
                </li>
                <li
                  className={`text-gray-800 font-semibold text-base text-center py-3  px-4 border-b-2 ${
                    isClick === 2 && "border-gray-800 bg-gray-50"
                  } cursor-pointer`}
                  onClick={() => handleDescriptionTab(2)}
                >
                  Details
                </li>
              </ul>

              {isClick === 1 ? (
                <ul className="grid grid-cols-2 lg:grid-cols-3 mt-4">
                  {technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex flex-col items-center my-6"
                    >
                      <Image
                        src={technology.icon}
                        alt={technology.name}
                        height={25}
                        width={25}
                        quality={100}
                        className={`ml-4 ${techBlobBg.gooey}`}
                      />
                      <h6 className="ml-2 mt-2 font-semibold text-gray-600">{technology.name}</h6>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2 text-sm text-gray-800 mt-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, illo in pariatur incidunt id impedit libero
                    laudantium aliquam non ipsum ex est placeat accusantium
                    eligendi, excepturi sint consequuntur eius fugiat?
                  </p>
                  {detailsList.map((listitem) => (
                    <li className="ml-4 list-disc" key={listitem}>
                      {" "}
                      {listitem}{" "}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProjectContent;
