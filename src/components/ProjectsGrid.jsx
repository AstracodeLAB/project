import React from "react";
import painting from "../assets/painting.jpg";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto",
    image: painting,
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto",
    image: painting,
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto",
    image: painting,
  },

  // Aquí se van agregando más proyectos
];

const ProjectsGrid = () => {
  return (
    <div>
      {projects.map((projects, index) => (
        <div
          key={index}
          className="bg-black rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={projects.image}
            alt={projects.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-4 bg-black text-white font-sans rounded-b-lg">
            <h2 className="text-xl font-bold">{projects.title}</h2>
            <p className="mt-2">{projects.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
