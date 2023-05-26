import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Zoom, toast } from "react-toastify";

export const useContact = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const MESSAGE_ERROR =
    "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(form);
    const errors = Object.values(formErrors);
    
    if (errors.length === 0) {
      try {
        setLoading(true);
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        toast.success("Mensaje enviado correctamente", {
          position: "bottom-right",
          autoClose: 1500,
          transition: Zoom,
        });
      } catch (error) {
        toast.error(MESSAGE_ERROR, {
          position: "bottom-right",
          autoClose: 1500,
          transition: Zoom,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast.error(errors[0], {
        position: "bottom-right",
        autoClose: 1500,
        transition: Zoom,
      });
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    loading,
  };
};
