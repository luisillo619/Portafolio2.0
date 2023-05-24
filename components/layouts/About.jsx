import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className="w-full h-full border flex flex-col">
      <h1 className="text-center uppercase tracking-[10px] md:text-2xl md:tracking-[20px]">
        Acerca de mí
      </h1>
      <section className="h-full w-full flex flex-col md:flex-row  items-center">
        <div
          className="w-[80%] md:w-5/12 border h-full flex items-center justify-center"
          data-aos="fade-right"
        >
          <Image
            src="https://res.cloudinary.com/drkzjxpza/image/upload/v1684121406/portafolio/logos/logo_vvm6z9.png"
            alt="Mi Logo"
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            className="rounded-full object-contain md:rounded-md h-full"
            quality={100}
          />
        </div>
        <div className="w-full md:w-7/12 h-full flex items-center justify-center ">
          <p className="text-sm md:text-base text-center md:text-start">
            Desarrollador Full Stack, siempre buscando desafíos interesantes.
            Pasión por la resolución de problemas complejos y la creación de
            productos de software eficientes y escalables.
          </p>
        </div>
      </section>
    </div>
  );
};
