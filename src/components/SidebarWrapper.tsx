"use client";
import Sidebar from "../components/Sidebar";
import React from "react";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {

    return (
        <div className="panel-container">
            <Sidebar>
            {children}</Sidebar>
        </div>
    );
}
