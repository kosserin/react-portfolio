import flight from "../assets/projects/flight.jpg";
import football from "../assets/projects/football.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import oldPortfolio from "../assets/projects/old-portfolio.jpg";
import audio from "../assets/projects/audio.jpg";
import canal from "../assets/projects/canal.jpg";
import deplace from "../assets/projects/deplace.jpg";
import material from "../assets/projects/material.jpg";

export const PROJECTS = [
  {
    title: "Flight company web application",
    description:
      "Design, develop and deploy a web application that works with a real database. This web app simulates real-world booking for flights where user can search for flights between cities, see details, check if there are available seats and make a reservation.",
    imageSource: flight,
    technologies: ["React", "MongoDB", "JavaScript", "styled-components"],
    linkUrl: "https://github.com/kosserin/flight-company",
  },
  {
    title: "Football school website",
    description:
      "Design, develop, deploy and maintain a website for local business.",
    imageSource: football,
    technologies: ["HTML", "SCSS", "JavaScript", "Figma", "SwiperJS"],
    linkUrl: "https://sfdespot.com/",
  },
  {
    title: "React portfolio",
    description: "Designed, built, deployed and maintained my portfolio.",
    imageSource: portfolio,
    technologies: ["React", "styled-components", "Figma"],
    linkUrl: "https://github.com/kosserin/react-portfolio",
  },
  {
    title: "Real-Time CMS with WebSockets",
    description:
      "Build a real-time CMS with WebSockets, enabling role-based CRUD operations. Employees request leave and track balances, Managers approve/reject, and Owners manage employees, projects, and assignments. Live updates ensure seamless collaboration.",
    imageSource: material,
    technologies: ["Angular", "Material", "SCSS"],
    linkUrl: "https://github.com/kosserin/material-angular",
  },
  {
    title: "Monstercat Audio Player",
    description:
      "Develop and deployed one page web application with fully functional custom audio player. Audio player can start a song, stop, repeat, move to previous or next song, start a random song and increase or decrease a volume.",
    imageSource: audio,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/monstercat-audio-player/",
  },
  {
    title: "Old portfolio",
    description:
      "Designed, built and deployed fully responsive one page web application with loading animation on the start.",
    imageSource: oldPortfolio,
    technologies: ["React", "styled-components", "Figma"],
    linkUrl: "https://andrija-kostic-old-portfolio.netlify.app/",
  },
  {
    title: "Canal Street Market",
    description:
      "Develop and deploy fully responsive one page web application with multiple layouts.",
    imageSource: canal,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/canal-about/",
  },
  {
    title: "Deplace Maison",
    description:
      "Develop and deploy fully responsive one page web application with loading animation on the start.",
    imageSource: deplace,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/deplace-maison/",
  },
];
