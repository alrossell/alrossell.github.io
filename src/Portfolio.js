import React, {Fragment} from 'react';

import "./css/profile.css"

import Nav from "./Nav"
import Header from "./Header"
import Projects from "./Projects"
import About from "./About"
import Skills from "./Skills"
import Hobbies from "./Hobbies"
import Footer from "./Footer"
import Contact from "./Contact"

function Portfolio() {
	return (
		<Fragment>
			<Nav/>
			<Header/>
			<About/> 
			<Projects/>
			<Skills/>
			<Hobbies/>
			<Contact/>
			<Footer/>
			{/* <Resume /> */}
		</Fragment>
	)
}

export default Portfolio;
