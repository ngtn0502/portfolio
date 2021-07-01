import { v4 as uuidv4 } from 'uuid';
import gInterior from '../assets/images/gInterior.PNG';

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
