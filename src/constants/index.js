import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

// ----------------------------------------------------------------------

const services = [
  {
    title: 'Mechanical Design Engineer',
    icon: backend,
  },
  {
    title: 'Industrial & Production Engineer',
    icon: frontend,
  },
  {
    title: 'Digital Manufacturing & Automation',
    icon: prototyping,
  },
  {
    title: '3D Printing & Product Development',
    icon: ux,
  },
];

// ----------------------------------------------------------------------

const technologies = [
  { name: 'SolidWorks', icon: reactjs },
  { name: 'AutoCAD', icon: html },
  { name: 'Python', icon: javascript },
  { name: 'Power BI', icon: tailwind },
  { name: 'PowerApps', icon: redux },
  { name: 'Power Automate', icon: nodejs },
  { name: 'MATLAB', icon: typescript },
  { name: 'Minitab', icon: graphql },
  { name: 'Microsoft Excel', icon: postgresql },
  { name: 'Word & PowerPoint', icon: git },
];

// ----------------------------------------------------------------------

const experiences = [
  {
    title: 'Industrial Engineering Intern',
    company_name: 'Legrand Egypt',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jul 2024 - Aug 2024',
  },
  {
    title: 'Graduation Project – Industrial Engineering',
    company_name: 'Danone Egypt',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Oct 2024 - Jun 2025',
  },
  {
    title: 'Robotics Instructor',
    company_name: 'Happy Makers Academy',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jun 2023 - Oct 2023',
  },
  {
    title: '3D Printing Service Advisor',
    company_name: 'Startup Project',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2023 - Jan 2024',
  },
  {
    title: 'Co-Founder',
    company_name: 'AB Electronics Store',
    icon: docker,
    iconBg: '#333333',
    date: 'Mar 2022 - Jan 2025',
  },
];

// ----------------------------------------------------------------------

const projects = [
  {
    id: 'project-1',
    name: 'Production Scheduling Optimization Model',
    description:
      'Developed an optimized scheduling model for FMCG dairy production lines to minimize changeover time, cleaning cycles, and align with demand and product shelf life.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'Operations Research', color: 'green-text-gradient' },
      { name: 'Excel', color: 'pink-text-gradient' },
    ],
    image: math,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'Digital Transformation in Manufacturing',
    description:
      'Automated injection audit workflows at Legrand using PowerApps and Power Automate, integrating real-time data with Power BI dashboards — reducing process time by 36%.',
    tags: [
      { name: 'PowerApps', color: 'blue-text-gradient' },
      { name: 'PowerAutomate', color: 'green-text-gradient' },
      { name: 'PowerBI', color: 'pink-text-gradient' },
    ],
    image: leaderboard,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-3',
    name: '3D Printing & Product Design',
    description:
      'Designed and manufactured customized tools and models for improved production efficiency using SolidWorks and 3D printing technologies.',
    tags: [
      { name: 'SolidWorks', color: 'blue-text-gradient' },
      { name: 'AdditiveManufacturing', color: 'green-text-gradient' },
    ],
    image: nyeusi,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'Lean Manufacturing Implementation',
    description:
      'Applied Lean tools such as 5S, SMED, and TPM pillars to improve efficiency, reduce downtime, and increase OEE from 64% to 71%.',
    tags: [
      { name: 'Lean', color: 'blue-text-gradient' },
      { name: 'TPM', color: 'green-text-gradient' },
      { name: 'OEE', color: 'pink-text-gradient' },
    ],
    image: movie,
    repo: '#',
    demo: '#',
  },
];

// ----------------------------------------------------------------------

export { services, technologies, experiences, projects };
