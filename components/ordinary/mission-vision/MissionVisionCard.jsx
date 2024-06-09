import React from 'react';


const MissionVisionCard = ({icon, title, paragraph, backgroundcolor, textcolor}) => {
  return (
    <div className='mt-12'>
<div
  className={`cursor-pointer ${backgroundcolor} shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] px-6 py-0 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4`}>
  <div className="flex items-center">
    <h3 className={`text-3xl font-bold ${textcolor} flex-1`}>{title}</h3>
    <div className={`${backgroundcolor} ${textcolor} mt-4 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer`}>
      {icon}
    </div>
  </div>
  <p className={`text-sm ${textcolor} my-3`}>{paragraph}</p>
</div>
    </div>
  )
}

export default MissionVisionCard;