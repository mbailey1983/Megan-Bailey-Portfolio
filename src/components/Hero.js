import React, { Component } from 'react';
import '../img/hero-bg-min.jpg';

class Hero extends Component {
  render() {
    return (
      <div>
        <section id="home" className="hero section scrollspy">
          <div className="row">
            <h1 className="glitch center-align" data-text="I am Megan Bailey">
              I am Megan Bailey
            </h1>
            <h3 className="purple-text text-accent-3 code-text center-align">
              Web Designer / Developer
            </h3>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
