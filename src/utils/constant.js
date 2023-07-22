import { v4 as uuidv4 } from 'uuid';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import { AiOutlineCheckSquare } from 'react-icons/ai';

import { BiMap } from 'react-icons/bi';

import gInterior from '../assets/images/gInterior.PNG';
// IMG
import JS from '../assets/images/Logo/JS.svg';
import HTML5 from '../assets/images/Logo/HTML5.svg';
import CSS3 from '../assets/images/Logo/CSS3.svg';
import ReactJS from '../assets/images/Logo/ReactJS.svg';
import bootstrap from '../assets/images/Logo/bootstrap.svg';
import github from '../assets/images/Logo/github.svg';
import m365 from '../assets/images/Logo/m365.svg';
import redux from '../assets/images/Logo/redux.svg';
import Router from '../assets/images/Logo/Router.svg';
import sass from '../assets/images/Logo/sass.svg';
import rest from '../assets/images/Logo/rest.png';
import styled from '../assets/images/Logo/styled.png';
import swiperJS from '../assets/images/Logo/swiperJS.PNG';
import typedJS from '../assets/images/Logo/typedJS.png';
import framerMotion from '../assets/images/Logo/framerMotion.PNG';
import mui from '../assets/images/Logo/materialUI.png';
import angular from '../assets/images/Logo/angular.svg';
import mongo from '../assets/images/Logo/mongo.png';
import sql from '../assets/images/Logo/sql.png';
import net from '../assets/images/Logo/net.png';

import corpCap from '../assets/images/HomeProject/corpCap.PNG';
import githubCap from '../assets/images/HomeProject/githubCap.PNG';
import interiorCap from '../assets/images/HomeProject/interiorCap.PNG';

export const projects = [
  {
    id: uuidv4(),
    name: 'G - Interior Store',
    desc: 'A website is build base on ReactJS and with minimalist style for interior company ',
    img: gInterior,
  },
  {
    id: uuidv4(),
    name: 'Github User Chart Check',
    desc: 'Using this app you can have a overview about specific Github user through lot of chart',
    img: gInterior,
  },
  {
    id: uuidv4(),
    name: 'lorem',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sequi',
    img: gInterior,
  },

  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sequi. ',
    img: gInterior,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Nguyen Thanh Nhan',
    title: 'Developer',
    org: 'Freelance',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, natus. In, doloremque! Maxime perspiciatis iusto quas excepturi vel id est.',
  },
  {
    id: 2,
    name: 'Nguyen Thanh Nhan',
    title: 'Developer',
    org: 'Freelance',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, natus. In, doloremque! Maxime perspiciatis iusto quas excepturi vel id est.',
  },
  {
    id: 3,
    name: 'Nguyen Thanh Nhan',
    title: 'Developer',
    org: 'Freelance',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, natus. In, doloremque! Maxime perspiciatis iusto quas excepturi vel id est.',
  },
];

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'project',
    url: '/project',
  },
  {
    id: 4,
    text: 'contact',
    url: '/contact',
  },
];

// Footer
export const media = [
  {
    id: 1,
    text: 'fb',
    url: 'https://www.facebook.com/thanhnhan99s/',
  },
  {
    id: 2,
    text: 'git',
    url: 'https://github.com/ngtn0502',
  },
];

export const socials = [
  {
    id: 1,
    text: 'fb',
    url: 'https://www.facebook.com/thanhnhan99s/',
    image: <FaFacebookSquare />,
  },
  {
    id: 2,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaGithubSquare />,
  },
  {
    id: 3,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaTwitterSquare />,
  },
  {
    id: 4,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaLinkedin />,
  },
];

export const contacts = [
  {
    id: 1,
    text: '+0948163138',
    image: <BsPhone />,
  },
  {
    id: 2,
    text: 'ngthn0502@gmail.com',
    image: <IoMailOutline />,
  },
  {
    id: 3,
    text: '10 District, HCM City',
    image: <BiMap />,
  },
];

// In About
export const educationalList = [
  {
    id: 1,
    date: '2017-2021',
    title: 'Ho Chi Minh City University of Technology',
    subTitlt: 'Civil Engineering',
  },
  {
    id: 2,
    date: '2019',
    title: 'TOEIC (800/990)',
    subTitlt: 'IIG Vietnam',
    sub: 'Certificate of reading and listening English proficiency',
  },
  {
    id: 3,
    date: 'April 2021 - Present',
    title: 'Online Web Development Course',
    subTitlt:
      '•	The Complete JavaScript Course – Jonas Schmedtmann (The Udemy Platform) ',
    subTitlt2:
      '•	React: The Complete Guide – Maximilian Schwarzmuller (The Udemy Platform)',
    subTitlt3:
      '•	JavaScript: Understanding the Weird Parts – Anthony Alicea (The Udemy Platform)',
    subTitlt4:
      '•	React Tutorial and Projects Course - John Smilga (The Udemy Platform) ',
    subTitlt5:
      '•	JavaScript Algorithms and Data Structures Masterclass - Colt Steele (The Udemy Platform) ',
  },
];

export const worksList = [
  {
    id: 1,
    date: '2021-present',
    title: 'FPT Software',
    subTitlt: 'Software Engineer',
  },
];

export const advantages = [
  {
    id: 1,
    text: 'Great at verbal and written communication skills in English',
    svg: <AiOutlineCheckSquare />,
  },
  {
    id: 2,
    text: 'Strong self learning and problem solving skill',
    svg: <AiOutlineCheckSquare />,
  },
  {
    id: 2,
    text: 'Able to work under pressure and willing to work overtime',
    svg: <AiOutlineCheckSquare />,
  },
  {
    id: 2,
    text: 'Wrok effectively both in a team enviroment and alone',
    svg: <AiOutlineCheckSquare />,
  },
];

// For SkillGrid in About
export const skillGrids = [
  {
    id: 1,
    text: 'Angular',
    svg: <img src={angular} alt="" />,
  },
  {
    id: 1,
    text: '.NET',
    svg: <img src={net} alt="" />,
  },
  {
    id: 1,
    text: 'SQL',
    svg: <img src={sql} alt="" />,
  },
  {
    id: 1,
    text: 'Mongo',
    svg: <img src={mongo} alt="" />,
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />,
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />,
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />,
  },
  {
    id: 1,
    text: 'BootStrap4',
    svg: <img src={bootstrap} alt="" />,
  },
  {
    id: 1,
    text: 'GitHub',
    svg: <img src={github} alt="" />,
  },

  {
    id: 1,
    text: 'REST API',
    svg: <img src={rest} alt="" />,
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />,
  },
  {
    id: 1,
    text: 'Redux',
    svg: <img src={redux} alt="" />,
  },
  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />,
  },
  {
    id: 1,
    text: 'M365',
    svg: <img src={m365} alt="" />,
  },
  {
    id: 1,
    text: 'SASS',
    svg: <img src={sass} alt="" />,
  },
];

// For scrolling animation
export const footerVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// For HomeProject
export const homeProjectList = [
  {
    id: 1,
    text: 'Corp Landing Page',
    img: corpCap,
  },
  {
    id: 1,
    text: 'E-Commerce Interior Page',
    img: interiorCap,
  },
];

export const projectSkillGridsCinema = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />,
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />,
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />,
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />,
  },
  {
    id: 1,
    text: 'Redux/Redux Thunk',
    svg: <img src={redux} alt="" />,
  },
  {
    id: 1,
    text: 'REST API',
    svg: <img src={rest} alt="" />,
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />,
  },

  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />,
  },
];
// Skill grids for project

export const projectSkillGrids = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />,
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />,
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />,
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />,
  },

  {
    id: 1,
    text: 'REST API',
    svg: <img src={rest} alt="" />,
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />,
  },

  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />,
  },
];
// Skill grids for project2

export const projectSkillGrids2 = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />,
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />,
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />,
  },

  {
    id: 1,
    text: 'BootStrap4',
    svg: <img src={bootstrap} alt="" />,
  },
];

// Skill grids for project3

export const projectSkillGrids3 = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />,
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />,
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />,
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />,
  },

  {
    id: 1,
    text: 'GitHub',
    svg: <img src={github} alt="" />,
  },

  {
    id: 1,
    text: 'REST API',
    svg: <img src={rest} alt="" />,
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />,
  },

  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />,
  },
];

// Skill grids for project4

export const projectSkillGrids4 = [
  {
    id: 1,
    text: 'HTML5',
    svg: <img src={HTML5} alt="" />,
  },
  {
    id: 1,
    text: 'CSS3',
    svg: <img src={CSS3} alt="" />,
  },
  {
    id: 1,
    text: 'Javascript',
    svg: <img src={JS} alt="" />,
  },
  {
    id: 1,
    text: 'React',
    svg: <img src={ReactJS} alt="" />,
  },
  {
    id: 1,
    text: 'React Router',
    svg: <img src={Router} alt="" />,
  },

  {
    id: 1,
    text: 'Styled Component',
    svg: <img src={styled} alt="" />,
  },
];
// Framer UI grids for project4

export const projectSkillGrids5 = [
  {
    id: 1,
    text: 'Framer Motion',
    svg: <img src={framerMotion} alt="" />,
  },
  {
    id: 1,
    text: 'Swiper JS',
    svg: <img src={swiperJS} alt="" />,
  },
  {
    id: 1,
    text: 'Typed JS',
    svg: <img src={typedJS} alt="" />,
  },
];
// UI Lib grids for cinema

export const projectSkillGridsLibUICinema = [
  {
    id: 1,
    text: 'Material UI',
    svg: <img src={mui} alt="" />,
  },
  {
    id: 1,
    text: 'Framer Motion',
    svg: <img src={framerMotion} alt="" />,
  },
  {
    id: 1,
    text: 'Swiper JS',
    svg: <img src={swiperJS} alt="" />,
  },
];
