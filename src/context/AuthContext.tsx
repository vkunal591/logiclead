"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthContextType {
    token: string | null;
    user: string | null;
    login: (userNumber: string) => void;
    logout: () => void;
    loading: boolean;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState<string | null>(null)


    // Load user from localStorage when app starts
    useEffect(() => {
        const storedToken = localStorage.getItem("adminToken");
        console.log(storedToken)
        if (storedToken) {
            setUser(storedToken);
            setToken(storedToken)
        }
        setLoading(false);
    }, []);

    // Save user to localStorage on login
    const login = (userNumber: string) => {
        localStorage.setItem("adminToken", userNumber);
        setToken(userNumber)
        setUser(userNumber);
        router.replace('/')

    };

    // Remove user from localStorage on logout
    const logout = () => {
        localStorage.removeItem("adminToken");
        setToken(null)
        setUser(null);
        router.replace('/')
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout, loading, isOpen, setIsOpen }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook for easy usage
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
