// Modules
import React, { ReactNode } from 'react';

// Classes
import ChipClasses from './classes/chip.class';
import TextClasses from './classes/text.class';
import ButtonClasses from './classes/button.class';
import ColorsClasses from './classes/colors.class';

// Icons
import { 
  ArrowDownTrayIcon, 
  GlobeAltIcon, 
  ServerStackIcon, 
  CircleStackIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
  AtSymbolIcon,
  BriefcaseIcon,
  PlusIcon
} from '@heroicons/react/16/solid';

export default function page() {

  return (

    <>

      <TopBar/>

      <div className='w-full min-h-screen flex flex-col font-sans bg-gray-700 text-white pt-20'>
        
        <div className={`h-full flex flex-col gap-y-4 p-4 ${globalPaddingX}`}>

          <AboutMe/>

          <ContactMeContainer/>

          <EducationContainer/>

          <TechnologiesContainer/>

          <ExperienceContainer/>

        </div>

      </div>

    </>

  )

}

const globalPaddingX = 'md:px-20 lg:px-40 xl:px-80';

function TopBar () {

  return (

    <div className={`z-10 h-20 text-white fixed w-full flex flex-col justify-center ${ColorsClasses.bgPrimaryColor}`}>

      <div className={`flex flex-row justify-between items-center px-4 ${globalPaddingX}`}>

        <div>

          <h1 className={TextClasses.sectionTitle}>André Lizarán</h1>

          <h2 className='font-semibold'>{aboutMeData.subtitle}</h2>

        </div>

        <div className='flex gap-x-3'>

          {/* <button className={`hidden md:flex ${ButtonClasses.primaryButton}`}>
            <>Cambiar Idioma</>
            <LanguageIcon className='h-4 w-4'/>
          </button>

          <button className={`flex md:hidden ${ButtonClasses.iconButton}`}>
            <LanguageIcon className='h-4 w-4'/>
          </button> */}

          <button className={`hidden md:flex ${ButtonClasses.primaryButton}`}>
            <>{aboutMeData.downloadCv}</>
            <ArrowDownTrayIcon className='h-4 w-4'/>
          </button>

          <button className={`flex md:hidden ${ButtonClasses.iconButton}`}>
            <ArrowDownTrayIcon className='h-4 w-4'/>
          </button>

        </div>

      </div>

    </div>

  )

}

function AboutMe () {

  return (

    <div>

      <h3 className={TextClasses.sectionTitle}>
        {titlesData.aboutMe}
      </h3>

      <p className='text-justify'>
        {aboutMeData.description}
      </p>
      
    </div>

  )

}

function EducationContainer () {

  return (

    <div className='flex flex-col gap-y-2'>

      <h3 className={TextClasses.sectionTitle}>{titlesData.education}</h3>

      <div className='flex flex-col gap-3'>

        {educationList.map((education, index) => <EducationElement key={index} {...education} />)}

      </div>

    </div>

  )

}

function EducationElement (props:EducationData) {

  return (

    <div className='rounded border flex flex p-3 items-center justify-between'>

      <div>

        <h4 className={`font-semibold`}>{props.titulo}</h4>

        <p>{props.career}</p>

        <span>{props.periodo}</span>

      </div>

      <img 
        src={props.logo} 
        alt='itver-logo' 
        className='w-20 bg-white rounded p-3'/>

    </div>

  )

}

function TechnologiesContainer () {

  return (

    <div className='flex flex-col gap-2'>

      <h3 className={TextClasses.sectionTitle}>{titlesData.technologies}</h3>

      <div className='flex flex-wrap gap-3'>

        {technologiesData.map((technology, index) => 

          <span 
            className={technology.icon ? ChipClasses.primaryChip : ChipClasses.whiteChip} 
            key={index}
          >
            {technology.name}
            {technology.icon}
          </span>)}

      </div>

    </div>

  )

}

function ExperienceContainer () {

  return (

    <div className='flex flex-col gap-y-2'>

      <h3 className={TextClasses.sectionTitle}>{titlesData.experience}</h3>

      <div className='flex flex-col gap-3'>

        {experienceData.map((experience, index) => <ExperienceElement key={index} {...experience} />)}

      </div>

    </div>

  )

}

function ExperienceElement (props:ExperienceData) {

  return (

    <div className='rounded border'>

      <div className='flex flex-col md:flex-row items-center md:justify-between text-center border-b p-3'>

        <h4 className='font-semibold mb-2 md:mb-0'>{props.titulo}</h4>

        <span className={ChipClasses.primaryChip}>{props.periodo}</span>

      </div>

      <div className='p-3'>

        <ul className='pl-4 list-disc'>

          {props.activities.map((activity, index) => <li key={index}>{activity}</li>)}
          
        </ul>

      </div>

    </div>

  )

}

function ContactMeContainer () {

  return (

    <div className='flex flex-col gap-y-2'>

      <h3 className={TextClasses.sectionTitle}>{titlesData.contactMe}</h3>

      <div className='flex flex-wrap gap-3'>

        {contactMeList.map((element, key) => <ContactMeElement {...element} key={key}/>)}

      </div>

    </div>

  )

}

function ContactMeElement (props:ContactMeData) {

  return (

    <a href={props.link} target='_blank' rel='noreferrer'>

      <button className={ButtonClasses.whiteButton}>

        {props.title}

        {props.icon}

      </button>

    </a>

  )

}

// Data & Types

// About Me
const aboutMeData = {
  subtitle:'Frontend / Mobile Developer',
  description:'Developer focused on practicality and efficiency for the user, with the implementation of user-friendly and functional interfaces. Working in web and mobile application development for the past 3 years.',
  downloadCv:'Download CV'
}

const titlesData = {
  aboutMe:'About Me',
  contactMe:'Contact Me',
  education:'Education',
  technologies:'Technologies',
  experience:'Experience'
}

// Technologies
type TechnologyData = {
  name: string;
  icon?: ReactNode;
}

const technologiesData:TechnologyData[] = [
  
  { name:'Frontend', icon:<GlobeAltIcon className='h-4 w-4'/> },
  { name:'HTML' },
  { name:'CSS' },
  { name:'SCSS' },
  { name:'JS' },
  { name:'TS' },
  { name:'React' },
  { name:'Next JS' },
  { name:'Redux' },
  { name:'Mui' },
  { name:'Tailwind CSS' },
  { name:'Angular' },
  { name:'Prime NG' },
  { name:'Rxng' },
  
  { name:'Backend', icon:<ServerStackIcon className='h-4 w-4'/> },
  { name:'Express JS' },
  { name:'Node JS' },
  
  { name:'Db', icon:<CircleStackIcon className='h-4 w-4'/> },
  { name:'PosgreSQL' },
  { name:'Mongo DB' },
  { name:'Firebase' },
  
  { name:'Mobile', icon:<DevicePhoneMobileIcon className='h-4 w-4'/> },
  { name:'React Native' },
  { name:'Java' },
  { name:'Kotlin' },

  { name:'Extras', icon:<PlusIcon className='h-4 w-4'/> },
  { name:'Figma' },



];

// Experience
type ExperienceData = {
  titulo: string;
  periodo: string;
  activities: string[];
};

const blauCorpExperience: ExperienceData = {
  titulo: "Blau Corp / Home Office / Frontend, Backend, Mobile Developer",
  periodo: "2021 - Actual",
  activities: [
    "Creation and maintenance of a web platform in React",
    "Generation of CSV files from the platform",
    "Generation of PDFs from the platform",
    "Development of a mobile application in React Native (Forms, Camera)",
    "Development of a mobile application in Kotlin (Forms, Camera, GPS, Notifications, Internal Database)",
    "Backend code maintenance",
    "Landing pages in NEXT JS with Zoho CMS",
  ],
};

const typsaExperience: ExperienceData = {
  titulo: "Typsa / Home Office / Frontend, Backend Developer",
  periodo: "2023 - 2024",
  activities: [
    "Web platform creation in React",
    "Keyboard shortcuts for table management",
    "Generation of graphs",
    "Exporting information in CSV format",
    "Creation of backend in Node.js",
    "Demonstrations with end clients",
    "Responsive design for mobile devices",
    "Manuals and documentation generation",
  ],
};
 
const continentalExperience: ExperienceData = {
  titulo: "Continental / Home Office / Frontend Developer",
  periodo: "2024 - Actual",
  activities: [
    "Angular Platform Creation",
    "Automation for folder creation from the platform on GDrive",
  ],
};

const experienceData:ExperienceData[] = [
  blauCorpExperience,
  typsaExperience,
  continentalExperience,
];

// Education
type EducationData = {
  titulo:string;
  periodo:string;
  career:string;
  logo:string;
};

const educationList:EducationData[] = [
  { 
    titulo:'Instituto Tecnológico de Veracruz', 
    periodo:'2018 - 2023', 
    career:'Computer Systems Engineering',
    logo:'/images/itver-logo.png'
  },
];

type ContactMeData = {
  title:string;
  link:string;
  icon:ReactNode;
}

const contactMeList:ContactMeData[] = [
  { 
    title:'LinkedIn', 
    link:'https://www.linkedin.com/in/jes%C3%BAs-andr%C3%A9-lizar%C3%A1n-blanco-7342681ab/',
    icon:<BriefcaseIcon className='h-4 w-4'/>
  },
  { 
    title:'GitHub', 
    link:'https://github.com/andrelizarandev',
    icon:<CodeBracketIcon className='h-4 w-4'/>
  },
  { 
    title:'Email', 
    link:'mailto:andrelizarandev@gmail.com',
    icon:<AtSymbolIcon className='h-4 w-4'/>
  },
  { 
    title:'Whatsapp', 
    link:'https://wa.me/2293460202',
    icon:<ChatBubbleLeftIcon className='h-4 w-4'/>
  },
]
