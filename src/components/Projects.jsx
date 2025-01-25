import React from "react";

import projects from "../data/projects";

import SectionHeader from "./SectionHeader";
import ProjectCardPrimary from "./ProjectCardPrimary";
import ProjectCardSecundary from "./ProjectCardSecundary";

const Projects = () => (

    <section className="tiny-content">
        <SectionHeader text="Proyectos" icon="folder-open" />

        <div className="space-y-10">
            <div className="space-y-6">
                <ProjectCardPrimary
                    project={projects[0]}
                    colors={projects[0].colors} />
                <ProjectCardPrimary
                    project={projects[1]}
                    colors={projects[1].colors}
                    inverted={true} />
                {/* <ProjectCardPrimary
                    project={projects[2]}
                    colors={projects[2].colors} /> */}
            </div>


            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => {
                    if (index < 2) return null;
                    return (
                        <ProjectCardSecundary
                            key={index}
                            project={project}
                        />
                    );
                })}
            </div>

        </div>

    </section>
);

export default Projects;
