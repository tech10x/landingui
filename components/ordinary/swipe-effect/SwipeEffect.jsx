'use client';
import envConfig from '@/envConfig.js';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';


const SwipeEffect = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
           const fetchData = async () => {
            const urlToBeFetch = envConfig.allProjectsApiUrl_2;
          try {
            const response = await axios.get(urlToBeFetch);
            const outPut = response.data;
            setData(outPut.projects)
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    

        fetchData();
      }, []); 
    
      if (loading) return <div className='border-2 border-gray-200 rounded-md bg-gray-200 overflow-hidden shadow-lg animate-pulse h-70 w-56 p-2'>
        <div className='block mx-auto bg-gray-300 h-8 w-full my-2'></div>
        <div className='block mx-auto bg-gray-300 h-8 w-full my-2'></div>
        <div className='block mx-auto bg-gray-300 h-8 w-full my-2'></div>
        <div className='block mx-auto bg-gray-300 h-8 w-full my-2'></div>
        <div className='block mx-auto bg-gray-300 h-8 w-full my-2'></div>
        <div className='block mx-auto bg-gray-300 h-8 w-full my-2'></div>
      </div>;
      if (error) return <div>Error: {error.message}</div>;

      
    return (
        <div className='banner'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='w-[240px] h-[320px]'
        >

          
            {data.map((img) => 
            <SwiperSlide key={img.id} className='flex items-center justify-center rounded-[18px] text-[22px] font-bold text-white'>
            <Image src={img.thumbNail} alt={img.title} width={400} height={600}/>
          </SwiperSlide>)}

        </Swiper>
      </div>
    )
}

export default SwipeEffect;