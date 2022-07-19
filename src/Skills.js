import React from "react";

import { DiPython,  DiJavascript1, DiJava} from "react-icons/di";
import { FaCloudsmith, FaReact, FaBuffer } from "react-icons/fa";

import SkillsDisplay from "./components/SkillDisplay"
import "./css/skill.css"

function Skills(props) {


	const skills = [
		[
			"Python", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit", 
			<DiPython/>
		],
		[
			"Javascript", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit", 
			<DiJavascript1/>
		],
		[
			"Java", 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit", 
			<DiJava/>
		],
		["Machine Learning", "test", <FaCloudsmith/>],
		["Wen Design", "test", <FaReact/>],
		["Something", "test", <FaBuffer/> ]
	]

	const skillsItems = skills.map((object) => 
		<li className="skills-item-container"> 
			<SkillsDisplay 
				title = {object[0]}
				description = {object[1]}
				img = {object[2]}
			/>
		</li>

	)

	return (
		<section id="skills">
			<div id="skills-header-container">
				<h2 className="black-title-text"> Skills </h2>
				<p className="third-order-text">
					These are the skills I've learned so far
				</p>
				<p className="third-order-text">
					However I"m also want to learn new ones
				</p>

			</div>
			<div id="skills-display-wrapper">
				<ul id="skills-list-wrapper">
					{skillsItems}
				</ul>
			</div>
		</section>
	)
}

export default Skills
