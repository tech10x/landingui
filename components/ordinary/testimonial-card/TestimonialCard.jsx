import React from 'react';
import Image from 'next/image';


const TestimonialCard = ({founderImg, founderName, comp_1, comp_2, comp_3, mainReview, reviewContent, brandImg}) => {
    
    return (
        <article className="rounded-xl border border-gray-700 bg-white px-4 pt-8 pb-28 shadow-lg"
       >
            <div className="flex items-center gap-4">
                <Image
                    alt="Owner Image" 
                    src={founderImg}
                    className="size-16 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg font-medium text-gray-900">{founderName}</h3>

                    <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-900"> {comp_1} </a>
                            </li>

                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-900"> {comp_2} </a>
                            </li>

                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-900">{comp_3}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <a href="#" className="block h-full rounded-lg border hover:border-gray-700 p-4 border-pink-100">
                        <strong className="font-bold text-lg text-gray-900"> {mainReview} </strong>

                        <p className="mt-1 text-sm font-medium text-gray-900"> {reviewContent} </p>
                    </a>
                </li>
            </ul>

            <div className='float-right mt-6 pb-12'>
                <Image src={brandImg} alt='Brand-Name' width={200} height={200}/>
            </div>
        </article>
    )
}

export default TestimonialCard;