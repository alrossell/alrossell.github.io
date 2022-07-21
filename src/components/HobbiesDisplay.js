import React from "react"

import "../css/hobbiesDisplay.css"

function HobbiesDisplay(props) {
	return (
		<div className="hobbies-display-container">
			<img src = {props.image}/>
			<div className="hobbies-display-text-container">
				<h4 className="second-black-text"> 
					<b> {props.title} </b> 
				</h4>
				<p className="third-order-text"> 
					{props.description} 
				</p>
			</div>
		</div>
	)
}

export default HobbiesDisplay
