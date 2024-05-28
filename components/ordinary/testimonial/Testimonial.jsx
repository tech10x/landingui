'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { Autoplay, EffectFlip, Pagination, Navigation } from 'swiper/modules';
import TestimonialCard from '../testimonial-card/TestimonialCard';
import Image from 'next/image';
import testimonialHeaingImg from '@/assets/images/Independent-image/testimonial-heading-icon.svg';



const Testimonial = () => {
    return (



        <div className='w-4/5 lg:w-1/2 block mx-auto mt-8'>

            <div id='sectionHeading' className='flex flex-col justify-center items-center mt-28'>
                <Image src={testimonialHeaingImg} alt='testimonial heaing image' />
                <h3 className='font-bold text-xl md:text-2xl lg:text-4xl my-6'>Hear from our satisfied customers</h3>
                <p className='text-medium lg:text-xl md:text-lg font-semibold text-gray-600'>From beginners to enterprise brands, everyone loves Tech10x!</p>
            </div>

            <div className='py-12'>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[Autoplay, EffectFlip, Pagination, Navigation]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>

                    <SwiperSlide className='py-10'>
                        <TestimonialCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>


    )
}

export default Testimonial;