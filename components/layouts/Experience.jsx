import Image from "next/image";
import React from "react";

export const Experience = () => {
  return (
    <div className="w-full h-full border flex flex-col">
      <h1 className="text-center uppercase tracking-[10px] md:text-2xl md:tracking-[20px] h-[6%]">
        Experiencia
      </h1>
      <div className="h-[94%]">
        <section className="flex items-center justify-center w-full border">
          <Image
            src="https://res.cloudinary.com/drkzjxpza/image/upload/v1684121406/portafolio/logos/logo_vvm6z9.png"
            alt="Mi Logo"
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            className="w-full h-full object-cover md:rounded-lg"
            quality={100}
          />
        </section>
        <section></section>
      </div>
    </div>
  );
};
