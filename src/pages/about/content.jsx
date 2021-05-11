import mobile from "./res/mobile_app.png";
import web from "./res/web_design.jpg";
import api from "./res/api_design.png";
import machine from "./res/machine_learning.jpeg";

import gallery from "./res/project_gallery.png";
import aspect from "./res/aspect_extraction.png";
import backend from "./res/gallery_backend.png";
import parking from "./res/garage_database.png";
import smash from "./res/smash_bros.png";
import compiler from "./res/wasm_compiler.png";
import search from "./res/smantic_search.png";

export const skills = [
  {
    title: "Mobile Application",
    text:
      "Steve Jobs changed world with the first iPhone. Mobile developers changed the iPhone. I value the efficiency and the simplicity of modern mobile applications, and I enjoy the process of developing one.",
    image: mobile,
  },
  {
    title: "Web Design",
    text:
      "Websites are the first destination of internet users. Although mobile applications are growing faster, one should never underestimate the influence of a thoroughly designed website. HTML 5 provides more possibilities than ever.",
    image: web,
  },
  {
    title: "API Development",
    text:
      "A successful software always have a fast and robust backend. In backend development, I value safer, faster, and more scalable solutions. I also frequently expose myself with cutting edge solutions like new languages and databases.",
    image: api,
  },
  {
    title: "Machine Learning",
    text:
      "Artifical intellegence is the future, and machine learning might be the closest approach. I love challenging myself with new concepts. Doing research at UCSD, I am exploring more possibilities with Natural Language Processing.",
    image: machine,
  },
];

export const projects = [
  {
    title: "Unsupervised Aspect Extraction",
    year: "2021",
    type: "MACHINE LEARNING",
    text: "",
    image: aspect,
    skills: ["NLP", "Neural Network", "Python", "Pytorch", "TensorFlow"],
    link: "https://github.com/SkyZhangT/Unsupervised-Aspect-Extraction",
  },
  {
    title: "Personal Gallery",
    year: "2021",
    type: "WEBSITE",
    text: "",
    image: gallery,
    skills: ["React", "Material-ui", "Javascript", "REST API"],
    link: "https://github.com/SkyZhangT/SkyZhangT.github.io",
  },
  {
    title: "Gallery Server",
    year: "2021",
    type: "DATABASE & API SERVICE",
    text: "",
    image: backend,
    skills: ["GoLang", "MongoDB", "Blob Storage", "REST API", "HTTP"],
    link: "https://github.com/SkyZhangT/github.io-backend",
  },
  {
    title: "WASM Compiler",
    year: "2021",
    type: "PYTHON COMPILER",
    text: "",
    image: compiler,
    skills: ["Python", "Typescript", "wasm", "Language Compiler"],
    link: "https://github.com/ucsd-cse231-w21/chocopy-wasm-compiler",
  },
  {
    title: "Semantic Search",
    year: "2020",
    type: "ANDROID APPLICATION",
    text: "",
    image: search,
    skills: ["Java", "SQLite", "Elastic Search", "HMT-1", "Design Patterns"],
    link: "",
  },
  {
    title: "Smash Bros",
    year: "2018",
    type: "GAME",
    text: "",
    image: smash,
    skills: ["C#", "MonoGame", "Design Patterns"],
    link: "https://github.com/SkyZhangT/Smash-Bros",
  },
  {
    title: "Parking Space Database",
    year: "2018",
    type: "DATABASE SYSTEMS",
    text: "",
    image: parking,
    skills: ["mySQL", "PHP"],
    link: "https://github.com/SkyZhangT/Garage-Database-System-Project",
  },
];
