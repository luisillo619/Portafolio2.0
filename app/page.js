"use client";
import { About } from "@/components/layouts/About";
import { ContactMe } from "@/components/layouts/ContactMe";
import { Experience } from "@/components/layouts/Experience";
import { Hero } from "@/components/layouts/Hero";
import { Projects } from "@/components/layouts/Projects";
import { Header } from "@/components/layouts/Header";
import { Skills } from "@/components/layouts/skills";
import { SectionRefsContext } from "@/context/RefsContext";
import Aos from "aos";
import { useContext, useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  const aosInit = () => {
    setLoading(false);
    return "DOMContentLoaded";
  };
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: false,
      startEvent: aosInit(),
    });
  }, []);

  const { aboutRef, experienceRef, skillsRef, projectsRef, contactRef } =
    useContext(SectionRefsContext);

  const Section = ({ children, height, reference, width = "100%", id }) => {
    if (id === "skills")
      return (
        <div
          ref={reference}
          class="border w-full h-fit md:h-[90vh]"
        >
          {children}
        </div>
      );
    else
      return (
        <div style={{ height, width }} ref={reference} className="border">
          {children}
        </div>
      );
  };

  return (
    <>
      {!loading ? (
        <div className="flex flex-col justify-between items-center h-full w-full">
          <>
            <Header />
            <div className="flex flex-col justify-center items-center w-full max-w-[1200px] h-full min-h-[1800px] space-y-28 px-5 md:px-24 mt-12 mb-24">
              <Section height="80vh">
                <Hero />
              </Section>

              <Section height="80vh" reference={aboutRef}>
                <About />
              </Section>

              <Section height="80vh" reference={experienceRef}>
                <Experience />
              </Section>

              <Section reference={skillsRef} id="skills">
                <Skills />
              </Section>

              <Section height="90vh" reference={projectsRef}>
                <Projects />
              </Section>

              <Section height="80vh" reference={contactRef}>
                <ContactMe />
              </Section>
            </div>
          </>
        </div>
      ) : (
        <h1 className="h-screen w-screen flex justify-center items-center">
          Un momentito...
        </h1>
      )}
    </>
  );
}
