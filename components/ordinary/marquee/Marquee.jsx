import React from 'react';
import animationSource from './Marquee.module.css';
import Image from 'next/image';
import Govo from '@/assets/images/Dedicated-Image/Marquee-brand-img/Govo.svg';
import Helpxp from '@/assets/images/Dedicated-Image/Marquee-brand-img/Helpxp.svg';
import Lemonade from '@/assets/images/Dedicated-Image/Marquee-brand-img/Lemonade.svg';
import StyleUp from '@/assets/images/Dedicated-Image/Marquee-brand-img/StyleUp.svg';
import Truke from '@/assets/images/Dedicated-Image/Marquee-brand-img/Truke.svg';
import Uppercase from '@/assets/images/Dedicated-Image/Marquee-brand-img/Uppercase.svg';
import Vector from '@/assets/images/Dedicated-Image/Marquee-brand-img/Vector.svg';
import Wow from '@/assets/images/Dedicated-Image/Marquee-brand-img/Wow.svg';




const Marquee = () => {

    const imageReference = [Govo, Helpxp, Lemonade, StyleUp, Truke, Uppercase, Vector, Wow];
    return (
        <>
            <div className={animationSource.logos}>
                <div className={animationSource.logosSlides}>

                    {
                        imageReference.map((imageUrl, index) =>
                            <Image key={index} src={imageUrl} className={animationSource.brandLogos} alt='Brand-Logo' />)
                    }
                    {
                        imageReference.map((imageUrl, index) =>
                            <Image key={index} src={imageUrl} className={animationSource.brandLogos} alt='Brand-Logo' />)
                    }

                </div>
            </div>
        </>
    )
}

export default Marquee;