import React from "react"
import {useState} from 'react';
import { AiFillMail, AiFillFileText } from "react-icons/ai";

import './css/nav.css'

function Nav(props) {
	const [isActive, setIsActive] = useState(false);
	
	function toggleNav() {
		document.getElementById("nav-links-container")
	}

	return (
		<nav id="nav">
			<a href="#header" id="nav-name-wrapper">
				<b>Andrew Rossell</b>
			</a>

			<button id="nav-button" className="test">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<ul id="nav-links-container" className="test">
			   <li className="nav-bar-item">
					<a href="#about"> ABOUT </a>
				</li>
				<li className="nav-bar-item">
					<a href="#skills"> SKILLS </a>		
				</li>
				<li className="nav-bar-item">
					<a href="#projects"> PROJECTS </a>
				</li>
				<li className="nav-bar-item">
					<a href="#hobbies"> HOBBIES </a>
				</li>
				<li className="nav-bar-item">
					<a>
						RESUME
						<AiFillFileText className="nav-icon"/>													
					</a>
				</li>
				<li className="nav-bar-item">
					<a> 
						CONTACT
						<AiFillMail className="nav-icon"/>
					</a>
				</li>
			 </ul>

		</nav>
	)
}

export default Nav
