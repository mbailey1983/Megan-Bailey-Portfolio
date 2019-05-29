import React, { Component } from 'react'

class Projects extends Component {

    render() {
        return (
            <div>
                <section id="projects" className="projects section black scrollspy">
                    <div className="row">
                        <h1 className="glitch center-align section-title" data-text="Projects">Projects</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs grey darken-4">
                                    <li className="tab col"><a className="active" href="#html">Responsive HTML</a></li>
                                    <li className="tab col"><a href="#js">Javascript ES6</a></li>
                                    <li className="tab col"><a href="#react">ReactJS</a></li>
                                    <li className="tab col"><a href="#wp">WordPress</a></li>
                                    <li className="tab col"><a href="#cert">Certifications</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div id="html" className="container">
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s4 m4 l3">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">FCC Technical Docs Page
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/FCC-Technical-HTML-Documentation-Page/"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">This page was created to demonstrate a side nav menu, which becomes a top nav on mobile.
                                                    I utilized CSS Flexbox extensively, as I find the coding to be intuitive and the final result to be highly
                                                    responsive.</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col s4 m4 l3">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">FCC Personal Portfolio
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/FCC-Personal-Portfolio-Page/"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">This page was created to pull together all the Responsive Design principles, including
                                                    CSS Flexbox, CSS Animations, forms, and links.</p>
                                                </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div id="js" className="container">
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s4 m4 l3">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">Javascript 30
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/Javascript30/index.html"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">This was an interesting Javascript challenge, in which you build 30 Javascript projects
                                                    (preferably in 30 days). It is in ES6, and includes challenges to practive array functions as well.</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col s4 m4 l3">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">FCC Snarky Quote Generator
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/FCC-Snarky-Quote-Generator/index.html"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal purple darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i>Details</span>
                                                    <p className="project">This was created to satisfy an FCC challenge for Javascript Libraries certification.
                                                    I opted for snarky quotes. I used JS ES6, Bootstrap, and had to incorporate a "Tweet It" button. I added extra in showing the
                                                    character and show which the quote was from.</p>
                                                </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="react" className="container">
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s6 m5 l4">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">FCC Drum Kit
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/FCC-React-Calculator/"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">This was an app I built for FCC certification. I used React and MaterializeCSS for this
                                                    project with a map function to display the buttons, including the audio file. This app was similar to the Javascript 30
                                                    drum kit. It allowed me to expand my knowledge of how to interact with DOM elements in different ways.</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col s6 m5 l4">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">FCC React Calculator
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/FCC-Drum-Kit/"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">This was possibly the biggest stretch for me. There were a lot of
                                                    moving parts with this, & sleep deprivation made me take longer. I used React & MaterializeCSS for this project.
                                                    My biggest takeaway was to be aware at all times what I am doing to state through different components.</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col s6 m5 l4">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">React Weather App
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://rockstarcreativestudio.github.io/React-Weather-App/"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">I wanted to practice React with a few different tutorials before jumping into the React Calculator.
                                                    This app is a simple weather app, using Open Weather's API service. You can enter your zip code & country code to pull up the current weather. Since Open Weather includes icons with their response, I utilized that to add the weather icon.</p>
                                                </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="wp" className="container">
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s5 m6 l4">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">Mindful Loving Book
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://mindfullovingbook.com"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">I created this website for 2 author clients. They wanted a clean, open design that fit their
                                                    book cover as well as their brand. I used WordPress, Astra Pro Theme, and Elementor Page Builder. The clients have been
                                                    delighted with the final website that they can now use to promote their book.</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="col s5 m6 l4">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">ESHA Corp IT
                                                <i className="material-icons right">more_vert</i></span>
                                                <div className="card-action">
                                                <a target="_blank"
                                                href="https://www.eshacorpit.com"
                                                rel="noopener noreferrer"
                                                className="btn purple accent-3">See the Page</a>
                                                </div>
                                                </div>
                                                <div className="card-reveal grey darken-4">
                                                    <span className="card-title purple-text text-accent-3"><i className="material-icons right">close</i><strong>Details</strong></span>
                                                    <p className="project">This client originally had a hard-coded, static HTML website. They wanted to move to WordPress for more
                                                    flexbility. I worked with their Marketing Manager to deploy a new website design, as well as adding landing pages for
                                                    their marketing efforts. I used Astra Pro Theme and Elementor Page Builder.</p>
                                                </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div id="cert" className="container">
                            <div className="col s12">
                                <div className="row">
                                    <div className="col s4 m4 l3">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">Responsive Web Design Certification
                                                <i className="material-icons right">more_vert</i></span>
                                                <hr/>
                                                <p className="project">
                                                    <strong>Date Completed:</strong> October 31, 2018
                                                    </p>
                                                    <p className="project">
                                                    <strong>Awarded By:</strong> FreeCodeCamp
                                                </p>
                                                <div className="card-action">
                                                    <a target="_blank"
                                                    href="https://www.freecodecamp.org/certification/meganb1983/responsive-web-design"
                                                    rel="noopener noreferrer"
                                                    className="btn purple accent-3">See the Certificate</a>
                                                </div>
                                                </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                    <div className="col s4 m4 l3">
                                        <div className="card sticky-action medium purple darken-4">
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-lighten-3">JavaScript Algorithms and Data Structures
                                                <i className="material-icons right">more_vert</i></span>
                                                <hr/>
                                                <p className="project">
                                                    <strong>Date Completed:</strong> November 24, 2018
                                                    </p>
                                                    <p className="project">
                                                    <strong>Awarded By:</strong> FreeCodeCamp
                                                </p>
                                                <div className="card-action">
                                                    <a target="_blank"
                                                    href="https://www.freecodecamp.org/certification/meganb1983/javascript-algorithms-and-data-structures"
                                                    rel="noopener noreferrer"
                                                    className="btn purple accent-3">See the Certificate</a>
                                                </div>
                                                </div>

                                        </div>
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
