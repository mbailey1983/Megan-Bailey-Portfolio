import React from 'react'

const ProjectCard = () => {
    return (
        <div>
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
        </div>
    )
}

export default ProjectCard
