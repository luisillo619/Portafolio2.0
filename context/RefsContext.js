"use client";
import React, { createContext, useRef } from "react";

export const SectionRefsContext = createContext({
  aboutRef: null,
  experienceRef: null,
  skillsRef: null,
  projectsRef: null,
  contactRef: null,
});

export const SectionRefsProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 50,
      behavior: "smooth",
    });
  };

  const sectionRefs = {
    aboutRef,
    experienceRef,
    skillsRef,
    projectsRef,
    contactRef,
    scrollToSection,
  };

  return (
    <SectionRefsContext.Provider value={sectionRefs}>
      {children}
    </SectionRefsContext.Provider>
  );
};