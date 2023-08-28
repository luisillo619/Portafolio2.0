import React from 'react'
import { softSkills } from '@/helpers/skillsImages'
import { LazyLoadImage } from "react-lazy-load-image-component";


const SoftSkill = ({ skill }) => {
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
      <p className="font-bold text-blue-300">{skill.title}</p>
    </div>
  );
};

const SkillSection = ({ skills, title }) => (
  <section className="h-full w-full">
    <h2 className="h-[6%]">{title}</h2>
    <div className="h-[94%]">
      {skills.map((skill) => (
        <SoftSkill key={skill.title} skill={skill} />
      ))}
    </div>
  </section>
);

export const SoftSkills = () => {
  return (
    <div className="w-full h-full flex border border-red-900 md:grid-cols-4 overflow-hidden md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-[#F7AB0A]/80">
    <SkillSection skills={softSkills} title="Soft Skills"/>
    </div>
  )
}
