import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export const ContactMe = () => {
  return (
    <div className="w-full h-full border flex flex-col">
      <h1 className=" text-center uppercase tracking-[10px] md:text-2xl md:tracking-[20px] h-[6%]">
        Contactame
      </h1>
      <div className="h-[94%] w-full">
        <section className="w-full h-2/6 flex flex-row md:flex-col items-center justify-center md:space-y-5">
          <div className=" w-full flex items-center justify-center space-x-5">
            <Link
              href="https://wa.me/525582482375"
              target="_blank"
              className="md:text-2xl"
            >
              <PhoneIcon className="w-16 animate-pulse md:w-10" />
            </Link>
            <span className="hidden text-sm md:block md:tracking-widest md:text-xl">
              +52 5582482375
            </span>
          </div>
          <div className="w-full flex items-center justify-center space-x-5">
            <Link
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnrgzTsqpCggQwllGbGTQJcMRRRpQKQNMWppJPCtbdlJVgvpGJWvCpMPnFPcgrfQLWGBB"
              target="_blank"
              className="md:text-2xl"
            >
              <EnvelopeIcon className="w-16 animate-pulse md:w-10" />
            </Link>
            <span className="hidden text-sm md:block md:tracking-widest md:text-xl">
              luiscarlosrangel619@gmail.com
            </span>
          </div>
        </section>

        <section className="w-full h-4/6 flex flex-col items-center">
          <form className="w-full h-full flex">dsfds</form>
        </section>
      </div>
    </div>
  );
};
