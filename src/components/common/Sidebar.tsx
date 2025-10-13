"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useAuth } from "@/context/AuthContext";
import { tabs } from "@/data/tabs";
import { BiLogOutCircle } from "react-icons/bi";
import ProfileModal from "../modals/ProfileModal";
import { FaQuestionCircle, FaBars, FaTimes } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const { token, user }: any = useAuth();
  const pathname = usePathname();

  const [supportModal, setSupportModal] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // mobile drawer toggle

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // block scroll when drawer open
  }, [isOpen]);

  if (!token) return null;

  const handleToggle = (tabPermission: string) => {
    setOpenMenu((prev) => (prev === tabPermission ? null : tabPermission));
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-[50000000] p-2 bg-white text-primary rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={22} />
      </button>

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full bg-primary text-white flex flex-col overflow-y-auto mt-[10%] shadow-md z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"}
        lg:translate-x-0 lg:w-[17%]`}
      >
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-3">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center py-3 border-b border-b-secondary">
          <Image
            priority
            width={500}
            height={500}
            alt="SkyField Logo"
            unoptimized
            src="/assets/images/logo/logo.png"
            className="w-3/5 object-contain"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center p-3 border-b border-b-secondary bg-primary/80">
          <Image
            src={"/assets/images/icons/user.svg"}
            alt="Profile"
            width={700}
            height={700}
            className="rounded-full w-10 h-10 border-2 border-white mb-2"
            unoptimized
          />
          <div className="px-2">
            <h3 className="text-sm font-semibold capitalize">{user?.name || "Kunal Verma"}</h3>
            <p className="text-xs text-gray-300">{user?.email || "vkunal591@email.com"}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 mt-2 mb-20 px-2">
          {tabs.map((tab: any) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;
            const hasSubTabs = tab.tabs && tab.tabs.length > 0;
            const isOpenTab = openMenu === tab.permission;

            return (
              <div key={tab.id} className="w-full">
                <Link
                  href={tab.href}
                  aria-label={tab.label}
                  onClick={() => {
                    if (hasSubTabs) handleToggle(tab.permission);
                    setIsOpen(false); // close drawer on mobile
                  }}
                  className={`flex justify-between items-center px-4 py-3 rounded-md text-sm transition-colors duration-200 ${isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "text-info hover:bg-secondary hover:text-white"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={18} /> {tab.label}
                  </span>
                  {hasSubTabs && (
                    <RiArrowDropDownLine
                      size={22}
                      className={`transition-transform ${isOpenTab ? "rotate-180" : "rotate-0"}`}
                    />
                  )}
                </Link>

                {isOpenTab && hasSubTabs && (
                  <div className="flex flex-col pl-8 bg-secondary/80 border-l border-white/20">
                    {tab.tabs.map((sub: any, i: number) => {
                      const SubIcon = sub.icon;
                      const subActive = pathname === sub.href;
                      return (
                        <Link
                          key={i}
                          href={sub.href}
                          className={`flex items-center gap-2 py-2 text-xs rounded-md transition-colors ${subActive
                            ? "text-white bg-white/10"
                            : "text-info hover:text-white hover:bg-white/10"
                            }`}
                        >
                          <SubIcon size={14} /> {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Help & Logout */}
          <button
            onClick={() => { setSupportModal(true); setIsOpen(false) }}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
          >
            <FaQuestionCircle color="#fff" size={22} /> Help & Support
          </button>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
          >
            <BiLogOutCircle className="rotate-180" color="red" size={25} /> Log Out
          </button>
        </nav>

      </aside>
      {/* Profile Modal */}
      <ProfileModal
        isOpen={supportModal}
        onClose={() => { setSupportModal(false); setIsOpen(false) }}
        user={{
          name: user?.name || "mosal53665@fanlvr.com",
          email: user?.email || "mosal53665@fanlvr.com",
          mobile: user?.mobile || "6299477707",
        }}
      />

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
