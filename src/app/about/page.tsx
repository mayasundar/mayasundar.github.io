"use client";

import { useEffect, useRef } from "react";
import { useSidebar } from "@/components/SidebarContext";
import Interests from "./components/interests";
import Hobbies from "./components/hobbies";
import Involvement from "./components/involvement";

const componentsList = {
    interests: Interests,
    hobbies: Hobbies,
    involvement: Involvement,
};

const About = () => {
    const { visibleComponents, initializeComponents } = useSidebar();
    const initialized = useRef(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            initializeComponents(
                Object.keys(componentsList),
            );
        }
    }, [initializeComponents]);

    return (
        <div>
            <h3>About Me ☺&#xFE0E;</h3>
            <div className="tbox">
                {Object.entries(componentsList).map(
                    ([key, Component]) =>
                        visibleComponents[key] ? <Component key={key} /> : null
                )}
            </div>
        </div>
    );
};

export default About;