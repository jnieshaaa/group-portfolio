// src/data/techStackItems.js

import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiPython,
  SiC,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

import { RiJavaFill } from "react-icons/ri";

const techItems = [
  // Frontend
  {
    title: "HTML",
    description: "Standard markup language for creating web pages.",
    icon: SiHtml5,
  },
  {
    title: "CSS",
    description: "Style sheet language used for designing web pages.",
    icon: SiCss3,
  },
  {
    title: "JavaScript",
    description: "Programming language for interactive web apps.",
    icon: SiJavascript,
  },
  {
    title: "React",
    description: "Library for building component-based UIs.",
    icon: SiReact,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for styling interfaces.",
    icon: SiTailwindcss,
  },

  // Backend
  {
    title: "Node.js",
    description: "JavaScript runtime for building backend services.",
    icon: SiNodedotjs,
  },
  {
    title: "PHP",
    description: "Server-side scripting language for web development.",
    icon: SiPhp,
  },
  {
    title: "Java",
    description:
      "Object-oriented programming language used in many enterprise applications.",
    icon: RiJavaFill,
  },
  {
    title: "Python",
    description: "High-level language known for simplicity and versatility.",
    icon: SiPython,
  },

  // Systems
  {
    title: "C",
    description: "Powerful low-level programming language.",
    icon: SiC,
  },
  {
    title: "C#",
    description: "Modern object-oriented language developed by Microsoft.",
    icon: TbBrandCSharp,
  },

  // Databases
  {
    title: "MySQL",
    description: "Popular open-source relational database system.",
    icon: SiMysql,
  },
  {
    title: "MongoDB",
    description: "NoSQL document-based database system.",
    icon: SiMongodb,
  },
];

export default techItems;
