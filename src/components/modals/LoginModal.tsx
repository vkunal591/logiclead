"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function LoginModal() {
    const { login, isOpen, setIsOpen } = useAuth();
    const [phone, setPhone] = useState("");

    //   useEffect(() => {
    //     if (!token) setIsOpen(true);
    //   }, [token]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone.trim()) return;

        login(phone);
        setPhone('')
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-800"
                        >
                            ×
                        </button>

                        <div className="text-center mb-4">
                            <h4 className="text-xl font-semibold">Login</h4>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="LoginEmail" className="text-sm font-medium mb-1">
                                    Email / Number
                                </label>
                                <input
                                    type="tel"
                                    id="LoginEmail"
                                    placeholder="Enter your email or number"
                                    required
                                    value={phone}
                                    maxLength={10}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                                        setPhone(value);
                                    }}
                                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                                />

                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
                            >
                                Login
                            </button>

                            <div className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    id="promoCheck"
                                    defaultChecked
                                    className="accent-primary"
                                />
                                <label htmlFor="promoCheck">
                                    Keep me posted about sales and offers
                                </label>
                            </div>

                            <div className="text-center text-xs text-gray-500 mt-4">
                                By proceeding, I accept the{" "}
                                <Link href="/termsConditions" className="text-primary underline">
                                    T&amp;C
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacyPolicy" className="text-primary underline">
                                    Privacy Policy
                                </Link>
                                <br />
                                🔒 Secured by Logiclead
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
