import React from "react"

import "../css/projectDisplay.css"

function ProjectDisplay(props) {
	return (
		<div className="project-display">
			<img src="../monkey2.png"/>
			<div className="project-display-bar"/>
			<div className="project-display-text">
				<h4 className="first-order-text"> 
					<b> {props.title} </b> 
				</h4>
				<p className="second-order-text"> 
					{props.subTitle} 
				</p>
				<p className="third-order-text"> 
					{props.description} 
				</p>
			</div>
			
		</div>
	)
}

export default ProjectDisplay
