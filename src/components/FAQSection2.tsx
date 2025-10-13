"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is FASTag?",
    answer:
      "FASTag is a prepaid tag fixed on your vehicle’s windscreen that enables automatic toll payment at toll plazas using RFID technology.",
  },
  {
    question: "How can I recharge my FASTag on Logiclead?",
    answer:
      "Simply enter your vehicle/FASTag details, choose a recharge amount, select your payment method (UPI, card, net banking), and complete the payment.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Logiclead supports UPI, debit/credit cards, net banking, and popular digital wallets.",
  },
  {
    question: "Is there any minimum recharge amount?",
    answer:
      "Yes, the minimum recharge amount depends on the issuing bank, but on Logiclead, you can start from as low as ₹100.",
  },
  {
    question: "How long does it take for the recharge to reflect?",
    answer:
      "Recharges are usually credited instantly, but in rare cases, it may take up to 30 minutes depending on the bank network.",
  },
];

const FAQSection2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-10 max-w-7xl mx-auto">
      <div className=" mx-auto pb-4 lg:pb-0 lg:px-4">
        <h2 className="text-3xl font-bold text-left mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-sm font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 py-4 bg-white text-gray-700 "
                  >
                    <p className="text-[12px] font-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection2;
