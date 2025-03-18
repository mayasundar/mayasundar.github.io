"use client";
import { useEffect, useRef, useState } from "react";
import { useSidebar } from "../../components/SidebarContext";
import List from "@/app/projects/list";
import {projectsData} from "./projectData";

const Projects = () => {
    // const [activeView, setActiveView] = useState<ViewType>("list");
    const { visibleComponents, initializeComponents } = useSidebar();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            initializeComponents(
                Object.keys(projectsData),
                "projects",
                projectsData
            );
        }
    }, [initializeComponents]);

    return (
        <div>
            {/*<h3>Projects ☺&#xFE0E;</h3>*/}
            <div className="flex space-x-2">
                {/*<button*/}
                {/*    onClick={() => setActiveView("list")}*/}
                {/*    className={`px-4 py-2 rounded ${*/}
                {/*        activeView === "list"*/}
                {/*            ? "bg-blue-500 text-white"*/}
                {/*            : "bg-gray-200"*/}
                {/*    }`}*/}
                {/*>*/}
                {/*    List View*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    onClick={() => setActiveView("grid")}*/}
                {/*    className={`px-4 py-2 rounded ${*/}
                {/*        activeView === "grid"*/}
                {/*            ? "bg-blue-500 text-white"*/}
                {/*            : "bg-gray-200"*/}
                {/*    }`}*/}
                {/*>*/}
                {/*    Grid View*/}
                {/*</button>*/}
            </div>
            {/*<div className="flex-grow">*/}
            {/*    {activeView === "list" ? <List /> : <Grid />}*/}
            {/*</div>*/}
             <List/>
            </div>
    );
};

export default Projects;