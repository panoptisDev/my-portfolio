import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "./nabvar/Navbar";
import { Dropdown } from "./nabvar/Dropdown";

export default function Layout({ children, title = "Portfolio by Nextjs" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/birdBg.jpg)",
          }}
        >
          {children}
        </div>
      </main>
      <footer className="absolute bottom-0 z-20 flex items-center justify-center w-full h-12 bg-black">
        <p className="px-2 text-xs text-center text-gray-500">
          Copyright © 2021 TAIZEN | All rights reserved
        </p>
      </footer>
    </div>
  );
}
