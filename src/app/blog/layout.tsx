"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    const searchParams = useSearchParams();
    const isMini = searchParams.get("mini") === "true";

    return (
        <div className={`blog-content ${isMini ? "mini-blog" : "full-blog"}`}>
            {children}
        </div>
    );
};

export default BlogLayout;