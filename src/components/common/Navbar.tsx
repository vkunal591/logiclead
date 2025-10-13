"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaWallet } from "react-icons/fa";
import Sidebar from "./MobileMenu";
import { useAuth } from "@/context/AuthContext";
import { BiLogOutCircle } from "react-icons/bi";

const navLinks = [
  { name: "Wallet", href: "/wallet", icon: FaWallet },
];

const Navbar = () => {
  const { token, logout, setIsOpen } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` w-full z-50 transition-all duration-300 ${isScrolled ? "bg-primary shadow-lg" : "bg-primary"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-36 h-20 scale-100 ml-0 lg:ml-10"
            >
              <Image
                src="/assets/images/logo/logo.png"
                alt="4U Consultant Services"
                fill
                className="object-contain filter brightness-0 invert"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(({ name, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  token ? <Link
                    key={name}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
                      ? "text-white/80 bg-white/20"
                      : "text-white hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <Icon className="text-lg" />
                    {name}
                  </Link> : <button
                    key={name}
                    onClick={() => setIsOpen(true)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
                      ? "text-white/80 bg-white/20"
                      : "text-white hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <Icon className="text-lg" />
                    {name}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-1">
              {token ? <Link href={''}>
                <Image src={'/assets/images/icons/user.svg'} alt="User" className="w-10 h-10" width={500} height={500} />
              </Link> : <button
                onClick={() => setIsOpen(true)}>
                <Image src={'/assets/images/icons/user.svg'} alt="User" className="w-10 h-10" width={500} height={500} />
              </button>}
              {token && (
                <button
                  onClick={logout}
                  className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium transition-all duration-300  text-white hover:text-white hover:bg-white/10`}                >
                  <BiLogOutCircle className="rotate-180" color="red" size={25} />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white" >
              <FaWallet />
            </button>
            <Sidebar />
            {token && (
              <button
                onClick={logout}
                className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm font-medium transition-all duration-300  text-white hover:text-white hover:bg-white/10`}                >
                <BiLogOutCircle className="rotate-180" color="red" size={25} />
              </button>
            )}
            {/* 
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none hover:opacity-80"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ name, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={name}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="text-lg" />
                    {name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </nav>
  );
};

export default Navbar;
