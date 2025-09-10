import React, { createContext, useContext, useEffect, useState } from "react";

export interface User {
    id: string;
    fullName: string;
    email: string;
}

interface AuthState {
    user: User | null;
    login: (email: string, name: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // učitaj iz LS pri mount-u
    useEffect(() => {
        const raw = localStorage.getItem("auth_user_v1");
        if (raw) setUser(JSON.parse(raw));
    }, []);

    const login = (email: string, name: string) => {
        const u: User = { id: crypto.randomUUID(), fullName: name || "User", email };
        setUser(u);
        localStorage.setItem("auth_user_v1", JSON.stringify(u));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth_user_v1");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
