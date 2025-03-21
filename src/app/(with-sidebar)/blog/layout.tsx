"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`blog-content`}>
            {children}
        </div>
    );
};

export default BlogLayout;