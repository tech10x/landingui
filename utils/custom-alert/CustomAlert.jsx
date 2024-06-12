import React from "react";
import greenTickIcon from '@/assets/icons/green-tick-1.png';
import alertStyle from './CustomAlert.module.css';
import Image from "next/image";
const CustomAlert = ({ clientName, closeButton, showOrHide }) => {

  return (
    <div
    className={`${showOrHide} fixed inset-0 px-4 flex flex-wrap justify-center items-center w-full h-full z-[9999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ${alertStyle.overlay}`}>
    <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 bg-white shadow-lg rounded-md px-5 py-10 relative mx-auto text-center">
    <div className="flex flex-col justify-center items-center">
        <Image src={greenTickIcon} width={50} height={50} alt="green-tick-icon" />
        </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold flex-1">Awesome!</h3>
        <h3 className="text-xl font-semibold flex-1">Dear,{clientName}</h3>
        <p className="text-sm text-gray-500 mt-2">Your information has been sended succesfully  <br />
        We will reachout to you soon !!!
          </p>
        <button onClick={closeButton}
          className="px-6 py-2.5 mt-8 w-full rounded text-white text-sm font-semibold border-none outline-none bg-green-500 hover:bg-green-600">Got
          it</button>
      </div>
    </div>
  </div>
  );
};

export default CustomAlert;


