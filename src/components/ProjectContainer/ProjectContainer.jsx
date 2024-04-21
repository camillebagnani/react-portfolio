import Project from "../Project/Project"
import { projectsData } from "../Project/Project"
import './ProjectContainer.css'

export default function ProjectContainer () {
    return (
        <>
        <div className="projects-container">
            {projectsData.map((project, index) => (
                         <Project
                         key={index}
                         title={project.title}
                         imageLink={project.imageLink}
                         highlights={project.highlights}
                         deployedApp={project.deployedApp}
                         repo={project.repo}
                     />
            ))}
        
        </div>
        </>
    )
}