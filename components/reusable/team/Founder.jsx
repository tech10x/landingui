import React from 'react'
import Image from 'next/image';
import teamMember from '@/assets/images/Dedicated-Image/our-clients/bill-gates.jpeg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Founder = ({name, email, position}) => {
  return (
    <div>
        <div className="bg-white max-w-[230px] px-6 py-8 rounded-xl shadow-2xl">
      <div className="flex items-center justify-cente text-center flex-col">

        <Image src={teamMember} height={250} width={250} className="rounded-full" alt='Founder-image'/>
        <div className="mt-5">
          <h4 className="text-lg text-gray-700 font-bold">{name}</h4>
          <p className="text-xs text-gray-600 mt-1">{email}</p>
          <p className="text-xs text-gray-600 mt-1">{position}</p>
        </div>
        <div className='inline-flex gap-2 mt-4'>
            <a href='#'><FaFacebookSquare className='text-2xl cursor-pointer text-blue-700' /> </a>
            <a href='#'><FaInstagramSquare className='text-2xl cursor-pointer text-brown-600' /> </a>
            <a href='#'><FaTwitterSquare className='text-2xl cursor-pointer text-blue-700' /> </a>
            <a href='#'><FaGithub className='text-2xl cursor-pointer' /> </a>
            <a href='#'><IoLogoLinkedin className='text-2xl cursor-pointer text-blue-700' /> </a>
           
           
           
           
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default Founder;


