'use client';

// Modules
import React, { ReactNode } from 'react';

// Classes
import ChipClasses from './classes/chip.class';
import TextClasses from './classes/text.class';
import ButtonClasses from './classes/button.class';
import ColorsClasses from './classes/colors.class';

// Hooks
import useAnalytics from './analytics/analytics.index';

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
  PlusIcon,
  Cog6ToothIcon
} from '@heroicons/react/16/solid';
import ImgVisualizer from './components/img-visualizer';

export default function page () {

  return (

    <>

      <TopBar/>

      <div className={`w-full min-h-screen flex flex-col font-sans ${ColorsClasses.bgColor} text-white pt-20`}>
        
        <div className={`h-full flex flex-col gap-y-4 p-4 ${globalPaddingX}`}>

          <AboutMe/>

          <ContactMeContainer/>

          <EducationContainer/>

          <TechnologiesContainer/>

          <MyProjectsContainer/>

          <ExperienceContainer/>

        </div>

      </div>

      <Footer/>

    </>

  )

}

const globalPaddingX = 'md:px-20 lg:px-40 xl:px-80';

function TopBar () {

  const { downloadCv } = useAnalytics();

  return (

    <div className={`z-10 h-20 text-white fixed w-full flex flex-col justify-center ${ColorsClasses.bgColor} ${ColorsClasses.borderBottomGrayColor}`}>

      <div className={`flex flex-row justify-between items-center px-4 ${globalPaddingX}`}>

        <div className='flex flex-row gap-x-4 items-center'>

          <div className={`${ColorsClasses.lighterBgColor} w-10 h-10 rounded-full flex items-center justify-center`}>

            <span className='font-medium text-white'>AL</span>

          </div>

          <div>

            <h1 className={TextClasses.sectionTitle}>André Lizarán</h1>

            <h2 className='font-medium text-sm'>{aboutMeData.subtitle}</h2>

          </div>

        </div>

        <div className='flex gap-x-3'>

          <a 
            download='cv-andre-lizaran.pdf'
            href={aboutMeData.downloadCvLink} 
            target='_blank' 
            rel='noreferrer' 
            className='hidden md:flex'
            onClick={downloadCv}
          >
            <button className={ButtonClasses.primaryButton}>
              {aboutMeData.downloadCv}
              <ArrowDownTrayIcon className='h-4 w-4'/>
            </button>
          </a>

          <a 
            download='cv-andre-lizaran.pdf'
            href={aboutMeData.downloadCvLink} 
            target='_blank'
            rel='noreferrer' 
            className='flex md:hidden'
            onClick={downloadCv}
          >
            <button className={ButtonClasses.iconButton}>
              <ArrowDownTrayIcon className='h-6 w-6'/>
            </button>
          </a>

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
        {aboutMeData.descriptionInEnglish}
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

    <div className={`rounded border flex-col md:flex-row flex p-3 items-center justify-between text-white ${ColorsClasses.borderGrayColor}`}>

      <div className='text-center md:text-start pb-2 md:pb-0'>

        <h4 className={`font-semibold`}>{props.titulo}</h4>

        <p>{props.career}</p>

        <span className='text-sm'>{props.periodo}</span>

      </div>

      <img 
        src={props.logo} 
        alt='itver-logo' 
        className={`w-20 rounded p-3 ${ColorsClasses.lighterBgColor}`}/>

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

    <div className={`rounded ${ColorsClasses.borderGrayColor}`}>

      <div className={`p-3 flex flex-col md:flex-row items-center md:justify-between text-center text-white ${ColorsClasses.borderBottomGrayColor}`}>

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

  const { openLinkedin, openGithub, openEmail, openWhatsapp } = useAnalytics();

  const contactMeList:ContactMeData[] = [
    { 
      title:'LinkedIn', 
      link:'https://www.linkedin.com/in/jes%C3%BAs-andr%C3%A9-lizar%C3%A1n-blanco-7342681ab/',
      icon:<BriefcaseIcon className='h-4 w-4'/>,
      action:openLinkedin
    },
    { 
      title:'GitHub', 
      link:'https://github.com/andrelizarandev',
      icon:<CodeBracketIcon className='h-4 w-4'/>,
      action:openGithub
    },
    { 
      title:'Email', 
      link:'mailto:andrelizarandev@gmail.com',
      icon:<AtSymbolIcon className='h-4 w-4'/>,
      action:openEmail
    },
    { 
      title:'Whatsapp', 
      link:'https://wa.me/2293460202',
      icon:<ChatBubbleLeftIcon className='h-4 w-4'/>,
      action:openWhatsapp
    },
  ];

  return (

    <div className='flex flex-col gap-3'>

      <h3 className={TextClasses.sectionTitle}>{titlesData.contactMe}</h3>

      <div className='flex flex-wrap gap-3'>

        {contactMeList.map((element, key) => <ContactMeElement {...element} key={key}/>)}

      </div>

    </div>

  )

}

function ContactMeElement (props:ContactMeData) {

  return (

    <a href={props.link} target='_blank' rel='noreferrer' onClick={props.action}>

      <button className={ButtonClasses.primaryButton}>

        {props.title}

        {props.icon}

      </button>

    </a>

  )

}

function MyProjectsContainer () {

  return (

    <div className='flex gap-3 flex-col'>

      <h3 className={TextClasses.sectionTitle}>My Projects</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

        {projectsData.map((row, key) => (

          <div key={key} className={`rounded text-center ${ColorsClasses.borderGrayColor}`}>

            <div className={`p-2 ${ColorsClasses.borderBottomGrayColor} flex flex-col items-center gap-3`}>

              <h4>{row.title}</h4>

            </div>

            <div className='flex flex-col items-center p-3 gap-3'>

              <ImgVisualizer imgs={row.imgs} isMobile={row.isMobile}/>

              <p>{row.description}</p>

              <div className='flex gap-3'>

                {row.technologies.map((tech, index) => <span key={index} className={ChipClasses.whiteChip}>{tech}</span>)}

              </div>

              {row.link && <a href={row.link} target='_blank'>
                <button className={ButtonClasses.primaryButton}>View Project</button>
              </a>}

            </div>
            
          </div>

        ))}

      </div>

    </div>

  )

}

function Footer () {

  return (

    <div className={`${ColorsClasses.borderTopGrayColor} ${ColorsClasses.bgColor} py-4 text-white`}>

      <p className='text-center'>André Lizarán - 2024</p>

    </div>

  )

}

// Data & Types

// About Me
const aboutMeData = {
  subtitle:'Fullstack Developer',
  description:`
    Soy en ingeniero en Sistemas Computacionales, graduado del Tecnológico de Veracruz.
    Tengo 23 años y tengo 4 años de experiencia como programador fullstack, 
    Me he dedico a crear soluciones completas, desde áreas como frontend, backend, mobile, bases de datos, 
    despliegue, pruebas, documentación y atención al cliente. 
    Apasionado por la tecnología, disfruto de los videojuegos, el voleibol, programar y salir con amigos.
  `,
  descriptionInEnglish:`
    I am a Computer Systems Engineer, graduated from the Technological Institute of Veracruz.
    I am 23 years old with 4 years of experience as a fullstack programmer,
    I've dedicated myself to creating complete solutions, from areas such as frontend, backend, mobile, databases,
    deployment, testing, documentation and customer service.
    Passionate about technology, I enjoy video games, volleyball, programming and going out with friends.
  `,
  downloadCv:'Download CV',
  downloadCvLink:'/docs/cv-andre-lizaran.pdf'
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
  { name:'Angular' },
  { name:'Rxng' },
  { name:'React' },
  { name:'Next JS' },
  { name:'Astro' },
  { name:'Redux' },
  { name:'MUI' },
  { name:'Tailwind CSS' },
  { name:'Shadcn UI' },
  { name:'Prime NG' },
  
  { name:'Backend', icon:<ServerStackIcon className='h-4 w-4'/> },
  { name:'Express JS' },
  { name:'Node JS' },
  
  { name:'Db', icon:<CircleStackIcon className='h-4 w-4'/> },
  { name:'PosgreSQL' },
  { name:'Mongo DB' },
  { name:'Supabase' },
  { name:'Firebase' },
  
  { name:'Mobile', icon:<DevicePhoneMobileIcon className='h-4 w-4'/> },
  { name:'React Native' },
  { name:'Flutter' },
  { name:'Java' },
  { name:'Kotlin' },

  { name:'Testing', icon:<Cog6ToothIcon className='h-4 w-4'/> },
  { name:'Vitest' },
  { name:'Testing-library/react' },

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
  periodo: "2021 - Current Job",
  activities: [
    "Creation and maintenance of a web platform in React",
    "Generation of CSV files from the platform",
    "Generation of PDFs from the platform",
    "Development of a mobile application in React Native (Forms, Camera)",
    "Development of a mobile application in Kotlin (Forms, Camera, GPS, Notifications, Internal Database)",
    "Backend code maintenance",
    "Landing pages in NEXT JS with Zoho CMS",
    'Deployment of applications Android apps',
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
  periodo: "2023 - 2024",
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

// Projects
type ProjectData = {
  title:string;
  description:string;
  link?:string;
  imgs:string[];
  technologies:string[];
  isMobile?:boolean;
}

const projectsData:ProjectData[] = [
  {
    title:'Nanoderma landing page',
    description:'Landing page for my dad\'s job',
    link:'https://mellifluous-brigadeiros-475196.netlify.app',
    imgs:[
      '/images/projects/nanoderma/img1.jpeg',
      '/images/projects/nanoderma/img2.jpeg',
      '/images/projects/nanoderma/img3.jpeg',
    ],
    technologies:['Astro', 'Tailwind CSS', 'Supabase', 'React ']
  },
  {
    title:'Mi Energia MX landing page (Work in progress)',
    description:'Web platform for energy management',
    link:'https://elegant-starlight-2658f9.netlify.app/',
    imgs:[
      '/images/projects/mi-energia/img1.jpeg',
      '/images/projects/mi-energia/img2.jpeg',
      '/images/projects/mi-energia/img3.jpeg',
    ],
    technologies:['Astro', 'Tailwind CSS', 'React']
  },
  {
    title:'Event manager for Sodimac',
    description:'Web platform for event management',
    imgs:[
      '/images/projects/sodimac/img1.jpeg',
      '/images/projects/sodimac/img2.jpeg',
      '/images/projects/sodimac/img3.jpeg'
    ],
    technologies:['React', 'MUI', 'Express', 'PostgreSQL']
  },
  {
    title:'Sporty Volleyball App',
    description:'Java application for volleyball management',
    imgs:[
      '/images/projects/volleyball-sporty/img1.jpeg',
      '/images/projects/volleyball-sporty/img2.jpeg',
      '/images/projects/volleyball-sporty/img3.jpeg'
    ],
    technologies:['Java', 'Kotlin', 'Lombok'],
    isMobile:true
  }
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
  action:() => void;
}
