import React from "react";
import Intro from './pages/Intro';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function Homepage () {
    return (
        <>
            <Intro />
            <About />
            <Experience />
            <Projects />
        </>
    )
}

export default Homepage;