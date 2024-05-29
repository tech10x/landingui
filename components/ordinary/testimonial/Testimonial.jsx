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
import billGatesImg from '@/assets/images/Dedicated-Image/our-clients/bill-gates.jpeg';
import billGatesDaughterImg from '@/assets/images/Dedicated-Image/our-clients/billGates-daughter.jpeg';
import jefrryBezosImg from '@/assets/images/Dedicated-Image/our-clients/jefrry-bezos.jpg';
import jioKakaImg from '@/assets/images/Dedicated-Image/our-clients/jio-kaka.jpeg';
import laureneImg from '@/assets/images/Dedicated-Image/our-clients/laurene.webp';
import markZuckerbergImg from '@/assets/images/Dedicated-Image/our-clients/mark-zuckerberg.jpeg';
import priscillaChanImg from '@/assets/images/Dedicated-Image/our-clients/priscilla-chan.jpeg';
import satyaNadellaImg from '@/assets/images/Dedicated-Image/our-clients/satya-nadella.jpg';
import HelpxpImg from '@/assets/images/Dedicated-Image/Marquee-brand-img/Helpxp.svg';
import LemonadeImg from '@/assets/images/Dedicated-Image/Marquee-brand-img/Lemonade.svg';
import StyleUpImg from '@/assets/images/Dedicated-Image/Marquee-brand-img/StyleUp.svg';
import UppercaseImg from '@/assets/images/Dedicated-Image/Marquee-brand-img/Uppercase.svg';
import VectorImg from '@/assets/images/Dedicated-Image/Marquee-brand-img/Vector.svg';



const Testimonial = () => {

    
    const testimonialInfo = 
      [
        {
            id : 1,
            founderImgURL : billGatesImg,
            founderName : "Bill Gates",
            company_1 : "Microsoft",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : LemonadeImg
        },
        {
            id : 2,
            founderImgURL : billGatesDaughterImg,
            founderName : "Phoebe Adele Gates",
            company_1 : "Microsoft",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : HelpxpImg
        },
        {
            id : 3,
            founderImgURL : jefrryBezosImg,
            founderName : "jeff Bezos",
            company_1 : "Amazon",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : LemonadeImg
        },
        {
            id : 4,
            founderImgURL : jioKakaImg,
            founderName : "Mukesh Ambani",
            company_1 : "Relince",
            company_2 : "Jio",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : StyleUpImg
        },
        {
            id: 5,
            founderImgURL : laureneImg,
            founderName : "Laurene",
            company_1 : "Microsoft",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : LemonadeImg
        },
        {
            id : 6,
            founderImgURL : markZuckerbergImg,
            founderName : "Mark Zuckerberg",
            company_1 : "facebook",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : VectorImg
        },
        {
            id : 7,
            founderImgURL : priscillaChanImg,
            founderName : "Priscilla Chan",
            company_1 : "Microsoft",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : UppercaseImg
        },
        {
            id : 8,
            founderImgURL : satyaNadellaImg,
            founderName : "Satya Nadella",
            company_1 : "Microsoft",
            company_2 : "Canadian National Railway",
            company_3 : "Caterpillar Inc",
            review : "“Substantial rise in our business metrics!”",
            reviewDetails : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem nam et numquam dolor blanditiis quam ipsam reiciendis minus adipisci dolorem libero atque facilis temporibus quo magnam sint fugit quasivoluptatum consectetur quas quod debitis, porro expedita. Placeat nisi odio, corporis amet culpa sunt quisquam! Minus earum eos fuga eius, voluptate omnis sapienteconsectetur repellendus quasi temporibus est, quis, illum dolorum.",
            brandImgURL : VectorImg
        }
    ];
    
    return (
        <>
        
            <div className='w-4/5 lg:w-1/2 block mx-auto mt-8' >
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
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >{testimonialInfo.map((data) => 
                    <SwiperSlide className='py-10' key={data.id}>
                        <TestimonialCard
                        founderImg={data.founderImgURL}
                        founderName={data.founderName}
                        comp_1={data.company_1}
                        comp_2={data.company_2}
                        comp_3={data.company_3}
                        mainReview={data.review}
                        reviewContent={data.reviewDetails}
                         brandImg={data.brandImgURL}/>
                    </SwiperSlide>
                )}
                </Swiper>
            </div>
        </div>
        
</>
                

    )
}

export default Testimonial;