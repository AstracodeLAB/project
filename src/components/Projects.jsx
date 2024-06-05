import React from "react";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <section id="projects" className="mx-30 my-15">
      <div className="absolute inset-6 z-0 h-4 bg-gradient-to-r from-lime-500 via-lime-200 to-white"></div>
      <h2 className="relative z-10 my-4 font-sans font-medium text-2xl">
        Proyectos
      </h2>
      <div>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
