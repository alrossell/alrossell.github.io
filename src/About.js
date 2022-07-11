import React from "react"

import "./css/about.css"

function About(props) {
	return (
		<section id="about">
			<div id="about-container"> 
				<div id="about-profile-container">
					<img id="about-profile-img" src="./monkey2.png"/>
				</div>

				<div id="about-text-container">
					<div id="about-title-container">
						<h2 id="about-title">Andrew Rossell</h2>
						<h3>Loyola Marymount University Student</h3>
					</div>
						
					<p>
						I'm a graduate of LMU's Class of 2022 and my passion is Computer Science.
					</p>
					<p>
						My interest in the field is mainly artifical intelligence, however I m also interested webdesign.
					</p>
				</div>
			</div>
						
			
		</section>
	)
}
//Im a graduate of LMU s Class of 2022 and my passion is Computer Science. My interest in the field is mainly artifical intelligence, however I m also interested webdesign.

export default About
