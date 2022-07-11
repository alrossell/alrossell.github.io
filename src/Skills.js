import React from "react";

import SkillsDisplay from "./components/SkillDisplay"
import "./css/skill.css"

function Skills(props) {

	const skills = {
		"Python": "test",
		"Javascript": "test",
		"Java": "test",
		"Machine Learing": "test",
		"Web Design": "test",
		"Something": "test"
	}

	const skillsItems = Object.keys(skills).map((key) => 
		<li className="skills-item-container"> 
			<SkillsDisplay 
				title = {key}
				description = {skills[key]}
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
