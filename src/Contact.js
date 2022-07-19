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
					<p> Github </p>
					<a> andrew-rossell </a>
				</li>
				<li>
					<AiFillGithub/>
					<p> Linkined </p>
					<a> alrossell </a>
				</li>
				<li>
					<AiFillMail/>
					<p> Email </p>
					<a> alrossell@gmail.com </a>
				</li>
			</ul>
		</section>
	)
}

export default Contact
