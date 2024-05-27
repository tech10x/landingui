import React from 'react';

const HeroHeading = ({ content }) => {
    return (
        <div className='block mx-auto text-2xl font-bold w-3/4  mt-28 mb-20 text-center sm:text-4xl'
            data-aos-anchor-placement="bottom-center">
            {content}
        </div>
    )
}

export default HeroHeading;