import React from "react"

import "../css/projectDisplay.css"

function ProjectDisplay(props) {
	return (
		<div className="project-display">
			<img src={props.image}/>
			<div className="project-display-bar"/>
			<div className="project-display-text">
				<h4> 
					<a href={props.link} className="first-order-text" target="_blank" rel="noopener noreferrer">
						<b> {props.title} </b> 
					</a>
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
