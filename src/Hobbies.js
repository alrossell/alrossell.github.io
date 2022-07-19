import React from "react";
import HobbiesDisplay from "./components/HobbiesDisplay"

import "./css/hobbies.css"

function Hobbies() {

	const hobbies = [
		[
			"Linux", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
		],
		[
			"AI", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
		],
		[
			"Something?", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
		],
	]

	const hobbiesItems = hobbies.map((hobby) => 
		<li className="hobbies-item-container"> 
			<HobbiesDisplay 
				title = {hobby[0]}
				description = {hobby[1]}
			/>
		</li>
	)


	return (
		<section id="hobbies">
			<div id="hobbies-title-container">
				<h4 className="black-title-text">
					Hobbies
				</h4>
				<p className="third-order-text">
					things that I enjoy in sc land
				</p>
			</div>
			<ul id="hobbies-container">
				{hobbiesItems}
			</ul>
		</section>
	)
}

export default Hobbies;
