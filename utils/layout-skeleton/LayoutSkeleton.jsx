import React from 'react';
import loaderStyle from './LayoutSkeleton.module.css';
const LayoutSkeleton = () => {
    return (
        <div className={`sticky top-0 flex flex-col justify-center items-center ${loaderStyle.Body}`}>
            <span className={`${loaderStyle.loaderWrapper} rounded-full ring-2 ing-offset-8 ring-inset ring-pink-300`}>
                <div className={loaderStyle.loader}></div>
            </span>
        </div>
    )
}

export default LayoutSkeleton;