import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "jewellery-shop",
  description: "Best jewellery-shop in BD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
