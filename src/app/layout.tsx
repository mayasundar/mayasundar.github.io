"use client"
import "./globals.css";
import localFont from "next/font/local";
import React from "react";
import SidebarWrapper from "@/components/SidebarWrapper";
import {useSearchParams} from "next/navigation";

const hibiscus = localFont({
    src: "../../public/HibiscusSans-Regular.otf",
    variable: '--font-hibiscus',
    display: 'swap',
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const isMini = searchParams.get("mini") === "true";

    return (
        <html lang="en">
        {/*<body*/}
        {/*    className={`${hibiscus.className}  bg-[#F9F6F6] text-[#5D5D5D] leading-[1.4] bg-[length:40px_40px] bg-[radial-gradient(circle,rgba(101,116,141,0.46)_1px,rgba(0,0,0,0)_1px)]`}*/}
        {/*>*/}
        <body
            className={`${hibiscus.className}  bg-[#F9F6F6] text-[#5D5D5D] leading-[1.4] bg-[length:40px_40px] bg-[radial-gradient(circle,rgba(93,93,93,0.46)_1px,rgba(0,0,0,0)_1px)]`}
        >

        {/*<body*/}
        {/*    className={`${hibiscus.className}  bg-[#F9F6F6] text-[#5D5D5D] leading-[1.4] bg-[length:20px_20px] bg-[linear-gradient(to_right,rgba(231,229,220,0.26)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,229,220,0.26)_1px,transparent_1px)]`}*/}
        {/*>*/}
        {/*<body*/}
        {/*    className={`${hibiscus.className}  bg-[#F9F6F6] text-[#5D5D5D] leading-[1.4] bg-[length:30px_30px] bg-[radial-gradient(circle,rgba(212,211,203)_1px,rgba(0,0,0,0)_1px)]`}*/}
        {/*>*/}

        {isMini ? children : <SidebarWrapper>{children}</SidebarWrapper>}
        </body>
        </html>
    );
}
