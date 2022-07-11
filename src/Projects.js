import React from "react";

import "./css/projects.css"

import ProjectDisplay from "./components/ProjectDisplay"


function Projects(props) {
	const projects = {
		"Lux AI": "conv net",
		"Connect Four": "C++",
		"Turing Machine": "Web",
		"Haiku": "OpenAI"
	}

	const projectItems = Object.keys(projects).map((key) => 
		<li className="skills-item-container"> 
			<ProjectDisplay 
				title = {key}
				description = {projects[key]}
			/>
		</li>
		)

	return (
		<section id="projects">
			<div id="projects-wrapper">
				<div id="projects-header-wrapper">		
					<h1>Projects</h1>
					<h2>Projects Descriptions</h2>
				</div>
				<div id="projects-display-wrapper">
					<ul id="projects-list-wrapper">
						{projectItems}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Projects
