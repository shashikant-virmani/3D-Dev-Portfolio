import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    eversana,
    hcode,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    noteTaker,
    timetableBuilder,
    portfolio,
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
      title: "UI Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tech Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
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
      title: "SDE Intern",
      company_name: "Eversana",
      icon: eversana,
      iconBg: "#383E56",
      date: "January 2023 - July 2023",
      points: [
        "Developing REST APIs for the Report Microservice Module in a Learning Management System using Spring Boot.",
        "Ensuring smooth frontend integration with a React-based interface for tracking employee progress.",
        "Assisting in debugging and improving backend functionality.",
        "Gaining hands-on experience with agile development processes and cross-functional collaboration.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Hcode Technologies",
      icon: hcode,
      iconBg: "#E6DEDD",
      date: "November 2023 - August 2024",
      points: [
        "Developing and maintaining responsive web applications using Angular for the banking domain.",
        "Implementing complex data management features with AG-Grid, ensuring efficient data handling.",
        "Collaborating with backend teams to integrate RESTful APIs seamlessly with frontend components.",
        "Delivering client requirements with high precision, focusing on performance and user experience.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Note Taker",
      description:
        "Web-based platform that allows users to create, update and delete notes with a title and content section, providing a convenient and efficient way for sharing text messages annonymously over internet.",
      tags: [
        {
          name: "jsp/servlet",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: noteTaker,
      source_code_link: "https://github.com/shashikant-virmani/NoteTaker_WebApp",
    },
    {
      name: "Time Table Builder",
      description:
        "Web app that enables users to add details of courses, teachers etc. and generate time table for different classes using drop down list of items which can be downloaded publicly by students in pdf format.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: timetableBuilder,
      source_code_link: "https://github.com/shashikant-virmani/Automated-Class-Time-Table-Generator",
    },
    {
      name: "Portfolio Website",
      description:
        "A responsive 3D Portfolio website which is made using Three.js to display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/shashikant-virmani/3D-Dev-Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };