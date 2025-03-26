"use client";
import { Button } from "@/components/ui/button";
import { Github, MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const savedDarkMode =
    typeof window !== "undefined" ? localStorage.getItem("darkMode") : null;
  const [darkMode, setDarkMode] = useState<boolean>(
    savedDarkMode ? JSON.parse(savedDarkMode) : false
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));

    if (newDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full py-6 px-6 flex justify-between items-center">
      <nav className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link href="/" className="text-lg font-bold ml-3">
          Pricing Card
        </Link>
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Button className="bg-black px-6 py-5 group" size="icon">
          <Link
            href="https://github.com/Mourrane20502/pricingcard"
            className="text-white flex items-center justify-center"
          >
            <Github className="size-5" />
          </Link>
        </Button>
        <Button onClick={toggleDarkMode} className="text-white">
          {darkMode ? (
            <SunIcon className="size-4 dark:text-black" />
          ) : (
            <MoonIcon className="size-4 " />
          )}
        </Button>
      </div>
    </header>
  );
}
