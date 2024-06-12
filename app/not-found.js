import Link from 'next/link';
import React from 'react';
import NotFoundImg from '@/assets/images/Independent-image/page-found-img.jpg';
import Image from 'next/image';

export default function NotFound()  {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center mt-28">
      <Image src={NotFoundImg} alt="Not Found Image" width={500} height={500} className='mt-12'/>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-4xl text-teal-500'>The requested Resources Not Found</h1>
      <button className='mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 btn'>
      <Link href="/">Go Home</Link>
      </button>
      </div> 
     
</main>
)
  }