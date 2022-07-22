import React from "react";

import "./css/resume.css"

import resume from "./assets/resume-2022.pdf";

function Resume() {
    return (
        <embed src={resume}/>
    )
}

export default Resume