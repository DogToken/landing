"use client"; // This marks the component as a Client Component

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState({
    mintMe: false,
    polygon: false,
    info: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (key: keyof typeof subMenuOpen) => {
    setSubMenuOpen({ ...subMenuOpen, [key]: !subMenuOpen[key] });
  };

  return (
    <div className={`border-b ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/ui/logo.png" alt="DogSwap Logo" width={32} height={32} />
          <span className="text-xl font-bold">DogSwap</span>
        </Link>
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary py-2 px-3" rel="noopener noreferrer">
            Home
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary py-2 px-3" rel="noopener noreferrer">
            News
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3">
              MintMe
            </button>
            <div className={`absolute left-0 mt-0 hidden w-48 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} border rounded-md shadow-lg group-hover:flex flex-col`}>
              <Link href="https://app.dogswap.xyz/swap" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Swap
              </Link>
              <Link href="https://app.dogswap.xyz/stake" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Stake
              </Link>
              <Link href="https://app.dogswap.xyz/bonepools" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Pool
              </Link>
              <Link href="https://mintme.com/token/dogswap" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                DogSwap
              </Link>
              <Link href="https://mintme.com/token/bone" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                BONE
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3">
              Polygon
            </button>
            <div className={`absolute left-0 mt-0 hidden w-48 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} border rounded-md shadow-lg group-hover:flex flex-col`}>
              <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xd97958Fb10092107C2377afa2235d7728Ca4BD90" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Swap
              </Link>
              <Link href="https://app.uniswap.org/explore/tokens/polygon/0xd97958fb10092107c2377afa2235d7728ca4bd90" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Explore
              </Link>
              <Link href="https://polygonscan.com/token/0xd97958Fb10092107C2377afa2235d7728Ca4BD90" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Polygonscan
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3">
              Info
            </button>
            <div className={`absolute left-0 mt-0 hidden w-48 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} border rounded-md shadow-lg group-hover:flex flex-col`}>
              <Link href="/about" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} rel="noopener noreferrer">
                About
              </Link>
              <Link href="/whitepaper" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} rel="noopener noreferrer">
                Whitepaper
              </Link>
              <Link href="/roadmap" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} rel="noopener noreferrer">
                Roadmap
              </Link>
              <Link href="https://docs.dogswap.xyz" className={`block px-4 py-2 text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Docs
              </Link>
            </div>
          </div>
        </nav>
        <div className="ml-auto hidden md:flex items-center space-x-4">
          <Link href="https://discord.gg/RSQZDGThfU" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </Link>
          <Link href="https://x.com/DogSwapDeFi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </Link>
          <ThemeToggle />
          <Button asChild variant="default">
            <Link href="https://app.dogswap.xyz" target="_blank" rel="noopener noreferrer">
              Launch App
            </Link>
          </Button>
        </div>
      </div>
      <div className={`fixed inset-0 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} z-10 p-6 md:hidden transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 bg-gray-200 rounded-full p-2">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className="flex flex-col items-start space-y-4">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary py-2 px-3" rel="noopener noreferrer">
            Home
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary py-2 px-3" rel="noopener noreferrer">
            News
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3 flex justify-between items-center w-full" onClick={() => toggleSubMenu("mintMe")}>
              MintMe
              <FontAwesomeIcon icon={subMenuOpen.mintMe ? faChevronUp : faChevronDown} />
            </button>
            <div className={`${subMenuOpen.mintMe ? "block" : "hidden"} flex flex-col mt-2 space-y-2 pl-4 w-full`}>
              <Link href="https://app.dogswap.xyz/swap" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Swap
              </Link>
              <Link href="https://app.dogswap.xyz/stake" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Stake
              </Link>
              <Link href="https://app.dogswap.xyz/bonepools" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Pool
              </Link>
              <Link href="https://mintme.com/token/dogswap" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                DogSwap
              </Link>
              <Link href="https://mintme.com/token/bone" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                BONE
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3 flex justify-between items-center w-full" onClick={() => toggleSubMenu("polygon")}>
              Polygon
              <FontAwesomeIcon icon={subMenuOpen.polygon ? faChevronUp : faChevronDown} />
            </button>
            <div className={`${subMenuOpen.polygon ? "block" : "hidden"} flex flex-col mt-2 space-y-2 pl-4 w-full`}>
              <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xd97958Fb10092107C2377afa2235d7728Ca4BD90" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Swap
              </Link>
              <Link href="https://app.uniswap.org/explore/tokens/polygon/0xd97958fb10092107c2377afa2235d7728ca4bd90" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Explore
              </Link>
              <Link href="https://polygonscan.com/token/0xd97958Fb10092107C2377afa2235d7728Ca4BD90" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Polygonscan
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary py-2 px-3 flex justify-between items-center w-full" onClick={() => toggleSubMenu("info")}>
              Info
              <FontAwesomeIcon icon={subMenuOpen.info ? faChevronUp : faChevronDown} />
            </button>
            <div className={`${subMenuOpen.info ? "block" : "hidden"} flex flex-col mt-2 space-y-2 pl-4 w-full`}>
              <Link href="/about" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} rel="noopener noreferrer">
                About
              </Link>
              <Link href="/whitepaper" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} rel="noopener noreferrer">
                Whitepaper
              </Link>
              <Link href="/roadmap" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} rel="noopener noreferrer">
                Roadmap
              </Link>
              <Link href="https://docs.dogswap.xyz" className={`text-sm ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`} target="_blank" rel="noopener noreferrer">
                Docs
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}