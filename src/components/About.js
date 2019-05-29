import React, { Component } from 'react'
import AboutBio from './AboutBio'

class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="about section grey darken-4 scrollspy">

            <div className="container">
              <div className="row">
                <h1 className="glitch section-title" data-text="About Me">About Me</h1>

                <div>
                      <AboutBio />
                </div>

              </div>
            </div>
          </section>
      </div>
    )
  }
}

export default About;