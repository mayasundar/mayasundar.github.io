"use client";
import React, {ReactNode} from "react";
import Link from "next/link";
import { SidebarProvider, useSidebar, ProjectTag } from "./SidebarContext";
import Image from 'next/image';
import Navbar from './Navbar';
import Eye from '/public/eye.svg';
import {usePathname} from "next/navigation";

const workGroups: { id: ProjectTag; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "design", label: "Design" },
    { id: "brand", label: "Brand" }
];

const Sidebar = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider>
            <div className="container">

                <div className="sidebar">
                    <SidebarContent />
                </div>

                <div className="content tab-content pages-layers overflow-y-auto">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
};

const SidebarContent = () => {
    const { components, activeGroup, setActiveGroup, toggleComponentVisibility, visibleComponents } = useSidebar();
    const pathname = usePathname();
    const isWorkPage = pathname?.startsWith("/projects");

    const pages = [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" }
    ];

    const handleComponentClick = (componentId: string) => {
        const targetElement = document.querySelector(`[data-component-id="${componentId}"]`);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="panel-container">
            <Navbar></Navbar>
            <div className="pages-layers">
                <div>
                <p className="text-sm font-semibold text-gray-600">Pages</p>
                    <div className="layer-group-container">
                        <div className="space-y-1">
                        {pages.map((page) => (
                        <Link
                            key={page.path}
                            href={page.path}
                            className={`layer-button ${pathname === page.path ? "active" : ""}`}
                        >
                            {page.name}
                        </Link>
                    ))}
                        </div>
                </div>
                </div>

                <div>
                    <p className="text-sm font-semibold text-gray-600">Layers</p>
                    {isWorkPage && (
                        <div className="layer-group-container">
                            <div className="space-y-1">
                                {workGroups.map((group) => (
                                    <div key={group.id}>
                                        <button
                                            onClick={() => setActiveGroup(group.id)}
                                            className={`layer-group-label ${activeGroup === group.id ? "active" : ""}`}
                                        >
                                            {group.label}
                                        </button>

                                        {activeGroup === group.id && (
                                            <div className="space-y-1">
                                                {Object.values(components)
                                                    .filter(comp => comp.tags.includes(activeGroup) || activeGroup === "all")
                                                    .map((component) => (
                                                        <p key={component.id} className="layer-button"
                                                           onClick={() => handleComponentClick(component.id)}
                                                        >

                                                            <Image
                                                                src={Eye}
                                                                alt="Toggle visibility"
                                                                width={17}
                                                                height={17}
                                                                className={`cursor-pointer ${visibleComponents[component.id] ? "opacity-90" : "opacity-50"}`}
                                                                onClick={() => toggleComponentVisibility(component.id)}
                                                            />
                                                            <label htmlFor={`component-${component.id}`}
                                                                   className="cursor-pointer"
                                                            >
                                                                {component.name}
                                                            </label>
                                                        </p>
                                                    ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {!isWorkPage && Object.keys(components).length > 0 && (
                        <div className="layer-group-container">

                        <div className="space-y-1">
                            {Object.values(components).map((component) => (
                                <p key={component.id} className="layer-button">
                                    <Image
                                        src={Eye}
                                        alt="Toggle visibility"
                                        width={17}
                                        height={17}
                                        className={`cursor-pointer ${visibleComponents[component.id] ? "opacity-90" : "opacity-50"}`}
                                        onClick={() => toggleComponentVisibility(component.id)}
                                    />
                                    <label htmlFor={`component-${component.id}`} className="cursor-pointer">
                                        {component.name}
                                    </label>
                                </p>
                            ))}
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;