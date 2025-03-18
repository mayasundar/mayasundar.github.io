"use client"
import "../globals.css";
import localFont from "next/font/local";
import React from "react";
import SidebarWrapper from "@/components/SidebarWrapper";

const hibiscus = localFont({
    src: "../../../public/HibiscusSans-Regular.otf",
    variable: '--font-hibiscus',
    display: 'swap',
});


export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {

    return (
        <SidebarWrapper>{children}</SidebarWrapper>
    );
}
