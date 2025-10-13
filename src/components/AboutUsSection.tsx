"use client";

import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="p-4 lg:p-12 max-w-7xl mx-auto bg-gray-50">
      <div className="max-w-7xl mx-auto lg: px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="mb-4 text-gray-700">
              Welcome to <b>Logiclead</b>, your trusted platform for FASTag recharge. 
              We make it easy for vehicle owners to recharge their FASTag quickly and securely from anywhere.
            </p>
            <p className="text-gray-700">
              Our goal is to save your time at toll plazas by providing a smooth recharge
              experience with multiple payment options. With reliable service, exciting offers,
              and dedicated support, we are here to make your travel easier and more convenient.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 w-full relative h-60 lg:h-72">
            <Image
              src="https://logiclead.in/assets/img/banking_logo/mactc8ig_fastag_625x300_17_February_25.jpg"
              alt="About Us"
              fill
              className="object-cover rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
