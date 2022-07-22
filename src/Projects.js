import React from "react";

import "./css/projects.css"

import ProjectDisplay from "./components/ProjectDisplay"

import lux from "./assets/lux-ai.png";
import connect from "./assets/connect-four.jpg";
import lstm from "./assets/lstm.jpg";
import turing from "./assets/turing.png";

function Projects(props) {

	const projects = [
		[
			"Lux AI",
			"Python, Pytorch, Nerual Networks",
			"Lux AI was an AI challenge to create an agent that could play \
			a strategy game, collect resources, manage workers, and create \
			units. We appourch this project by having the agent using \
			convolution nerual networks. We trained the agent through reinforcement \
			learning with data we collected on Kaggle.",
			lux,
			""
		],
		[
			"Connect Four",
			"C++, WebAssembly",
			"A Connect Four webapp game where the user can play against a bot. \
			The front end would made with React and both the backend and the \
			algorithm are powered through WebAssembly. The backend amd the \
			algorthm was both orignally developed using C++ then it was \
			tranpilered to WebAssembly. The bot uses MiniMax algorthim \
			optimize with alpha-beta pruning and transposition tables. It can \
			predict 12 moves ahead in C++ and 10 moves ahead in WebAssembly.",
			connect,
			"https://github.com/alrossell/Connect4WASM"
		],
		[
			"Haiku Generator",
			"Python, LSTM",
			"A Haiku generator that takes in desired syllobls counts and theme. \
			We created two differnet models for this project. The first model was \
			a character-to-character model which generator (idk). The second model \
			using OpenAI's GPT-3 which generators models (idk).",
			lstm,
			""
		],
		[
			"Turing Machine Simulator",
			"Javascript, React",
			"A webapp the can simulator a two way infinite tape Turing machine, \
			given the rules and it's initial tape. The webapp uses Javascript and \
			React for both it's frontend and it's backend.",
			turing,
			"https://github.com/alrossell/Turing"
		]
	]

	const projectItems = projects.map((project, index) => 
		<li key={index} className="projects-item-container"> 
			<ProjectDisplay 
				title = {project[0]}
				subTitle = {project[1]}
				description = {project[2]}
				image = {project[3]}
				link = {project[4]}
			/>
		</li>
		)

	return (
		<section id="projects">
			<div id="projects-wrapper">
				<div id="projects-header-wrapper">		
					<h3 className="black-title-text">Projects</h3>
					<p className="third-order-text">Here some of the project I've done so far</p>
				</div>
				<div id="projects-display-wrapper">
					<ul id="projects-list-wrapper">
						{projectItems}
					</ul>
				</div>
				<div id="projects-github-wrapper">
					<p>
						<b className="first-order-text">
							If you want see more projects visit my...
						</b>
					</p>
					<a href="https://github.com/alrossell/" target="_blank" rel="noopener noreferrer">
						<b>
							Github
						</b>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Projects
