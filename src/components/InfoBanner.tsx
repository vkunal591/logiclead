"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaWallet } from "react-icons/fa";
import WalletModal from "./modals/WalletModal";

interface InfoBannerProps {
    walletBalance?: number;
    profileImg?: string;
    profileName?: string;
}

const InfoBanner: React.FC<InfoBannerProps> = ({
    walletBalance = 0,
    profileImg = "https://logiclead.in/assets/img/new-guest-user-male.svg",
    profileName = "",
}) => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [balance, setBalance] = useState(walletBalance);

    const handleAddMoney = () => {
        setIsWalletOpen(true);
    };

    const handleWalletClose = () => {
        setIsWalletOpen(false);
    };

    // const handleMoneyAdded = (amount: number) => {
    //     setBalance((prev) => prev + amount);
    // };

    return (
        <>
            <div className="fixed  z-[50000] flex lg:hidden items-center justify-between bg-primary border border-green-300 rounded-lg p-4 gap-4">
              <div className="w-1/5" />
                {/* Info Icon */}
                <div className="flex-shrink-0 w-2/5">
                    <Image
                        src="/assets/images/logo/logo.png"
                        alt="Info"
                        width={400}
                        height={400}
                        className="w-full"
                    />
                </div>



                {/* Right Section: Wallet & Profile */}
                <div className="flex items-center gap-4">
                    {/* Wallet Info */}
                    <div
                        onClick={handleAddMoney}
                        className="flex items-center gap-2 px-3 py-1 rounded-md">
                        <FaWallet className="text-lg text-white" />
                        <span className="font-semibold text-white">₹{balance.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Info Banner */}
            <div className="hidden lg:flex items-center justify-between bg-green-100 border border-green-300 rounded-lg p-4 gap-4">
                {/* Info Icon */}
                <div className="flex-shrink-0">
                    <Image
                        src="https://logiclead.in/assets/img/banking_logo/ft_icon.svg"
                        alt="Info"
                        width={40}
                        height={40}
                    />
                </div>

                {/* Info Text */}
                <div className="flex-1">
                    <h4 className="text-green-900 font-semibold text-sm md:text-base">
                        FASTag Recharge &amp; Get Exciting Offers on Every Recharge!
                    </h4>
                </div>

                {/* Right Section: Wallet & Profile */}
                <div className="flex items-center gap-4">
                    {/* Wallet Info */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md">
                        <FaWallet className="text-lg" />
                        <span className="font-semibold">₹{balance.toFixed(2)}</span>
                        <button
                            onClick={handleAddMoney}
                            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md text-xs"
                        >
                            Add Money
                        </button>
                    </div>

                    {/* Profile Info */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={profileImg}
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full border border-gray-300"
                        />
                        {profileName && (
                            <div className="text-sm font-medium">{profileName}</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Wallet Modal */}
            {isWalletOpen && (
                <WalletModal
                    isOpen={isWalletOpen}
                    onClose={handleWalletClose}
                    balance={balance}
                    setBalance={setBalance}
                />
            )}
        </>
    );
};

export default InfoBanner;
