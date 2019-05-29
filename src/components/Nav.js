import React, { Component } from 'react'
// import { Router, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="right-sidebar">
                    <ul>
                        <li>
                        <a href="#home" className="btn-floating waves-effect purple accent-3"><i className="medium material-icons">home</i></a>
                        </li>
                        <li>
                            <a href="#about" className="btn-floating waves-effect purple accent-3"><i className="fas fa-3x fa-info"></i></a>
                        </li>
                        <li>
                            <a href="#projects" className="btn-floating waves-effect purple accent-3"><i className="medium material-icons">work_outline</i></a>
                        </li>
                        <li>
                        <a href="#contact" className="btn-floating waves-effect purple accent-3"><i className="medium material-icons">email</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;
