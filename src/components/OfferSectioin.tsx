"use client";

import Image from "next/image";
import React from "react";
import { FaGift } from "react-icons/fa6";

interface Offer {
    id: number;
    title: string;
    description: string;
    validTill: string;
}

interface OffersSectionProps {
    offers: Offer[];
}

const OffersSection: React.FC<OffersSectionProps> = ({ offers }) => {
    return (
        <section className="">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                        <FaGift size={20} className="text-gray-800" /> Exclusive Offers
                    </h4>
                    {/* <Image src={'/assets/images/logo/bharat.png'} className="w-24 h-14 object-contain" width={800} height={800} alt="bharat connect" /> */}

                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
                    {offers.length > 0 ? (
                        offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="bg-gray-50 hover:scale-105 hover:bg-blue-50 transition-all duration-300 ease-in-out p-4 rounded-xl flex flex-col justify-between items-center text-center gap-2 shadow-sm"
                            >
                                <FaGift size={32} className="text-cyan-500 mb-2 " />
                                <h6 className="text-md text-gray-700 font-semibold">{offer.title}</h6>
                                <p className="text-sm text-gray-600">{offer.description}</p>
                                <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
                                    Valid Till {offer.validTill}
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500 py-4">
                            No offers available
                        </div>
                    )}
                </div>

                {/* Pagination Placeholder */}
                <div className="mt-4 flex justify-end">
                    <div id="pagination-links"></div>
                </div>
            </div>
        </section>
    );
};

export default OffersSection;
