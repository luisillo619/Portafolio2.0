"use client";
import { SectionRefsProvider } from "@/context/RefsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function GlobalProvider({ children }) {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <SectionRefsProvider> {children}</SectionRefsProvider>
    </>
  );
}
