import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const hibiscus = localFont({
    src: "../../public/HibiscusSans-Regular.otf",
    variable: '--font-hibiscus'
});

export const metadata: Metadata = {
    title: "Maya Sundar",
    description: "My personal website and project portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className={`${hibiscus.className}  bg-[#EEEEEE] text-[#65748D] leading-[1.4] bg-[length:40px_40px] bg-[radial-gradient(circle,rgba(101,116,141,0.46)_1px,rgba(0,0,0,0)_1px)]`}
        >
            {/*<Navbar />*/}
            <Sidebar>{children}</Sidebar>
        </body>
        </html>
    );
}
