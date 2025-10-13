"use client";

import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWallet, FaFileAlt, FaFileContract } from "react-icons/fa";

// Sidebar Tabs with icons
export const SidebarTabs = [
  { id: 1, label: "Wallet", path: "/wallet", icon: FaWallet },
  { id: 3, label: "Privacy Policy", path: "/privacy-policy", icon: FaFileAlt },
  { id: 4, label: "Terms And Conditions", path: "/terms-and-conditions", icon: FaFileContract },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative font-sans">
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-50 text-gray-900 z-50 transform transition-all duration-500 ease-in-out ${isOpen ? "w-[85%] md:w-3/4" : "w-0"} overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-primary shadow-md">
            <Link href="/">
              <Image
                src="/assets/images/logo/logo.png"
                width={150}
                height={70}
                unoptimized
                priority
                alt="4U Consultant Service"
                className="object-contain"
              />
            </Link>
            <button
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
              className="text-white text-2xl font-extrabold"
            >
              ×
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {SidebarTabs.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 py-3 border-b border-gray-200 font-medium text-lg"
                >
                  {Icon && <Icon className="text-primary" />}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Hamburger Icon */}
      <IoIosMenu
        size={30}
        onClick={toggleSidebar}
        className="lg:hidden text-white cursor-pointer"
      />
    </div>
  );
};

export default Sidebar;
