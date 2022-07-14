import React from "react";

import "./css/projects.css"

import ProjectDisplay from "./components/ProjectDisplay"


function Projects(props) {

	const projects = [
		[
			"Lux AI",
			"Something",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		],
		[
			"Connect Four",
			"Somehting",
			"somehting"
		],
		[
			"Connect Four",
			"Somehting",
			"somehting"
		],
		[
			"Connect Four",
			"Somehting",
			"somehting"
		]
	]

	const projectItems = projects.map((project) => 
		<li className="projects-item-container"> 
			<ProjectDisplay 
				title = {project[0]}
				subTitle = {project[1]}
				description = {project[2]}
			/>
		</li>
		)

	return (
		<section id="projects">
			<div id="projects-wrapper">
				<div id="projects-header-wrapper">		
					<h3 className="white-title-text">Projects</h3>
					<p className="third-order-text">Here some of the project I've done so far</p>
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
