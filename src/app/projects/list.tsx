"use client";
import { useSidebar, ProjectTag } from "../../components/SidebarContext";
import { projectsData } from "./projectData";
import Image from "next/image";

const List = () => {
    const { visibleComponents, setActiveGroup } = useSidebar();
    const handleTagClick = (tag: ProjectTag) => {
        const validTags: ProjectTag[] = ["all", "web", "mobile", "design", "brand"];
        if (validTags.includes(tag)) {
            setActiveGroup(tag);
        }
    };

    return (
        <div>
            <h3>Projects ☺&#xFE0E;</h3>
            <div>
                {Object.entries(projectsData).map(
                    ([key, project]) =>
                        visibleComponents[key] && (
                            <div key={key} data-component-id={key}>
                                <div className="tbox ">

                                    <div className="flex items-baseline gap-6">
                                        <div>
                                            <h3>{project.name}</h3>
                                        </div>
                                        <div >
                                            {project.websiteUrl && (
                                                <a
                                                    className="website"
                                                    href={project.websiteUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {project.websiteText || "website"}
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-baseline map">
                                        {project.tags.map((tag, index)=>(
                                            <a key={index}
                                               className="tag"
                                               onClick={() => handleTagClick(tag)}
                                            >{tag}</a>
                                        ))}
                                    {project.tools.map((tool, index) => (
                                        <div key={index} className="tool"
                                        >{tool}</div>
                                    ))}
                                    </div>

                                    <div>
                                        {project.description.map((desc, index) => (
                                            <p key={index}>{desc}</p>
                                        ))}
                                    </div>

                                    <div>
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default List;