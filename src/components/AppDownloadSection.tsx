"use client";

import Image from "next/image";
import React from "react";

const AppDownloadSection = () => {
    return (
        <section className=" bg-gray-50">
            {/* Phone Image */}
            <div className="w-full md:w-full relative">
                <Image
                    src="https://logiclead.in/assets/img/banking_logo/rechargeicon_20240803130432465829.jpg"
                    alt="Phone Left"
                    width={1384} // adjust according to your actual image
                    height={1512} // adjust according to your actual image
                    className="object-contain w-full h-auto"
                />
            </div>
        </section>
    );
};

export default AppDownloadSection;
