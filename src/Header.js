import React from "react";
import "./css/header.css"

function Header(props) {
	return (
		<header id="header">
			<div id="header-container">
				<h1 className = "header-text"> Andrew Rossell </h1>
				<h2 classNcame = "header-text"> Loyola Marymount Graduated </h2>
				<div id="header-profile-wrapper">
					<img id = "header-profile" src="./monkey2.png" />
				</div>

			</div>
		</header>
	)
}

export default Header 
