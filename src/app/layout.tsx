'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { useState } from "react";
import MainContent from "@/components/MainContent";
import Rgb from "./rgb/page";
import Hex from "./hex/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [page, setPage] = useState<string>("home")

  return (
    <html className="h-[100vh]" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased flex flex-col`}>
        <Header setCurrentPage={setPage}/>
        <main className="flex flex-col justify-center items-center grow-1">
          {page === "home" ? <MainContent/> 
          : page === "rgb" ? <Rgb/> 
          :/*page === "hex"*/<Hex/>}
        </main>
      </body>
    </html>
  );
}
