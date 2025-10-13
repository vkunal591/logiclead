"use client";

import React from "react";
import { FaMobile } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import { RiBankFill } from "react-icons/ri";

const steps = [
  {
    icon: FaMobile,
    title: "1. Download App",
    description: "Download Logiclead app on your mobile and select 'Recharge Fastag'.",
  },
  {
    icon: RiBankFill,
    title: "2. Select Bank",
    description:
      "Select the Fastag issuing bank and enter your unique identification number printed on your tag.",
  },
  {
    icon: FaRupeeSign,
    title: "3. Recharge & Go 🚘",
    description: "Enter the value and proceed with your desired mode of payment.",
  },
];

const InfoBoxes: React.FC = () => {
  return (
    <section>
      <div className="netc-header flex items-center gap-3 bg-transparent mb-4">
        <div className="netc-icon text-white bg-primary rounded-full p-3 text-2xl">
          <LuCrown size={20} />
        </div>
        <h2 className="netc-title text-xl font-bold">NETC FASTag</h2>
      </div>

      <div className="info-boxes grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="info-box flex flex-col items-center bg-white hover:scale-105 transition-all rounded-xl shadow-md p-6 gap-3 hover:shadow-lg ease-in-out duration-300 text-center"
            >
              <Icon className="text-primary text-3xl" />
              <h4 className="text-sm font-semibold text-primary">{step.title}</h4>
              <p className="text-gray-700 text-xs font-400">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoBoxes;
