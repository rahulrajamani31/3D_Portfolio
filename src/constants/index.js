import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  c,
  dart,
  jira,
  firebase,
  qt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "QT",
    icon: qt,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "JIRA",
    icon: jira,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "SREC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Mar 2021",
    points: [
      "I developed a full-stack mobile application using Flutter, Node.js, and MongoDB.",
      "The application, called FarmBook, is a hybrid mobile solution designed specifically to assist farmers in resolving their queries through discussions among themselves.",
      "FarmBook goes beyond just facilitating discussions. It also serves as a valuable resource for farmers by providing them with comprehensive cultivation details. This information plays a crucial role in maintaining stable crop rates and optimizing farming practices.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "GE Healthcare",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Oct 2021",
    points: [
      "Developing and maintaining web applications using HTML,CSS and Javascript and other related technologies.",
      "This was also a consultancy project where my team member Lipika, and I worked diligently throughout.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "QT Software Developer",
    company_name: "L&T",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2022",
    points: [
      "We developed an X-Ray Image viewer and editor software using Qt, Vtk, and CMake",
      "This was a consultancy project where my team member, Bharath, and I worked diligently throughout.",
      "The software is designed to allow doctors to view X-ray images of patients in a 3D format. ",
      "Additionally, doctors can manually adjust contrast, visibility, and other settings based on their specific requirements.",
    ],
  },
  {
    title: "Designer and Wordpress Developer",
    company_name: "Bollygrad Studioz",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Bollygrad Studioz is an Video streaming company with an subscriber count of around 8 million",
      "Iam a part of Designing new layout that are suitable for the website",
      "Also Developing the layouts in the wordpress with an responsive features",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am currently learning to develop a 3D website that focuses on proper lighting positioning, 3D rendering of images, and setting up angles effectively.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I have recently completed an internship that provided me with invaluable insights and  gained a deep understanding of how research plays a pivotal role in product development.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I am currently immersing myself in the concepts of data structures, with a particular focus on graphs and dynamic programming.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Library Management",
    description:
      "Web-based platform that allows users to search book based on different categories such as fiction,history,romance etc and allow them to borrow the books from the library ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rahulrajamani31/LibraryManagement",
  },
  {
    name: "MedLife Pro",
    description:
      "MedLife Pro is an B2C website where the patients can book an personal appoinments and check for the service availablity atc as per their needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rahulrajamani31/MedLifeProWeb",
  },
  {
    name: "FarmBook",
    description:
      "The application, called FarmBook, is a hybrid mobile solution designed specifically to assist farmers in resolving their queries through discussions among themselves.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rahulrajamani31/Farm_book",
  },
];

export { services, technologies, experiences, testimonials, projects };
