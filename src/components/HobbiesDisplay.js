import React from "react"

import "../css/hobbiesDisplay.css"

function HobbiesDisplay(props) {
	return (
		<div className="hobbies-display-container">
			<h4 className="second-black-text"> 
				<b> {props.title} </b> 
			</h4>
			<p className="third-order-text"> 
				{props.description} 
			</p>
		</div>
	)
}

export default HobbiesDisplay
