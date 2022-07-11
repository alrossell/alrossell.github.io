import React from "react";

import './css/nav.css'

function Nav(props) {
	return (
		<nav id="nav">
			<a id="nav-name-wrapper">
				<b>Andrew Rossell</b>
			</a>
			<ul id="nav-links-container">
				<li className="nav-bar-item">
					<a> ABOUT </a>
				</li>
				<li className="nav-bar-item">
					<a> SKILLS </a>
				</li>
				<li className="nav-bar-item">
					<a> PROJECTS </a>
				</li>
				<li className="nav-bar-item">
					<a> HOBBIES </a>
				</li>
				<li className="nav-bar-item">
					<a> RESUME </a>
				</li>
				<li className="nav-bar-item">
					<a> CONTACT </a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
