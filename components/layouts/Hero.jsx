"use client";
import React, { useContext } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import BackgroundCircles from "./cicles/BackgroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionRefsContext } from "@/context/RefsContext";
import Link from "next/link";


export const Hero = () => {
  const { contactRef, scrollToSection } = useContext(SectionRefsContext);

  const handleContactClick = () => {
    scrollToSection(contactRef);
  };

  return (
    <main
      className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center"
      data-aos="fade-in"
    >
      <section className="flex justify-center items-center flex-col md:w-1/2 space-y-10 w-full h-full">
        <div className="w-full flex flex-col text-center md:justify-start md:text-start space-y-5">
          <h1 className="text-3xl md:text-5xl tracking-wide">
            Luis Fullstack Developer
          </h1>
          <h2 className="text-lg tracking-widest">
            Apasionado por aprender y colaborar en proyectos que marcan la
            diferencia.
          </h2>
        </div>

        <div className="flex justify-center space-x-5 w-full md:justify-start">
          <button className="flex flex-row-reverse px-5 py-2 bg-[#2298D6] rounded-full text-white">
            <ArrowDownTrayIcon className="w-5 h-5 text-[#F7AB0A]" />
            <Link href="/cv/Luis_Rangel_CV.pdf" target="_blank">Descargar CV</Link>
          </button>
          <button
            className="px-5 py-2 bg-[#728088] rounded-full text-white"
            onClick={handleContactClick}
          >
            Contacto
          </button>
        </div>
      </section>
      <section className="md:w-1/2 flex justify-center items-center h-full w-full md:pl-[7%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0, 1],
            borderRadius: ["20%", "40%", "20%"],
          }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full h-full"
        >
          <div className="relative w-full h-full">
            <BackgroundCircles />
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src="https://res.cloudinary.com/drkzjxpza/image/upload/v1684121406/portafolio/logos/logo_vvm6z9.png"
                alt="Mi Logo"
                width={40}
                height={40}
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
