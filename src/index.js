import ReactDOM from 'react-dom';
import React, {Fragment} from 'react';
import { createRoot } from 'react-dom/client';

import "./css/index.css"

import Nav from "./Nav"
import Header from "./Header"
import Projects from "./Projects"
import About from "./About"
import Skills from "./Skills"


const container = document.getElementById('app');
const root = createRoot(container); 

const App = () => {
	return (
		<Fragment>
			<Nav/>
			<Header/>
			<About/> 
			<Skills/>
			<Projects/>
		</Fragment>
	)
}

root.render(<App/>);
