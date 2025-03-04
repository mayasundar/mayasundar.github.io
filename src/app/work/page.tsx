"use client";
import { useEffect, useRef } from "react";
import { useSidebar, ProjectTag } from "@/components/SidebarContext";
import HibiscusSans from "./components/HibiscusSans";
import ColumbiainTech from "./components/ColumbiaInTech";
import StudentStay from "./components/StudentStay";

const projectsData = {
    "HibiscusSans": {
        name: "Hibiscus Sans",
        tags: ["all", "design", "web"] as ProjectTag[]
    },
    "ColumbiainTech": {
        name: "Columbia in Tech",
        tags: ["all", "web", "brand"] as ProjectTag[]
    },
    "StudentStay": {
        name: "Student Stay",
        tags: ["all", "web", "mobile", "brand"] as ProjectTag[]
    }
};

const componentsList: Record<string, React.ComponentType> = {
    HibiscusSans,
    ColumbiainTech,
    StudentStay
};

const Work = () => {
    const { visibleComponents, initializeComponents } = useSidebar();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            initializeComponents(
                Object.keys(componentsList),
                "work",
                projectsData
            );
        }
    }, [initializeComponents]);

    return (
        <div>
                {Object.entries(componentsList).map(
                    ([key, Component]) =>
                        visibleComponents[key] && <Component key={key} />
                )}
            </div>
    );
};

export default Work;