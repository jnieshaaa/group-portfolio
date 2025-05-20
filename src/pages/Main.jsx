import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/ProjectList";
import techItems from "../data/TechStackItems";
import { TechStack } from "../components/effects/TechStackCard";
import featuredProjects from "../data/featuredProjects";
import { StickyScroll } from "../components/effects/StickyScroll";
import FeaturedProjectsSection from "./section/FeaturedProjectsSection";

function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-indigoDeep to-lavender">
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center p-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-lavender mb-4 drop-shadow">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg md:text-xl text-slate-200 max-w-xl">
          This is a sample project using React, Vite, and Tailwind CSS — scroll
          down to explore my work.
        </p>
      </section>

      {/* Projects Section */}
      <FeaturedProjectsSection featuredProjects={featuredProjects} />

      {/* Tech Stack Section */}
      <section
        id="techstack"
        className="py-12 mt-12 bg-white/10 backdrop-blur-md"
      >
        <div className="mb-8 px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-midnight drop-shadow-sm relative inline-block">
            Tech Stack
            <span className="absolute -bottom-1 left-0 w-[50%] h-1 bg-gradient-to-r from-lavender to-indigoDeep rounded-full"></span>
          </h2>
        </div>

        <TechStack items={techItems} />
      </section>
    </div>
  );
}

export default Main;
