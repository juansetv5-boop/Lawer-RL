import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Representación Legal Popayán - Eternal Justice Design",
  description: "Defensa técnica en procesos penales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* We keep the material symbols link as it is a common way, but fix the img tag below */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-matte-black text-soft-grey`}
      >
        <div className="fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none opacity-[0.03]">
          <Image src="/logo.png" alt="Background Logo" width={800} height={800} className="w-[80vw] h-[80vw] object-contain max-w-[800px] max-h-[800px]" />
        </div>
        <Intro />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
