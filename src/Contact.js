import React from "react"

import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

import "./css/contact.css"

function Contact() {
	return (
		<section id="contact">
			<div id="contact-title">
				<h4 className="black-title-text"> 
					Contact
				</h4>
			</div>
			<ul id="contact-container">
				<li>
					<AiFillLinkedin/>
					<p> 
						<b>Github</b> 
					</p>
					<a href="https://github.com/alrossell/" target="_blank" rel="noopener noreferrer"> 
						andrew-rossell 
					</a>
				</li>
				<li>
					<AiFillGithub/>
					<p> 
						<b>
							Linkined
						</b> 
					</p>
					<a href="https://linkedin.com/in/andrew-rossell-18094a193" target="_blank" rel="noopener noreferrer"> 
						alrossell 
					</a>
				</li>
				<li>
					<AiFillMail/>
					<p> 
						<b>
							Email
						</b> 
					</p>
					<a> alrossell@gmail.com </a>
				</li>
			</ul>
		</section>
	)
}

export default Contact
