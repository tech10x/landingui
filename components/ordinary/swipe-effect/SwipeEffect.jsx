'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';


const SwipeEffect = ({data}) => {
       
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