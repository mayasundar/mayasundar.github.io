"use client";

import { StaticImageData } from "next/image";
import hs from "../../../public/hibiscus-site.jpeg";
import cit from "../../../public/cit.jpeg";
import s from "../../../public/joinstudentstay.jpeg";
import os from "../../../public/observability.jpeg";
import og from "../../../public/outgoing.jpeg";
import mp from "../../../public/mayapaintstudio.jpeg";
import ah from "../../../public/Annetta.jpeg";
import m from "../../../public/mond.jpeg";
import ms from "../../../public/mayasundar.jpeg";
import fq from "../../../public/fourquadrants.jpeg";

export type ProjectTag = "all" | "web" | "mobile" | "design" | "brand";

export interface ProjectData {
    name: string;
    tags: ProjectTag[];
    tools: string[];
    description: string[];
    websiteUrl?: string;
    websiteText?: string;
    blogUrl?: string;
    blogText?: string;
    image: StaticImageData;
    imageAlt: string;
}

export const projectsData: Record<string, ProjectData> = {
    "HibiscusSans": {
        name: "Hibiscus Sans",
        tags: ["all", "design", "web"],
        tools: ["Glyphs", "Next.js"],
        description: [
            "Produced a sans-serif typeface with flared terminals and a handwritten feel. Developed a minisite with Next.js."
        ],
        websiteUrl: "https://hibiscus-sans.vercel.app/",
        websiteText: "website",
        image: hs,
        imageAlt: "hibiscus sans screen"
    },
    "ColumbiaInTech": {
        name: "Columbia in Tech",
        tags: ["all", "web", "brand"],
        tools: ["Figma", "Framer"],
        description: [
            "Created brand assets & designed a simple website to display our organization's goals, events, and initiatives."
        ],
        websiteUrl: "https://columbiaintech.com/",
        websiteText: "website",
        image: cit,
        imageAlt: "columbia in tech screen"
    },
    "FourQuadrants": {
        name: "Four Quadrants",
        tags: ["all", "web"],
        tools: ["Socket.io", "Next.js"],
        description: [
            "A socket.io project that lets users collaboratively create matrices like the NY Mag Approval Matrix."
        ],
        websiteUrl: "https://mayasundar.com/four-quadrants/",
        websiteText: "website",
        image: fq,
        imageAlt: "four quadrants screen"
    },
    "StudentStay": {
        name: "Student Stay",
        tags: ["all", "web", "brand", "design"],
        tools: ["React", "Firebase", "Tailwind", "Figma", "Jira"],
        description: [
            "For 6 months, I worked on designing the brand identity and wireframes for a student-to-student subletting service, developing the website, and devising the product roadmap and requirements.",
            "I led weekly sprint planning meetings, reporting back to the founders with the deployment timeline and MVP progress. I conducted user interviews and incorporated feedback before deployment."
        ],
        image: s,
        imageAlt: "studentstay screen"
    },
    "ObservabilityApp": {
        name: "Observability App",
        tags: ["all", "web"],
        tools: ["React", "Firebase", "Flask"],
        description: [
            "I built a simple web app that displayed some posts, integrating it with application performance monitoring tools.",
            "I architected infrastructure tooling to configure Elasticsearch and Kibana dashboards, log shipping with Filebeat, and tools like Grafana and Prometheus."
        ],
        image: os,
        imageAlt: "observability screen"
    },
    "OutGoing": {
        name: "OutGoing",
        tags: ["all", "mobile", "design"],
        tools: ["React Native", "Express", "Figma"],
        description: [
            "I worked on design and development for a project in my User Interface Design class, where we came up with a design solution to a common problem our fellow students faced – planning and executing outings with friends in NYC.",
            "I worked on the initial brand colors, buttons, and a handful of key wireframes. We worked over three iterations, with 4 user interviews between each iteration. Over a week and a half, we built the app in React Native with an Express/MongoDB backend."
        ],
        image: og,
        imageAlt: "outgoing screen"
    },
    "MayaPaintStudio": {
        name: "mayapaint.studio",
        tags: ["all", "mobile"],
        tools: ["React Native"],
        description: [
            "I created my digital artwork portfolio (painted in Procreate) as a music player.",
            "This was one of my first React Native projects, and figuring out a video embed that worked on both web and mobile was the most challenging problem."
        ],
        websiteUrl: "https://mayapaint-mayasundar.vercel.app/",
        websiteText: "website",
        image: mp,
        imageAlt: "mayapaint.studio screen"
    },
    "AnnettaHomes": {
        name: "Annetta Homes",
        tags: ["all", "web", "design", "brand"],
        tools: ["React", "MongoDB", "Figma", "Blender"],
        description: [
            "I worked on the frontend of the MVP for a real estate startup.",
            "I created brand assets, including the logo, landing page graphics, and animations in Figma and Blender. I built out components for major pages and made styling uniform."
        ],
        image: ah,
        imageAlt: "annetta homes screen"
    },
    "Mond": {
        name: "mond",
        tags: ["all", "mobile"],
        tools: ["React Native", "Flutter", "Firebase"],
        description: [
            "For 6 months, I worked on a mobile app for improving dog-to-dog social interactions & helping dog owners find local parks.",
            "I built out key components and integrated the Google Maps API and a database of dog parks with a search and filter system."
        ],
        image: m,
        imageAlt: "mond screen"
    },
    "MayaSundar": {
        name: "mayasundar.com",
        tags: ["all", "web"],
        tools: ["Next.js"],
        description: [
            "Every so often, I redesign and rebuild my personal website. It's a fun way for me to experiment with new tools & get better with old ones. This version was remodeled in March 2025. Thanks for visiting! ☺︎"
        ],
        websiteUrl: "https://mayasundar.com/",
        websiteText: "website",
        image: ms,
        imageAlt: "portfolio screen"
    },
};
