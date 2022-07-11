import React from "react"

import "../css/projectDisplay.css"

function ProjectDisplay(props) {
	return (
		<div className="project-display">
			<img src="../monkey2.png"/>
			<div className="project-display-text">
				<h3> {props.title} </h3>
				<p> {props.description} </p>
			</div>
			
		</div>
	)
}

export default ProjectDisplay
