"use client";

import React from "react";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[100px] md:h-[250px] lg:h-[300px]">
        <Image
          src="https://logiclead.in/assets/img/Website Banner 4.png"
          alt="FASTag Banner"
          fill
          className="object-fill h-full w-full"
          priority
        />
      </div>
    </section>
  );
};

export default BannerSection;
