import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";

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
      <body 
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
