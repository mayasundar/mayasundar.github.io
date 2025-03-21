"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from "@/components/SidebarContext";
import {PostData} from "../../lib/markdown";

interface SidebarInitializerProps {
    posts: PostData[];
}

export default function SidebarInitializer({ posts }: SidebarInitializerProps) {
    const { initializeComponents } = useSidebar();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            const componentsList = {};
            posts.forEach(post => {
                componentsList[post.slug] = {
                    name: post.title,
                    tags: ["all"]
                };
            });

            initialized.current = true;
            initializeComponents(
                Object.keys(componentsList),
                "blog",
                componentsList
            );
        }
    }, [initializeComponents, posts]);
    return null;
}