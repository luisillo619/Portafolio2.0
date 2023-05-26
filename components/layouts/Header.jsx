"use client";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { RiGithubFill } from "react-icons/ri";
import { SectionRefsContext } from "@/context/RefsContext";
import { FaBars, FaTimes } from "react-icons/fa";

import ScrollUp from "./ScrollUp/ScrollUp";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY + 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollPosition;
};

const useSectionPosition = (ref) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setPosition(ref.current.offsetTop);
    };

    setPosition(ref.current.offsetTop);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return position;
};

export const Header = () => {
  const { aboutRef, experienceRef, skillsRef, projectsRef, scrollToSection } =
    useContext(SectionRefsContext);

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const scrollPosition = useScrollPosition();
  const aboutPosition = useSectionPosition(aboutRef);
  const experiencePosition = useSectionPosition(experienceRef);
  const skillsPosition = useSectionPosition(skillsRef);
  const projectsPosition = useSectionPosition(projectsRef);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (scrollPosition >= projectsPosition) {
      setActiveSection(projectsRef);
    } else if (scrollPosition >= skillsPosition) {
      setActiveSection(skillsRef);
    } else if (scrollPosition >= experiencePosition) {
      setActiveSection(experienceRef);
    } else if (scrollPosition >= aboutPosition) {
      setActiveSection(aboutRef);
    } else {
      setActiveSection(null);
    }
  }, [scrollPosition]);

  const SectionButton = ({ sectionRef, children, isHamburgerMenu = false }) => (
    <li>
      <button
        className={
          isHamburgerMenu
            ? activeSection === sectionRef
              ? "w-full block px-4 py-2 text-left bg-red-400 text-white"
              : "w-full block px-4 py-2 text-left text-gray-800 hover:bg-indigo-500 hover:text-white"
            : activeSection === sectionRef
            ? "bg-red-400"
            : ""
        }
        onClick={() => {
          scrollToSection(sectionRef);
          if (isHamburgerMenu) setIsOpen(false);
        }}
      >
        {children}
      </button>
    </li>
  );

  return (
    <header
      className="fixed top-2 z-50 flex justify-between items-center max-w-[1200px] md:space-x-8 px-5 md:px-24 w-full"
      data-aos="fade-down"
    >
      <div className="md:w-1/12 w-1/2 object-cover flex-shrink-0  flex justify-start">
        <ScrollUp>
          <Image
            src="https://res.cloudinary.com/drkzjxpza/image/upload/v1684121406/portafolio/logos/logo_vvm6z9.png"
            alt="Mi Logo"
            width={40}
            height={40}
            style={{ width: "auto", height: "auto" }}
            className="object-contain cursor-pointer"
            quality={80}
          />
        </ScrollUp>
      </div>
      <div className="md:w-9/12 md:flex md:justify-center hidden">
        <ul className="tracking-wide text-xs md:text-sm space-x-6 flex justify-around text-center w-full">
          <SectionButton sectionRef={aboutRef}>Sobre mí</SectionButton>
          <SectionButton sectionRef={experienceRef}>
            Experiencia profesional
          </SectionButton>
          <SectionButton sectionRef={skillsRef}>Habilidades</SectionButton>
          <SectionButton sectionRef={projectsRef}>Proyectos</SectionButton>
        </ul>
      </div>
      <div className="md:w-2/12 w-1/2 flex justify-end h-full">
        <div className="flex items-center space-x-3">
          <figure className="flex items-center justify-end w-full h-full text-4xl">
            <Link
              href="https://www.linkedin.com/in/luisrangel-lagunes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </Link>
            <Link
              href="https://github.com/luisillo619"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
            </Link>
          </figure>
          <div className="relative md:hidden">
            <button onClick={handleToggle}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div
              className={`absolute right-0 top-8 w-48 bg-white shadow-md  py-2 rounded-md border ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="h-full flex flex-col">
                <SectionButton sectionRef={aboutRef} isHamburgerMenu={true}>
                  Sobre mí
                </SectionButton>
                <SectionButton
                  sectionRef={experienceRef}
                  isHamburgerMenu={true}
                >
                  Experiencia profesional
                </SectionButton>
                <SectionButton sectionRef={skillsRef} isHamburgerMenu={true}>
                  Habilidades
                </SectionButton>
                <SectionButton sectionRef={projectsRef} isHamburgerMenu={true}>
                  Proyectos
                </SectionButton>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
