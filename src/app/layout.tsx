import React from 'react';
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--fd", // Font Display
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--fb", // Font Body
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Hexatech — The Composable Open Finance Platform",
  description: "Streamline digital banking transformation with Hexatech's composable, AI-powered platform. Deploy faster, scale further, comply everywhere.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
