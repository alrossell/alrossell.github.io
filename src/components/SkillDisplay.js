import React from "react";

import "../css/skillDisplay.css"

function SkillsDisplay(props) {
	return (
		<div className="skills-display-wrapper">
			<img 
				className = "skills-display-img"
				src="../monkey2.png" 
			/>
			<h3> {props.title} </h3>
			<p> {props.description} </p>
		</div>
	)
}

export default SkillsDisplay
