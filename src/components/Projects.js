import React, { Component } from 'react'
import '../img/coding-1841550_1280.jpg'

class Projects extends Component {

    render() {
        return (
            <div>
                <section id="projects" className="projects section black scrollspy">
                    <div className="row section-title">
                        <h1 className="glitch center-align" data-text="Projects">Projects</h1>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 l3">
                                <div id="html" class="card">
                                    <div class="card-content white-text">
                                        <span class="card-title">HTML5/CSS3 Projects</span>
                                    </div>
                                        <ul>
                                            <li>FCC Technical Documentation-Page -
                                                <a href="https://github.com/rockstarcreativestudio/FCC-Technical-HTML-Documentation-Page"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a></li>
                                            <li>FCC Personal Portfolio Page -
                                                <a href="https://github.com/rockstarcreativestudio/FCC-Personal-Portfolio-Page"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a>
                                            </li>
                                        </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 l3">
                                <div id="js" class="card">
                                    <div class="card-content white-text">
                                        <span class="card-title">JavaScript Projects</span>
                                    </div>
                                        <ul>
                                            <li>JavaScript30 Challenges -
                                                <a href="https://github.com/rockstarcreativestudio/Javascript30"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a></li>
                                            <li>FCC Snarky Quote Generator -
                                                <a href="https://github.com/rockstarcreativestudio/FCC-Snarky-Quote-Generator"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a>
                                            </li>
                                        </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 l3">
                                <div id="react" class="card">
                                    <div class="card-content white-text">
                                        <span class="card-title">ReactJS Projects</span>
                                    </div>
                                        <ul>
                                            <li>FCC Drum Kit -
                                                <a href="https://github.com/rockstarcreativestudio/FCC-Drum-Kit"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a></li>
                                            <li>FCC Calculator -
                                                <a href="https://github.com/rockstarcreativestudio/FCC-React-Calculator"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a>
                                            </li>
                                            <li>React Weather App -
                                                <a href="https://github.com/rockstarcreativestudio/React-Weather-App"
                                                target="_blank" rel="noopener noreferrer">View the Repo</a>
                                            </li>
                                        </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 l3">
                                <div id="wp" class="card">
                                    <div class="card-content white-text">
                                        <span class="card-title">WordPress Projects</span>
                                    </div>
                                        <ul>
                                            <li>Mindful Loving Book Client Website -
                                                <a href="https://mindfullovingbook.com"
                                                target="_blank" rel="noopener noreferrer">View the Website</a></li>
                                            <li>ESHA Corp IT Client Website -
                                                <a href="https://www.eshacorpit.com"
                                                target="_blank" rel="noopener noreferrer">View the Website</a>
                                            </li>
                                        </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                                <div className="row">
                                    <div className="col s12 m6 l6">
                                        <div className="card medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title grey-text text-lighten-3">Responsive Web Design Certification</span>
                                                <hr/>
                                                <p className="project">
                                                    <strong>Date Completed:</strong> October 31, 2018
                                                    </p>
                                                    <p className="project">
                                                    <strong>Awarded By:</strong> FreeCodeCamp
                                                </p>
                                                    <a target="_blank"
                                                    href="https://www.freecodecamp.org/certification/meganb1983/responsive-web-design"
                                                    rel="noopener noreferrer"
                                                    className="btn purple accent-3">See the Certificate</a>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                    <div className="col s12 m6 l6">
                                        <div className="card medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title grey-text text-lighten-3">JavaScript Algorithms and Data Structures</span>
                                                <hr/>
                                                <p className="project">
                                                    <strong>Date Completed:</strong> November 24, 2018
                                                    </p>
                                                    <p className="project">
                                                    <strong>Awarded By:</strong> FreeCodeCamp
                                                </p>

                                                    <a target="_blank"
                                                    href="https://www.freecodecamp.org/certification/meganb1983/javascript-algorithms-and-data-structures"
                                                    rel="noopener noreferrer"
                                                    className="btn purple accent-3">See the Certificate</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                 </section>
            </div>
        )
    }
}

export default Projects
