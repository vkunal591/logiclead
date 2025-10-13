"use client";

import React, { useState } from "react";

interface WalletModalProps {
    isOpen: boolean;
    balance: number;
    onClose: () => void;
    // handleMoneyAdded: () => void;
    setBalance: (amount: number) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, balance, setBalance }) => {
    const fixedAmounts = [500, 1000, 1500, 2000];
    const [amount, setAmount] = useState<number | "">("");
    const [method, setMethod] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleFixedAmountClick = (value: number) => {
        setAmount(value);
    };

    const handleSubmit = () => {
        if (!amount || !method) return alert("Please enter amount and select method.");
        setBalance(balance + amount)
        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-900"
                    onClick={() => {
                        setSubmitted(false);
                        onClose();
                    }}
                >
                    ×
                </button>

                {!submitted ? (
                    <>
                        <h3 className="text-center text-lg font-semibold mb-4">Add Money</h3>

                        {/* Fixed Amount Buttons */}
                        <div className="flex justify-between mb-3 flex-wrap gap-2">
                            {fixedAmounts.map((amt) => (
                                <button
                                    key={amt}
                                    type="button"
                                    className={`px-4 py-2 rounded-lg border ${amount === amt ? "bg-primary text-white" : "bg-gray-100"
                                        }`}
                                    onClick={() => handleFixedAmountClick(amt)}
                                >
                                    ₹{amt}
                                </button>
                            ))}
                        </div>

                        <div className="text-center mb-3 font-semibold">OR</div>

                        {/* Custom Amount */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium mb-1">Enter Amount</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                            />
                        </div>

                        {/* Payment Method */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium mb-1">Payment Method</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={method}
                                onChange={(e) => setMethod(e.target.value)}
                            >
                                <option value="">Select Method</option>
                                <option value="upi">UPI</option>
                                <option value="card">Card</option>
                            </select>
                        </div>

                        {/* Proceed Button */}
                        <button
                            type="button"
                            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition"
                            onClick={handleSubmit}
                        >
                            Proceed
                        </button>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
                        <p className="text-gray-700">₹{amount} has been added successfully via {method.toUpperCase()}.</p>
                        <button
                            className="mt-4 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/90 transition"
                            onClick={() => {
                                setSubmitted(false);
                                setAmount("");
                                setMethod("");
                                onClose();
                            }}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WalletModal;
