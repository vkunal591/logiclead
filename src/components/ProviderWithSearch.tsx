"use client";

import Image from "next/image";
import React, { useState } from "react";

const providers = [
    { name: "Indian Highways Management", img: "https://logiclead.in/assets/img/banking_logo/IHMCL-Logo.jpeg" },
    { name: "IndusInd Bank", img: "https://logiclead.in/assets/img/banking_logo/7fb9c4ae317ff5a843b86d86042f6597.jpg" },
    { name: "Bank of Baroda", img: "https://logiclead.in/assets/img/banking_logo/eb55d100ee42369d2e984e3cb4758c76.jpg" },
    { name: "Axis Bank", img: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg" },
    { name: "IDFC FIRST Bank", img: "https://logiclead.in/assets/img/banking_logo/2dad745c5f2fdd1f341fd31ef4937a50.jpg" },
    { name: "HDFC Bank", img: "https://logiclead.in/assets/img/banking_logo/3d0764bf519e0ae62a43f818f832ca11.jpg" },
    { name: "Kotak Mahindra Bank", img: "https://logiclead.in/assets/img/banking_logo/3adb17ad584e31a26d7f1119beb26c86.jpg" },
    { name: "Equitas", img: "https://logiclead.in/assets/img/banking_logo/51c53153e4a1ab4b735c213e62d7733f.jpg" },
    { name: "IDBI Bank", img: "https://logiclead.in/assets/img/banking_logo/6efb93f54538ebaf6c5251bc7a42713c.jpg" },
    { name: "IOB", img: "https://logiclead.in/assets/img/banking_logo/97a2e9a37d151bf1729b96678a88e292.jpg" },
    { name: "Jammu and Kashmir Bank", img: "https://logiclead.in/assets/img/banking_logo/55ba49c0871bbcfa6729799e4cdb466d.jpg" },
    { name: "Karnataka Bank", img: "https://logiclead.in/assets/img/banking_logo/15.webp" },
    { name: "Paytm Payments Bank", img: "https://logiclead.in/assets/img/banking_logo/8c6219ff367beac5f2730160a41aa897.jpg" },
    { name: "State Bank of India", img: "https://logiclead.in/assets/img/banking_logo/0986338cc1bd9659da9133bb4fc783a6.jpg" },
    { name: "Federal Bank", img: "https://logiclead.in/assets/img/banking_logo/2a4242814a0f7cc956fc2d14c1c4af2c.jpg" },
    { name: "ICICI Bank", img: "https://logiclead.in/assets/img/banking_logo/13102943-icici-b9b38f77-216e-45f2-891b-edf7a7643433.webp" },
    { name: "UCO Bank", img: "https://logiclead.in/assets/img/banking_logo/672b816d9405e17417c090fbb406ea6e.jpg" },
    { name: "Airtel Payments Bank", img: "https://logiclead.in/assets/img/banking_logo/1.webp" },
    { name: "Axis Bank", img: "https://logiclead.in/assets/img/banking_logo/76aabd7ec028d2927d5af281e82d9394.jpg" },
    { name: "Bank of Maharashtra", img: "https://logiclead.in/assets/img/banking_logo/1fd5be4d78777be064c80de62fda8136.jpg" },
    { name: "Indian Bank", img: "https://logiclead.in/assets/img/banking_logo/66b5169c89ca2c55173cc4f3580418d1.jpg" },
    { name: "LivQuik Technology India", img: "https://logiclead.in/assets/img/banking_logo/livquik_logo.jpg" },
    { name: "South Indian Bank", img: "https://logiclead.in/assets/img/banking_logo/b037d11999aed70e83657233c18675f6.jpg" },
    { name: "Union Bank of India", img: "https://logiclead.in/assets/img/banking_logo/18.png" },
    { name: "Canara Bank", img: "https://logiclead.in/assets/img/banking_logo/c1ef2e91b95eac43bc00afbd580d23a3.jpg" },
    { name: "AU Bank", img: "https://logiclead.in/assets/img/banking_logo/20.webp" },
    { name: "Bandhan Bank", img: "https://logiclead.in/assets/img/banking_logo/4ae8ee4f8f839bab7ceb8501e4555763.jpg" },
];

const ProviderWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter providers based on search input
    const filteredProviders = providers.filter((provider) =>
        provider.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="    max-w-7xl mx-auto">
            {/* Search Box */}
            <div className="search-container my-4 text-center">
                <Image src={'/assets/images/logo/bharat.png'} className="w-24 h-14 object-contain" width={800} height={800} alt="bharat connect" />
                <h3 className="text-xl font-semibold mb-4">Select your FasTag Providers</h3>
                <div className="relative max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search Providers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-400 rounded-xl shadow-sm bg-white px-4 py-2 pr-10 focus:outline-none focus:ring-0 focus:ring-gray-400"
                    />
                    <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
            </div>

            {/* Providers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {filteredProviders.length > 0 ? (
                    filteredProviders.map((provider, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-start p-4 gap-4 hover:shadow-lg transition"
                        >
                            <div className="relative w-1/3 h-16">
                                <Image
                                    src={provider.img}
                                    alt={provider.name}
                                    fill
                                    className="object-contain"
                                    style={{ maxHeight: 60 }}
                                />
                            </div>
                            <p className="text-lg font-medium text-center truncate">{provider.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No providers found.</p>
                )}
            </div>
        </section>
    );
};

export default ProviderWithSearch;
