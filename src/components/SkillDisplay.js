import React from "react";

import "../css/skillDisplay.css"

function SkillsDisplay(props) {
	return (
		<div className="skills-display-wrapper">
			<div className="skills-display-icon">	
				{props.img}	
			</div>
			<h3> {props.title} </h3>
			<p className="third-order-text"> {props.description} </p>
		</div>
	)
}

export default SkillsDisplay
