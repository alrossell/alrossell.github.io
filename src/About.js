import React from "react"

import { AiFillLinkedin, AiFillGithub, AiFillFileText } from "react-icons/ai";

import "./css/about.css"

function About(props) {
	return (
		<section id="about">
			<div id="about-container"> 
				<div id="about-profile-container">
					<img id="about-profile-img" src="./monkey2.png"/>
					<div id="about-icon-container">
						<a> 
							<AiFillLinkedin />
						</a>
						<a>
							<AiFillGithub />
						</a>
						<a>
							<AiFillFileText />
						</a>
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
					<div className="third-order-text">		
						<p>
							I'm a graduate of LMU's Class of 2022 and my passion is Computer Science.
						</p>
						<p>
							My interest in the field is mainly artifical intelligence, however I m also interested webdesign.
						</p>
						<p>
							I'm a graduate of LMU's Class of 2022 and my passion is Computer Science.
						</p>
						<p>
							My interest in the field is mainly artifical intelligence, however I m also interested webdesign.
						</p>
					</div>
				</div>
			</div>
						
			
		</section>
	)
}
//Im a graduate of LMU s Class of 2022 and my passion is Computer Science. My interest in the field is mainly artifical intelligence, however I m also interested webdesign.

export default About
