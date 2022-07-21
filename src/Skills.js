import React from "react";

import { DiPython,  DiJavascript1, DiJava} from "react-icons/di";
import { FaCloudsmith, FaReact, FaBuffer } from "react-icons/fa";

import SkillsDisplay from "./components/SkillDisplay"
import "./css/skill.css"

function Skills(props) {

	const skills = [
		[
			"Python",
			"I've been using Python for over two years now, through doing \
			classwork and personal projects. I've used it to create AI project \
			such as my Lux AI project and Haiku generator.",
			<DiPython/>
		],
		[
			"JavaScript, HTML, CSS",
			"With three years of Javascript, HTML, and CSS, I've used utilizing it in both various \
			class projects and personal projects. I used them to create this website.", 
			<DiJavascript1/>
		],
		[
			"C++", 
			"I picked up C++ half a year ago for a senior project. I tought myself C++ \
			to create a connect four game and the Minimax algorthim that solves it.",
			<DiJava/>
		],
		[
			"Pytorch", 
			"I've been using Pytorch for over a year to for classworks and personal project. \
			I used Pytorch for creating my model in my Lux-AI project.",
			 <FaCloudsmith/>
		],
		[
			"React", 
			"Over the last two years, I've been using React for perosnal projects and currently \
			learning even more about it with current personal project. I used it to create my \
			Turing machine simulator webapp.", 
			<FaReact/>
		],
	]

	const skillsItems = skills.map((object, index) => 
		<li key={index} className="skills-item-container"> 
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
					However I'm always looks for new and exciting ones to learn
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
