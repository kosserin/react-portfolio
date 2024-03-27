import flight from "../assets/projects/flight.png";
import football from "../assets/projects/football.png";
import audio from "../assets/projects/audio.png";
import canal from "../assets/projects/canal.png";
import deplace from "../assets/projects/deplace.png";

export const PROJECTS = [
  {
    title: "Flight company web application",
    description:
      "Final thesis on college, design, develop and deploy a web application that simulates work with a real database",
    imageSource: flight,
    technologies: ["React", "MongoDB", "JavaScript", "styled-components"],
    linkUrl: "https://magnificent-torte-3a57d9.netlify.app/",
  },
  {
    title: "Football school website",
    description: "Design, develop, deploy and maintain local business website.",
    imageSource: football,
    technologies: ["HTML", "SCSS", "JavaScript", "Figma", "SwiperJS"],
    linkUrl: "https://sfdespot.com/",
  },
  {
    title: "Monstercat Audio Player",
    description:
      "Part of a frontendpractice challenge. Develop one page with functional custom audio player. Audio player can start, stop, repeat, move to previous or next song, start a random song and increase or decrease a volume.",
    imageSource: audio,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/monstercat-audio-player/",
  },
  {
    title: "Canal Street Market",
    description:
      "Part of a frontendpractice challenge. Develop one page with multiple layouts.",
    imageSource: canal,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/canal-about/",
  },
  {
    title: "Deplace Maison",
    description:
      "Part of a frontendpractice challenge. Develop one page with loading animation on the start.",
    imageSource: deplace,
    technologies: ["JavaScript", "SCSS", "HTML"],
    linkUrl: "https://kosserin.github.io/deplace-maison/",
  },
];
