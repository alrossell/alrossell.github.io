import React, {Fragment} from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Portfolio from './Portfolio';
import Resume from "./Resume"


const container = document.getElementById('app');
const root = createRoot(container); 

const App = () => {
    return (
        <Fragment>
            <Router >
                <Routes>
                    <Route path='/' element={<Portfolio />} />
                    <Route path='/resume' element={<Resume/>} />
                </Routes>
            </Router>
            
        </Fragment>
    );
}

root.render(<App/>);


