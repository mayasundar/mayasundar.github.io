"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type ProjectTag = "all" | "web" | "mobile" | "design" | "brand";

export interface ProjectComponent {
    id: string;
    name: string;
    tags: ProjectTag[];
    visible: boolean;
}

interface SidebarContextType {
    components: Record<string, ProjectComponent>;
    activeGroup: ProjectTag;
    visibleComponents: Record<string, boolean>;
    initializeComponents: (componentIds: string[], pageKey: string) => void;
    setActiveGroup: (group: ProjectTag) => void;
    toggleComponentVisibility: (componentId: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [components, setComponents] = useState<Record<string, ProjectComponent>>({});
    const [activeGroup, setActiveGroup] = useState<ProjectTag>("all");
    const [currentPage, setCurrentPage] = useState<string>("");

    const visibleComponents = Object.entries(components).reduce((acc, [id, component]) => {
        acc[id] = component.visible &&
            (activeGroup === "all" || component.tags.includes(activeGroup));
        return acc;
    }, {} as Record<string, boolean>);

    const initializeComponents = useCallback((
        componentIds: string[],
        pageKey: string,
        componentsData: Record<string, { name: string, tags: ProjectTag[] }> = {}
    ) => {
        if (currentPage !== pageKey) {
            setCurrentPage(pageKey);

            const newComponents: Record<string, ProjectComponent> = {};

            componentIds.forEach(id => {
                const componentData = componentsData[id] || {
                    name: id,
                    tags: ["all"]
                };
                newComponents[id] = {
                    id,
                    name: componentData.name,
                    tags: componentData.tags,
                    visible: true
                };
            });

            setComponents(newComponents);
            setActiveGroup("all");
        }
    }, [currentPage]);

    const toggleComponentVisibility = useCallback((componentId: string) => {
        setComponents(prev => ({
            ...prev,
            [componentId]: {
                ...prev[componentId],
                visible: !prev[componentId].visible
            }
        }));
    }, []);

    return (
        <SidebarContext.Provider
            value={{
                components,
                activeGroup,
                visibleComponents,
                initializeComponents,
                setActiveGroup,
                toggleComponentVisibility
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("You forgot the SidebarProvider");
    }
    return context;
};