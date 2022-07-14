import React from "react";

import { DiPython,  DiJavascript1, DiJava} from "react-icons/di";
import { FaCloudsmith, FaReact, FaBuffer } from "react-icons/fa";

import SkillsDisplay from "./components/SkillDisplay"
import "./css/skill.css"

function Skills(props) {


	const skills = [
		["Python", "test", <DiPython/>],
		["Javascript", "test", <DiJavascript1/>],
		["Java", "test", <DiJava/>],
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
				<h2 id="skills-title"> Skills </h2>
				<p className="skills-description">
					These are the skills I've learned so far
				</p>
				<p className="skills-description">
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
