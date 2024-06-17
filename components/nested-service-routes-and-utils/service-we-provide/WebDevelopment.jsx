import React from 'react';
import Image from 'next/image';
import DevFeature from '@/components/reusable/development-features/DevFeature';
import Step from '@/components/reusable/steps/Step';
import TechnologyWeUse from '@/components/reusable/technology-we-use/TechnologyWeUse';
import WhyTech10x from '@/components/reusable/why-tech10x/WhyTech10x';
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
import vueJs from '@/assets/icons/technology-icon/vue-js.png';
import html from '@/assets/icons/technology-icon/html.png';
import css from '@/assets/icons/technology-icon/css.png';
import redux from '@/assets/icons/technology-icon/redux-toolkit.png';
import springBoot from '@/assets/icons/technology-icon/spring-boot.png';
import php from '@/assets/icons/technology-icon/php.png';
import postGreSql from '@/assets/icons/technology-icon/postgresql.png';
import mySql from '@/assets/icons/technology-icon/mysql.png';
import bootstrap from '@/assets/icons/technology-icon/bootstrap.png';
import django from '@/assets/icons/technology-icon/django.png';
import flusk from '@/assets/icons/technology-icon/flusk.png';



const WebDevelopment = () => {
  return (
    <div>
      
      <WhyTech10x />
      <Step />
      <TechnologyWeUse 
      tech1={
      <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
      <Image src={javascript} alt="javascript" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
      </div>
      }
      tech2={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={reactJs} alt="React-js" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech3={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={nodeJs} alt="Node-js" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech4={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={expressJs} alt="Express-js" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech5={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={nextJs} alt="Next-js" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech6={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={typeScript} alt="Typescript" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech7={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={mongoDb} alt="Mongo DB" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech8={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={python} alt="Python" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech9={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={java} alt="Java" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech10={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={tailwind} alt="Tailwind" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech11={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={ruby} alt="Ruby" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech12={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={angular} alt="Angular" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      }
      tech13={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={vueJs} alt="Vue-js" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech14={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={html} alt="Html" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech15={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={css} alt="Css" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      }
      tech16={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={bootstrap} alt="Bootstrap" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech17={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={springBoot} alt="Spring-Boot" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech18={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={php} alt="Php" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      }
      tech19={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={postGreSql} alt="Postgresql" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech20={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={mySql} alt="Mysql" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      } 
      tech21={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={django} alt="Django" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      }
      tech22={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={flusk} alt="Flusk" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      }
      tech23={
        <div className="h-32 rounded-lg bg-green-50 flex flex-col justify-center items-center transition-transform hover:scale-110">
        <Image src={redux} alt="Redux" className="w-20 h-20 object-cover object-center flex-shrink-0"/>
        </div>
      }
      />
      
      <DevFeature />
    </div>
  )
}

export default WebDevelopment;