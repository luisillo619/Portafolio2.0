import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { RiGithubFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { SectionRefsContext } from "@/context/RefsContext";
import ScrollUp from "./ScrollUp/ScrollUp";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY + 100); //Se suma un total de 100 gracias a la separación entre los componentes mediante "space-y" en page.js
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return position;
};

const useLastSectionPosition = (ref) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const { offsetTop, offsetHeight } = ref.current;
      setPosition(offsetTop + offsetHeight);
    };

    const { offsetTop, offsetHeight } = ref.current;

    // Aquí se realiza una suma de 100 para compensar y ajustar la última posición del componente. Esta acción se lleva a cabo en la función useScrollPosition, donde se añaden 100 al eje Y.
    setPosition(offsetTop + offsetHeight + 100);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return position;
};

const SectionButton = ({
  sectionRef,
  children,
  isHamburgerMenu = false,
  scrollToSection,
  activeSection,
  setIsOpen,
}) => (
  <li>
    <button
      className={`w-full block px-4 py-2 text-left ${
        isHamburgerMenu
          ? activeSection === sectionRef
            ? "bg-red-400 text-white"
            : "text-gray-800 hover:bg-indigo-500 hover:text-white"
          : activeSection === sectionRef
          ? "bg-red-400"
          : ""
      }`}
      onClick={() => {
        scrollToSection(sectionRef);
        if (isHamburgerMenu) setIsOpen(false);
      }}
    >
      {children}
    </button>
  </li>
);

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

  const aboutLastPosition = useLastSectionPosition(aboutRef);
  const experienceLastPosition = useLastSectionPosition(experienceRef);
  const skillsLastPosition = useLastSectionPosition(skillsRef);
  const projectsLastPosition = useLastSectionPosition(projectsRef);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (
      scrollPosition > projectsPosition &&
      scrollPosition < projectsLastPosition
    ) {
      setActiveSection(projectsRef);
    } else if (
      scrollPosition > skillsPosition &&
      scrollPosition < skillsLastPosition
    ) {
      setActiveSection(skillsRef);
    } else if (
      scrollPosition > experiencePosition &&
      scrollPosition < experienceLastPosition
    ) {
      setActiveSection(experienceRef);
    } else if (
      scrollPosition > aboutPosition &&
      scrollPosition < aboutLastPosition
    ) {
      setActiveSection(aboutRef);
    } else {
      setActiveSection(null);
    }
  }, [scrollPosition]);

  return (
    <header
      className="fixed top-2 z-50 flex justify-between items-center max-w-[1200px] md:space-x-8 px-5 md:px-24 w-full"
      data-aos="fade-down"
    >
      <div className="md:w-1/12 w-1/2 object-cover flex-shrink-0 flex justify-start">
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
          <SectionButton
            sectionRef={aboutRef}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            setIsOpen={setIsOpen}
          >
            Sobre mí
          </SectionButton>
          <SectionButton
            sectionRef={experienceRef}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          >
            Experiencia profesional
          </SectionButton>
          <SectionButton
            sectionRef={skillsRef}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          >
            Habilidades
          </SectionButton>
          <SectionButton
            sectionRef={projectsRef}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          >
            Proyectos
          </SectionButton>
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
              className={`absolute right-0 top-8 w-48 bg-white shadow-md py-2 rounded-md border ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="h-full flex flex-col">
                <SectionButton
                  sectionRef={aboutRef}
                  isHamburgerMenu={true}
                  scrollToSection={scrollToSection}
                  activeSection={activeSection}
                  setIsOpen={setIsOpen}
                >
                  Sobre mí
                </SectionButton>
                <SectionButton
                  sectionRef={experienceRef}
                  isHamburgerMenu={true}
                  scrollToSection={scrollToSection}
                  activeSection={activeSection}
                  setIsOpen={setIsOpen}
                >
                  Experiencia profesional
                </SectionButton>
                <SectionButton
                  sectionRef={skillsRef}
                  isHamburgerMenu={true}
                  scrollToSection={scrollToSection}
                  activeSection={activeSection}
                  setIsOpen={setIsOpen}
                >
                  Habilidades
                </SectionButton>
                <SectionButton
                  sectionRef={projectsRef}
                  isHamburgerMenu={true}
                  scrollToSection={scrollToSection}
                  activeSection={activeSection}
                  setIsOpen={setIsOpen}
                >
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
