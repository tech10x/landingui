"use client";
import React, { useState } from "react";
import MissionVisionCard from "./MissionVisionCard";
import Mission from "./Mission";
import { GiBullseye } from "react-icons/gi";
import { GiBoltEye } from "react-icons/gi";
import Vision from "./Vision";

const MissionVision = () => {
  const [isClicked, setIsClicked] = useState(0);

  const handleClick = (id) => {
    if (id === 0) {
      setIsClicked(0);
    } else if (id === 1) {
      setIsClicked(1);
    }
  };
  
  return (
    <>
    <div className="flex flex-col justify-center items-center my-20">
        <h2 className="text-3xl font-semibold">Our Mission And Vision</h2>
        <p className="px-8 text-center pt-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus mollitia fugit et asperiores corrupti vel aperiam placeat</p>
    </div>
    <div className="my-12 border-2 shadow-xl">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-100vh">
          <button onClick={() => handleClick(0)} className="block mx-auto">
            <MissionVisionCard
              icon={<GiBullseye className="text-5xl font-bold" />}
              title={"Mission"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit"
              }
              backgroundcolor={`bg-blue-900 ${isClicked === 1 && "bg-white"}`}
              textcolor={`${isClicked === 1 ? "text-blue-900" : "text-white"}`}
            />
          </button>

          <button onClick={() => handleClick(1)} className="block mx-auto">
            <MissionVisionCard
              icon={<GiBoltEye className="text-5xl font-bold" />}
              title={"Vision"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit"
              }
              backgroundcolor={`bg-blue-900 ${isClicked === 0 && "bg-white"}`}
              textcolor={`${isClicked === 0 ? "text-blue-900" : "text-white"}`}
            />
          </button>
        </div>
        <div className="h-100vh">
          {isClicked === 1 ? <Vision /> : <Mission />}
        </div>
      </div>
    </div>
    </>
  );
};

export default MissionVision;
