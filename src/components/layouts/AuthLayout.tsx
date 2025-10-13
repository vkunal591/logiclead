"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import LoginModal from "../modals/LoginModal";
import InstallPrompt from "../pwa/InstallPrompt";
import Loader from "../common/Loader";
import AuthGuard from "../AuthGuard";
import Wrapper from "../common/Wrapper";
import Sidebar from "../common/Sidebar";


interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { token, loading } = useAuth();

    if (loading) return <Loader />;

    return (
        <div className={`bg-white font-[Inter] min-h-screen ${token ? 'flex' : 'flex flex-col'}`}>
            {!token && (
                <>
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <LoginModal />
                    <Footer />
                </>
            )}

            {token && (
                <AuthGuard>
                    <Sidebar />
                    <Wrapper>{children}</Wrapper>
                </AuthGuard>
            )}
            <InstallPrompt />
        </div>
    );
}

