import React, { Component } from 'react';
// import { Router, Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="right-sidebar">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="btn-floating waves-effect purple accent-3"
                >
                  <i className="medium material-icons">home</i>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="btn-floating waves-effect purple accent-3"
                >
                  <i className="fas fa-3x fa-info" />
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="btn-floating waves-effect purple accent-3"
                >
                  <i className="medium material-icons">work_outline</i>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="btn-floating waves-effect purple accent-3"
                >
                  <i className="medium material-icons">email</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
