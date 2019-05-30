import React, { Component } from 'react'
import '../img/about-bg.jpg'
import AboutBio from './AboutBio'

class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="about section grey darken-4 scrollspy">

            <div className="container">
              <div className="row section-title">
                <h1 className="glitch" data-text="About Me">About Me</h1>

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