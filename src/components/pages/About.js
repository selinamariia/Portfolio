import React from "react";
import './About.css';

function About() {
    return (
        <>
            <section className="about">
                <div className="about-title">01. About Me</div>
                <ul class="timeline">
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                            <span class="flag">Computer Science BSc <br />Brunel University London</span>
                                <span class="time-wrapper"><span class="time">2019 - 2022</span></span>
                            </div>
                            <div class="desc-left">Achieved First with Honours, modules undertaken include:
                                <br />Software Development (-A)
                                <br />Artificial Intelligence (A+)
                                <br />Network Computing (A+)
                                <br />Digital Media and Games (A)
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Apple Inc.</span>
                                <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
                            </div>
                            <div class="desc-right">My first employer. All the stuff I've learned and projects I've been working on.</div>
                        </div>
                    </li>

                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Harvard University</span>
                                <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                            </div>
                            <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
                        </div>
                    </li>

                </ul>
            </section>
        </>
    )
}

export default About;