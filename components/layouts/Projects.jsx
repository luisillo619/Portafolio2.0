import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "PokeAPI",
    img: "",
    description:
      "Inspirado en el famoso programa Pokémon, desarrollé un Pokedex el cual permite ver, crear, modificar, filtrar y ordenar Pokémons.",
  },
  {
    name: "Netflix Replica",
    img: "",
    description:
      "Creacion de replica de netflix con la mayoria de funcionalidad de la aplicacion real. Integracion de parasera de pago, sistema de plan de suscripcion y sistema de registro de ususarios",
  },
];

export const Projects = () => {
  return (
    <div className="w-full h-full border flex flex-col ">
      <h1 className="text-center uppercase tracking-[10px] md:text-2xl md:tracking-[20px] h-[6%]">
        Proyectos
      </h1>
      <div className="w-full h-[94%] flex snap-x snap-mandatory overflow-x-auto scrollbar md:scrollbar-thumb-[#F7AB0A]/80 border ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 snap-center flex flex-col md:px-10"
          >
            <section className="flex items-center justify-center w-full h-[20%] border">
              <Image
                src="https://res.cloudinary.com/drkzjxpza/image/upload/v1684121406/portafolio/logos/logo_vvm6z9.png"
                alt="Mi Logo"
                width={600}
                height={600}
                style={{ width: "20%", height: "auto" }}
                className="w-full md:w-1/5 h-full object-cover md:rounded-lg"
                quality={100}
              />
            </section>

            <section className="flex flex-col items-center h-[80%] text-center  overflow-y-auto ">
              <div className="text-center h-2/5 w-full border flex flex-col md:flex-row justify-center items-center space-x-2">
                <h4 className="text-3xl md:text-4xl font-semibold ">
                  <span className="underline decoration-[#F7AB0]/58">
                    Proyecto {index + 1} de {projects.length}:
                  </span>
                  <span>{project.name}</span>
                </h4>
              </div>

              <div className="h-3/5 w-full border flex flex-col justify-around">
                <p className="text-base md:text-xl text-justify px-4 md:px-0">
                  {project.description}
                </p>
                <div>
                <a>Repo</a>
                <a>Demo</a>
                </div>
                
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
