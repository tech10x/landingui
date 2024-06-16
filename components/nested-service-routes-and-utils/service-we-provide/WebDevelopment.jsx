import DevFeature from '@/components/reusable/development-features/DevFeature';
import Step from '@/components/reusable/steps/Step';
import TechnologyWeUse from '@/components/reusable/technology-we-use/TechnologyWeUse';
import WhyTech10x from '@/components/reusable/why-tech10x/WhyTech10x';
import React from 'react';
import javascript from '@/assets/icons/technology-icon/javascript.png';
import reactJs from '@/assets/icons/technology-icon/react-js.png';
import nodeJs from '@/assets/icons/technology-icon/node-js.png';
import expressJs from '@/assets/icons/technology-icon/express.png';
import nextJs from '@/assets/icons/technology-icon/next-js.png';
import typeScript from '@/assets/icons/technology-icon/typescript.png';
import mongoDb from '@/assets/icons/technology-icon/mongo-db.png';
import python from '@/assets/icons/technology-icon/python.png';
import java from '@/assets/icons/technology-icon/java.png';
import tailwind from '@/assets/icons/technology-icon/tailwind.png';
import ruby from '@/assets/icons/technology-icon/ruby.png';
import angular from '@/assets/icons/technology-icon/angular.png';

const WebDevelopment = () => {
  return (
    <div>
      <WhyTech10x />
      <Step />
      <TechnologyWeUse 
      tech1={javascript}
      tech2={reactJs} 
      tech3={nodeJs} 
      tech4={expressJs} 
      tech5={nextJs} 
      tech6={typeScript} 
      tech7={mongoDb} 
      tech8={python} 
      tech9={java} 
      tech10={tailwind} 
      tech11={ruby} 
      tech12={angular}/>
      <DevFeature />
    </div>
  )
}

export default WebDevelopment;