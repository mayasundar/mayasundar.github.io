"use client";
import Sidebar from "../components/Sidebar";
import React from "react";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex">
            <Sidebar>
            {children}</Sidebar>
        </div>
    );
}
