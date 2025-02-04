import flight from "../assets/projects/flight.jpg";
import football from "../assets/projects/football.jpg";
import audio from "../assets/projects/audio.jpg";
import canal from "../assets/projects/canal.jpg";
import deplace from "../assets/projects/deplace.jpg";

export const PROJECTS = [
  {
    title: "Flight company web application",
    description:
      "Final thesis on college, design, develop and deploy a web application that simulates work with a real database",
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
    title: "Monstercat Audio Player",
    description:
      "Develop and deployed one page web application with fully functional custom audio player. Audio player can start a song, stop, repeat, move to previous or next song, start a random song and increase or decrease a volume.",
    imageSource: audio,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/monstercat-audio-player/",
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
