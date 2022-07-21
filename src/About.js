import React from "react"

import { AiFillLinkedin, AiFillGithub, AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";


import "./css/about.css"

function About(props) {
	return (
		<section id="about">
			<div id="about-container"> 
				<div id="about-profile-container">
					<img id="about-profile-img" src="./selfie2.JPG"/>
					<div id="about-icon-container">
						<a href="https://linkedin.com/in/andrew-rossell-18094a193" target="_blank" rel="noopener noreferrer"> 
							<AiFillLinkedin />
						</a>
						<a href="https://github.com/alrossell/" target="_blank" rel="noopener noreferrer">
							<AiFillGithub />
						</a>
						<Link to="/resume" target="_blank" rel="noopener noreferrer">
							<AiFillFileText />
          				</Link>
					</div>
				</div>

				<div id="about-text-container">
					<div id="about-title-container">
						<b className="third-order-text">
							About
						</b>
						<h4 className="white-title-text">
							Andrew Rossell
						</h4>
						<p className="second-black-text">
							Loyola Marymount University Graduated
						</p>
					</div>
					<div id="about-text-descritpion" className="third-order-text">		
						<p>
							I'm a graduate of Loyola Marymount University class of 2022 with a 
							Bachelor of Science in Computer Science and a minor in Applied Math.
						</p>
						<p>
							Surpisingly I have a passion for CS especially in the different fields 
							of artifical intelligence and web design.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
//Im a graduate of LMU s Class of 2022 and my passion is Computer Science. My interest in the field is mainly artifical intelligence, however I m also interested webdesign.

export default About
