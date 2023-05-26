import { GlobalProvider } from "./GlobalProvider";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Portafolio",
  description: "Creado por Luis Rangel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
