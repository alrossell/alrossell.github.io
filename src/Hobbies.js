import React from "react";
import HobbiesDisplay from "./components/HobbiesDisplay";

import "./css/hobbies.css";

import linux from "./assets/linux.jpeg";
import nerual from "./assets/nerual.jpeg";
import switches from "./assets/switches.jpg"

function Hobbies() {

	const hobbies = [
		[
			"Linux", 
			"I go interested in Linux after taking an operating system class, \
			which introduced me to it. I used Ubuntu in a virtual machine and \
			I really prefered it over using Windows, which I was using before. \
			I decided to switch over to Linux recently, installing Pop!_OS on \
			my labtop and Arch on my desktop.",
			linux
		],
		[
			"AI", 
			"It took me awhile to get into AI during my Computer Science career. \
			What really got me into the field was being introduced to nerual \
			networks which for me was the prefect mixture of math and computer \
			science to create fun models which are able todo things that would \
			have seen impossible before.",
			nerual
		],
		[
			"Mechinal Keyboards", 
			"Even though mechinal keyboards aren't directally related to \
			Computer Science, typing out code is. And I finding the right \
			keyboard that makes typing as pleasing as possible really helps \
			during coding at times. This way I've built several different \
			keyboards to find the right experience for myself.",
			switches
		],
	]

	const hobbiesItems = hobbies.map((hobby, index) => 
		<li key = {index} className="hobbies-item-container"> 
			<HobbiesDisplay 
				title = {hobby[0]}
				description = {hobby[1]}
				image = {hobby[2]}
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
					things that I enjoy in cs land or related to cs
				</p>
			</div>
			<ul id="hobbies-container">
				{hobbiesItems}
			</ul>
		</section>
	)
}

export default Hobbies;
