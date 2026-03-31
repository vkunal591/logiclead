"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary font-[Inter] text-gray-200 pt-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="mb-4 flex items-center justify-start gap-2">
              <Image
                src="/assets/images/logo/pwaicon.png"
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <h3 className="text-2xl font-bold">
                FastPay
              </h3>
            </div>
            <div className="flex gap-3 mb-3">
              {/* Social icons (optional) */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden lg:block lg:invisible">
            <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 font-normal text-base text-white">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/wallet" className="hover:text-white transition-colors">
                  Wallet
                </Link>
              </li>
              <li>
                <Link href="/fastag-provider" className="hover:text-white transition-colors">
                  FASTag Providers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div className="font-light  text-white">
            <h5 className="text-lg font-semibold mb-3">Reach Us</h5>
            <p className="flex items-center mb-2">
              <FaEnvelope className="bi bi-envelope-fill me-2" /> ops@fastpay.in
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="bi bi-envelope-fill me-2" /> tech@fastpay.in
            </p>
            {/* <p className="flex items-start">
              <span className="w-4 mr-2">
                <FaLocationPin className="t" />
              </span>
              Office No 501, Ground Floor, D-29,
              Sector 3, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301
            </p> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 py-6 mt-8 text-sm">
          <p>© 2025 fastpay. All rights reserved</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="/termsConditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacyPolicy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
