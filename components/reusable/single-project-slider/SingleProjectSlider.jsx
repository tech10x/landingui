'use client';
import { Carousel } from "@material-tailwind/react";
import bulletPoint from '@/assets/icons/yellow-right-tick.png';
import Image from 'next/image';
import htmlIcon from '@/assets/icons/Technology-icons/HTML.webp';
import tailwindIcon from '@/assets/icons/Technology-icons/tailwind-icon.png';
import javascriptIcon from '@/assets/icons/Technology-icons/javascript-icon.png';
import reactjsIcon from '@/assets/icons/Technology-icons/react-js-icon.png';
import nextjsIcon from '@/assets/icons/Technology-icons/next-js-icon.png';
import nodejsIcon from '@/assets/icons/Technology-icons/node-js-icon.png';
import expressjsIcon from '@/assets/icons/Technology-icons/express-icon.png';
import mongodbIcon from '@/assets/icons/Technology-icons/mongodb-icon.png';

const SingleProjectSlider = ({ projectImg, projectTitle }) => {

    const technologies = [
        {
            name: "Html",
            icon: htmlIcon
        },
        {
            name: "Tailwind Css",
            icon: tailwindIcon
        },
        {
            name: "Javascript",
            icon: javascriptIcon
        },
        {
            name: "React Js",
            icon: reactjsIcon
        },
        {
            name: "Next Js",
            icon: nextjsIcon
        },
        {
            name: "Node Js",
            icon: nodejsIcon
        },
        {
            name: "Express Js",
            icon: expressjsIcon
        },
        {
            name: "Mongo Db",
            icon: mongodbIcon
        }      

    ];
  return (
    <>
<section className="mt-28">
<div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:pb-16 sm:py-12 lg:px-8">

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <div className='w-full block mx-auto'>
    <Carousel className="rounded-xl">
      <Image
        src={projectImg}
        height={500}
        width={500}
        alt={projectTitle}
        className="h-full w-full object-cover"
      />
      <Image
        src={projectImg}
        height={500}
        width={500}
        alt={projectTitle}
        className="h-full w-full object-cover"
      />
      <Image
        src={projectImg}
        height={500}
        width={500}
        alt={projectTitle}
        className="h-full w-full object-cover"
      />
    </Carousel>
        </div>

        <div className="lg:py-16">
            <h2 className="text-3xl font-bold sm:text-4xl pb-4">{projectTitle}</h2>
            <div className="space-y-4 text-gray-600">

                <div className='text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non a ab nesciunt impedit, adipisci consectetur blanditiis ad ipsam sit iusto officiis distinctio laudantium vitae? Magni voluptatum molestiae ducimus sequi!
                </div>
                <ul className='flex flex-col'>
                      <div>
                        <h4 className='text-xl font-bold my-2 text-black'>About This Layout</h4>
                      </div>
                    <li className='inline-flex items-center my-1.5 text-md font-semibold'>
                        <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>

                    <li className='inline-flex items-center my-1.5 text-md font-semibold'>
                        <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>

                    <li className='inline-flex items-center my-1.5 text-md font-semibold'>
                        <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>

                    <li className='inline-flex items-center my-1.5 text-md font-semibold'>
                        <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>

                    <li className='inline-flex items-center my-1.5 text-md font-semibold'>
                        <Image src={bulletPoint} height={22} width={22} alt='Bulltet-Points' className='mr-3' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>

                </ul>

                <div>
                <div>
                        <h4 className='text-xl font-bold my-2 text-black'>Technology used</h4>
                        <ul>
                           {
                            technologies.map((technology) => 
                            <li key={technology.name} className='inline-flex items-center ml-4 my-6'>
                                <Image src={technology.icon} alt={technology.name} height={30} width={30} className='ml-4'/>
                                <h6 className='ml-2'>{technology.name}</h6>
                            </li>)
                           }
                        </ul>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</>
  )
}

export default SingleProjectSlider;
