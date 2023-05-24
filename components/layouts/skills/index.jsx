"use client";
import React from "react";
import { HardSkills } from "./HardSkills";
import { SoftSkills } from "./SoftSkills";

export const Skills = () => {
  return (
    <div className="w-full h-full border flex flex-col text-center overflow-y-scroll md:overflow-hidden ">
      <h1 className="text-center uppercase tracking-[10px] md:text-2xl md:tracking-[20px] h-[6%]">
        Habilidades
      </h1>
      <section className="h-[94%] w-full flex flex-col md:flex-row ">
        <div className="w-full md:w-9/12 border">
          <HardSkills />
        </div>

        <div className="w-full md:w-3/12">
          <SoftSkills />
        </div>
      </section>
    </div>
  );
};
// h-full grid grid-cols-2 gap-2 overflow-y-auto border
