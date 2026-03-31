"use client";

import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";

const HeroSection = () => {
    const { setIsOpen } = useAuth()
    return (
        <section className="bg-white p-4 lg:p-16 max-w-7xl mx-auto he">
            <div className="max-w-7xl mx-auto  lg:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Side */}
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            FASTag Recharge <br />
                            Online at <span className="text-primary">FastPay</span>
                        </h1>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center justify-start lg:justify-start gap-2">
                                <FaCircle className="text-primary text-xs" />
                                Multiple Payment Options
                            </li>
                            <li className="flex items-center justify-start lg:justify-start gap-2">
                                <FaCircle className="text-primary text-xs" />
                                Multiple Discounts & Offers for FASTag
                            </li>
                            <li className="flex items-center justify-start lg:justify-start gap-2">
                                <FaCircle className="text-primary text-xs" />
                                24×7 Customer Support
                            </li>
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 w-full max-w-md">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            {/* Header */}
                            <div className="flex justify-between items-center bg-primary px-6 py-4 rounded-t-2xl">
                                <label className="text-white font-semibold text-lg">
                                    FASTag Recharge
                                </label>
                                {/* <Image
                                    src="https://logiclead.in/assets/img/icons/bbps-new-2.png"
                                    alt="Bharat Connect"
                                    width={70}
                                    height={20}
                                    className="mt-1"
                                /> */}
                            </div>

                            {/* Form */}
                            <div className="p-6 bg-white">
                                <input
                                    type="text"
                                    placeholder="Enter vehicle number"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(true)}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                                >
                                    Proceed
                                </button>

                                <p className="text-sm text-gray-700 mt-3 flex items-center justify-center lg:justify-start gap-1">
                                    <BsLightningChargeFill className="text-yellow-500" />
                                    Get the best deals on FASTag Recharge
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
