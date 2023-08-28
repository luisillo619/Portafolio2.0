import Image from "next/image";
import React from "react";
import projectsPokeApiImg from "@/public/assets/proyectospokeApi.png";
import projectsNetflixCloneImg from "@/public/assets/proyectosNetflixClone.png";
import proyectosEcommerceImg from "@/public/assets/proyectosEcommerce.jpg";
const projects = [
  {
    name: `Ecommerce "Buy It Now"`,
    img: proyectosEcommerceImg,
    description: `Descubre una experiencia de compra en línea excepcional en Ecommerce "Buy It Now". Navega por una amplia gama de productos de alta calidad y disfruta de un proceso de pago seguro y eficiente. Con la opción "Buy It Now", comprar tus artículos favoritos es más rápido que nunca. ¡Simplifica tus compras en línea hoy mismo!`,
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7099234365183774720/",
    repo: "https://github.com/luisillo619/ecommerce-NextJs",
  },
  {
    name: "PokeAPI",
    img: projectsPokeApiImg,
    description:
      "Inspirado en el famoso programa Pokémon, desarrollé un Pokedex el cual permite ver, crear, modificar, filtrar y ordenar Pokémons.",
    repo: "https://github.com/luisillo619/PI-POKEMON-FRONT",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7033537582856564736/?originTrackingId=53m9%2FdYjT3y3X1cB8aNDgA%3D%3D",
  },
  {
    name: "Netflix Replica",
    img: projectsNetflixCloneImg,
    description:
      "Creacion de replica de netflix con la mayoria de funcionalidad de la aplicacion real. Integracion de parasera de pago, sistema de plan de suscripcion y sistema de registro de ususarios",
    repo: "https://github.com/luisillo619/NETFLIX-CLONE",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7059205264146665472/",
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
                src={project.img}
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
                  <span>{" " + project.name}</span>
                </h4>
              </div>

              <div className="h-3/5 w-full border flex flex-col justify-around">
                <p className="text-base md:text-xl text-justify px-4 md:px-0">
                  {project.description}
                </p>
                <div className="flex justify-around">
                  <a
                    href={`${project.repo}`}
                    target="_blank"
                    className="btn flex items-center justify-center  p-4 rounded-lg shadow-md border border-transparent cursor-pointer transition-transform duration-500 hover:shadow-inner hover:borderhover:-translate-y-1"
                  >
                    <svg
                      className="transition-transform duration-500 transform hover:scale-90"
                      width="30"
                      height="30"
                      fill="#333333"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="github"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </a>

                  <a
                    href={`${project.demo}`}
                    target="_blank"
                    className="btn flex items-center justify-center  p-4 rounded-lg shadow-md border border-transparent cursor-pointer transition-transform duration-500 hover:shadow-inner hover:borderhover:-translate-y-1"
                  >
                    <p className="transition-transform duration-500 transform hover:scale-90">
                      Demostracion
                    </p>
                  </a>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};
