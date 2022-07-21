import React from "react"
import { AiFillMail, AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



import './css/nav.css'

function Nav(props) {	
    const navigate = useNavigate();
	return (
		<nav id="nav">
			<a href="#header" id="nav-name-wrapper">
				<b>Andrew Rossell</b>
			</a>

			<button id="nav-button" className="test">
				<span></span>
				<span></span>
				<span></span>
				<div></div>
			</button>

			<ul id="nav-links-container" className="test">
			   <li className="nav-bar-item">
					<a href="#about"> 
						ABOUT
					</a>

				</li>
				<li className="nav-bar-item">
					<a href="/#projects"> PROJECTS </a>
				</li>
				<li className="nav-bar-item">
					<a href="#skills"> SKILLS </a>		
				</li>
				<li className="nav-bar-item">
					<a href="#hobbies"> HOBBIES </a>
				</li>
				<li className="nav-bar-item">
					<a href="#contact"> 
						CONTACT 
						<AiFillMail className="nav-icon" id="nav-mail"/>
					</a>
				</li>
				<li className="nav-bar-item">
					<Link to="/resume" target="_blank" rel="noopener noreferrer">
						RESUME 
						<AiFillFileText className="nav-icon"/>
          			</Link>
				</li>
				
			 </ul>

		</nav>
	)
}

export default Nav
