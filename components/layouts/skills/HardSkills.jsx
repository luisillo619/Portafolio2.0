import React from "react";
import { hardSkills } from "@/helpers/skillsImages";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HardSkill = ({ skill }) => {
  const openSkillDocs = () => {
    window.open(skill.docs, "_blank");
  };

  return (
    <div className="w-full h-28 flex flex-col justify-around items-center border mb-5">
      <LazyLoadImage
        alt="My Logo"
        width={45}
        height={45}
        className="object-contain cursor-pointer m-auto"
        effect="blur"
        threshold={0}
        onClick={openSkillDocs}
        src={skill.src}
      />
      <p>{skill.title}</p>
    </div>
  );
};

const SkillSection = ({ title, skills }) => (
  <section className="h-full w-full">
    <h2 className="h-[3%]">{title}</h2>
    <div className="h-[97%]">
      {skills.map((skill) => (
        <HardSkill key={skill.title} skill={skill} />
      ))}
    </div>
  </section>
);

export const HardSkills = () => {
  const { backend, databases, frontend, languages } = hardSkills;

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 overflow-hidden md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-[#F7AB0A]/80">
      <SkillSection title="Bases de datos" skills={databases} />
      <SkillSection title="Lenguajes" skills={languages} />
      <SkillSection title="Backend" skills={backend} />
      <SkillSection title="Frontend" skills={frontend} />
    </div>
  );
};