"use client";

import React from "react";

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: {
        name?: string;
        email?: string;
        mobile?: string;
        role?: string;
        avatar?: string;
    };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[50] flex items-center justify-center bg-black/50 p-4 ">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* Header */}
                <div className="flex item-center justify-center gap-2 items-center mb-2">
                    <h4 className="text-xl text-center text-gray-900 font-semibold">{'Help and Support'}</h4>
                </div>

                {/* Body */}
                <div className="flex flex-col item-center justify-between gap-2 text-gray-800">
                    <div className="flex item-center justify-between gap-2">
                        <label className="text-sm font-medium py-3">Name:</label>
                        <input
                            type="text"
                            value={user?.name || ""}
                            disabled
                            className="bg-transparent border-none border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-not-allowed"
                        />
                    </div>

                    <div className="flex item-center justify-between gap-2">
                        <label className="text-sm font-medium py-3">Email:</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            disabled
                            className="bg-transparent border-none border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-not-allowed"
                        />
                    </div>

                    <div className="flex item-center justify-between gap-2">
                        <label className="text-sm font-medium py-3">Mobile Number:</label>
                        <input
                            type="tel"
                            value={user?.mobile || ""}
                            disabled
                            className="bg-transparent border-none border-gray-300 rounded-lg px-3 py-2 text-gray-700 cursor-not-allowed"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
