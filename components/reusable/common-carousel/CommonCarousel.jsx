
"use client";
import styleSheet from './CommonCarousel.module.css';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
const quantity = [1, 2, 3];
const  CommonCarousel = ({source, altName}) => {
  return (

<Carousel className={`rounded-xl ${styleSheet.carousel}`}>
{
            quantity.map((item) =>
             <Image key={item} src={source} alt={altName} 
            height={500}
            width={500}
            className="h-full w-full object-cover"/>)
         }
</Carousel>

  );
}
export default CommonCarousel;



