"use client";
import React from "react";
import Image from "next/image";
import { useSidebar } from "../../../components/SidebarContext";
import { projectsData } from "./projectData";

const Grid = () => {
    const { visibleComponents } = useSidebar();

    return (
        <div>
            <h3>Projects Grid View ☺&#xFE0E;</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.keys(projectsData).map(
                    (key) => {
                        if (!visibleComponents[key]) return null;

                        const project = projectsData[key];

                        return (
                            <div
                                key={key}
                                className="bg-white p-4 rounded-lg shadow-md"
                                data-component-id={key}
                            >
                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                                <div className="mb-4">
                                    {project.websiteUrl && (
                                        <a
                                            className="website mr-3"
                                            href={project.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.websiteText || "website"}
                                        </a>
                                    )}

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tools.map((tool, index) => (
                                            <div key={index} className="tool">
                                                {tool}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    {project.description.map((paragraph, index) => (
                                        <p key={index} className="mb-2">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className="rounded-md w-full"
                                    />
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Grid;