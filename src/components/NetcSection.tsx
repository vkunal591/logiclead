"use client";

import React from "react";
import { FaTag } from "react-icons/fa6"; // FontAwesome 6 icon

const benefits = [
    "Saves Time",
    "Smooth Toll Passing",
    "Saves Fuel",
    "Alerts on Mobile",
    "Saves Money",
    "Easy Online Recharge",
];

const NetcSection: React.FC = () => {
    return (
        <section className="netc-section bg-white rounded-xl shadow-md p-6  mx-auto my-8">
            {/* Header */}
            <div className="netc-header flex items-center gap-3 mb-4">
                <div className="netc-icon text-white bg-primary rounded-full p-3 text-2xl">
                    <FaTag size={20} />
                </div>
                <h2 className="netc-title text-xl font-bold">NETC FASTag</h2>
            </div>

            {/* Content */}
            <div className="netc-content mb-4">
                <p className="text-gray-700 text-xs leading-5 ">
                    The National Electronic Toll Collection (NETC) system is a pay-per-use toll collection application that anyone can use.
                    The NETC solution uses FASTags with transponder chips. This technology enables toll payment and electronic clearing that have been implemented for toll collection systems in the past.
                </p>
            </div>

            {/* Benefits */}
            <h3 className="benefits-title text-lg font-semibold mb-2">Benefits Of FASTag</h3>
            <ul className="benefits-list flex flex-wrap gap-1 gap-y-1 list-none w-full text-gray-700">
                {benefits.map((benefit, idx) => (
                    <li
                        key={idx}
                        className="bg-primary text-white font-semibold text-[10px] rounded-md p-2 w-[48%] lg:w-full text-center"
                    >
                        {benefit}
                    </li>
                ))}
            </ul>

        </section>
    );
};

export default NetcSection;
