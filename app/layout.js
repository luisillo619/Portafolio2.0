import { SectionRefsProvider } from "@/context/RefsContext";
import "./globals.css";

export const metadata = {
  title: "Portafolio",
  description: "Creado por Luis Rangel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <SectionRefsProvider> {children}</SectionRefsProvider>
      </body>
    </html>
  );
}
