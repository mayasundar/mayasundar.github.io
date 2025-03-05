"use client";
import { useEffect, useRef } from "react";
import { useSidebar, ProjectTag } from "@/components/SidebarContext";
import HibiscusSans from "@/app/projects/components/HibiscusSans";
import ColumbiainTech from "@/app/projects/components/ColumbiaInTech";
import StudentStay from "@/app/projects/components/StudentStay";
import ObservabilityApp from "@/app/projects/components/ObservabilityApp";
import OutGoing from "@/app/projects/components/OutGoing";
import AnnettaHomes from "@/app/projects/components/AnnettaHomes";
import FourQuadrants from "@/app/projects/components/FourQuadrants";
import MayaSundar from "@/app/projects/components/MayaSundar";
import MayaPaintStudio from "@/app/projects/components/MayaPaintStudio";
import Mond from "@/app/projects/components/Mond";

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
        tags: ["all", "web", "brand", "design"] as ProjectTag[]
    },
    "ObservabilityApp": {
        name: "Observability App",
        tags: ["all", "web"] as ProjectTag[]
    },
    "OutGoing": {
        name: "OutGoing",
        tags: ["all", "mobile", "design"] as ProjectTag[]
    },
    "MayaPaintStudio": {
        name: "mayapaint.studio",
        tags: ["all", "mobile"] as ProjectTag[],
    },
    "AnnettaHomes": {
        name: "Annetta Homes",
        tags: ["all", "web", "design", "brand"] as ProjectTag[],
    },
    "Mond": {
        name: "mond",
        tags: ["all", "mobile"] as ProjectTag[],
    },
    "MayaSundar": {
        name: "mayasundar.com",
        tags: ["all", "web"] as ProjectTag[],
    },
    "FourQuadrants": {
        name: "Four Quadrants",
        tags: ["all", "web"] as ProjectTag[],
    },

};

const componentsList: Record<string, React.ComponentType> = {
    HibiscusSans,
    FourQuadrants,
    ColumbiainTech,
    StudentStay,
    ObservabilityApp,
    OutGoing,
    MayaPaintStudio,
    AnnettaHomes,
    Mond,
    MayaSundar,
};

const Projects = () => {
    const { visibleComponents, initializeComponents } = useSidebar();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            initializeComponents(
                Object.keys(componentsList),
                "projects",
                projectsData
            );
        }
    }, [initializeComponents]);

    return (
        <div>
            <h3>Projects ☺&#xFE0E;</h3>

            <div className="tbox">
                {Object.entries(componentsList).map(
                    ([key, Component]) =>
                        visibleComponents[key] && (
                            <div key={key} data-component-id={key}>
                                <Component />
                            </div>
                        )
                )}
            </div>
            </div>
    );
};

export default Projects;