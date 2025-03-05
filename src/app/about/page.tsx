"use client";

import { useEffect, useRef } from "react";
import { useSidebar } from "@/components/SidebarContext";
import Interests from "./components/Interests";
import Hobbies from "./components/Hobbies";
import Involvement from "./components/Involvement";

const componentsList = {
    Interests: Interests,
    Hobbies: Hobbies,
    Involvement: Involvement,
};

const About = () => {
    const { visibleComponents, initializeComponents } = useSidebar();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            initializeComponents(
                Object.keys(componentsList),
                "about"
            );
        }
    }, [initializeComponents]);

    return (
        <div>
            <h3>About Me ☺&#xFE0E;</h3>
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

export default About;