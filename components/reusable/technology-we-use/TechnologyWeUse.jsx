import Image from 'next/image'
import React from 'react';
import tempLogo from '@/assets/icons/tech10x.webp';

const TechnologyWeUse = ({tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10, tech11, tech12}) => {

  const items = [
    tech1,
    tech2,
    tech3,
    tech4,
    tech5,
    tech6,
    tech7,
    tech8,
    tech9,
    tech10,
    tech11,
    tech12

  ]
  return (
    <div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Technology We Will Be Using</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them.</p>
    </div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 lg:gap-12">

{
items.map((item) =>
<div key={item} className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center globalImageAndIconAnimation">
<Image alt="team" className="w-20 h-20 object-cover object-center flex-shrink-0" src={item}/>
</div> )
}
</div>
  </div>
</section>
    </div>
  )
}

export default TechnologyWeUse;


