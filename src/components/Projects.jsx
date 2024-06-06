import React from "react";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <section id="projects" className="mx-30 my-25 md:mx-100 md:my-52">
      <div className="relative z-0 md:w-3/4 ">
        <h2 className="relative z-10 bg-gradient-to-r from-accent via-lime-200 to-white font-sans font-medium text-xl px-2 rounded md:inline-block md:text-2xl">
          Proyectos
        </h2>
      </div>
      <div className="my-30">
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
