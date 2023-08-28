import { useContact } from "@/hooks/useContact";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { ClipLoader } from "react-spinners";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateContact = (formContact) => {
  const errors = {};

  if (!formContact.name || formContact.name.trim() === "") {
    errors.name = "Por favor, ingresa tu nombre";
  }

  if (!formContact.email || formContact.email.trim() === "") {
    errors.email = "Por favor, ingresa tu correo electrónico";
  } else if (!/\S+@\S+\.\S+/.test(formContact.email)) {
    errors.email = "Por favor, ingresa un correo electrónico válido";
  }

  if (!formContact.subject || formContact.subject.trim() === "") {
    errors.subject = "Por favor, ingresa el asunto";
  }

  if (!formContact.message || formContact.message.trim() === "") {
    errors.message = "Por favor, ingresa un mensaje";
  } else if (formContact.message.length > 200) {
    errors.message = "El mensaje no puede tener más de 200 caracteres";
  }

  return errors;
};

export const ContactMe = () => {
  const {
    form: contact,
    handleChange,
    handleSubmit,
    loading,
  } = useContact(INITIAL_STATE, validateContact);

  return (
    <div className="w-full h-full border flex flex-col">
      <h1 className=" text-center uppercase tracking-[10px] md:text-2xl md:tracking-[20px] h-[6%]">
        Contactame
      </h1>
      <div className="h-[94%] w-full">
        <section className="w-full h-[25%] flex flex-row md:flex-col items-center justify-center md:space-y-5">
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
        </section>

        <section className="w-full h-[75%]">
          <form
            className="w-full h-full grid grid-cols-2 gap-4 p-4 border border-red-300"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Ingresa tu nombre"
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
              className="border  p-2"
            />
            <input
              placeholder="Ingresa tu correo"
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              placeholder="Ingresa el asunto"
              type="text"
              name="subject"
              value={contact.subject}
              onChange={handleChange}
              className="border p-2"
            />
            <textarea
              placeholder="Ingresa el mensaje"
              type="text"
              name="message"
              value={contact.message}
              onChange={handleChange}
              className="col-span-2 p-2 border"
            />
            <div className="col-span-2 ">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
              <div
                style={{ display: !loading ? "none" : "block" }}
                className="flex justify-center items-center flex-col mt-2"
              >
                <ClipLoader color={"#365ad6"} size={20} />
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
