import React, { Component } from 'react'

const Bio = (props) => {
    return (
        <div>
                    <div id="bio" className="col s12 m10 l8 glitchin">
                        <p>I've played with code since I got my first computer in high school. A refurbished HP desktop and dial-up introduced me
                            to the World Wide Web. Fascinated, I discovered that regular people were making the websites I happened upon. So, I went in search
                            of the how-to's to learn HTML. And before I knew it, I had built several sites on Angelfire and Geocities.
                        </p>

                        <p>
                            Fast forward a few years, I discovered WordPress and CSS. It took a bit of learning but I caught on fast. Over the next 6 - 7 years,
                            I had at least one website running to discuss my life or hobbies. And while coding was a passion, I never really thought about doing more with it.
                        </p>
                        <p>
                            Today, I have built my own web design/development business from the ground up. Starting with only one client in 2015, I now have built more than
                            10 websites for clients. I have added Javascript ES6, ReactJS, Bootstrap, and MaterializeCSS to my coding skills, using FreeCodeCamp's curriculum
                            to continue to move towards becoming a Full Stack Developer. I have built several pages and apps to practice my skills, which you can find on my Github
                            profile.
                        </p>
                        <div className="col s12 m3 l2">
                            <button target="_blank" href="https://github.com/rockstarcreativestudio" rel="noopener noreferrer" className="btn purple accent-3 waves-effect">
                            <i className="fab fa-5x fa-github"></i></button>
                        </div>
                        <div className="col s12 m8 offset-m1 l4 offset-l1">
                        <button onClick={props.handleSwap} className="btn purple accent-3 waves-effect">My Current Skills</button>
                        </div>
                    </div>
                </div>

    )
    }

const Skills = (props) => {
    return (
        <div>
            <div id="skills" className="col s12 m10 offset-m4 l8 offset-l6 glitch-out">
                <div className="row">
                    <h3 className="pink-text accent-3">Coding</h3>
                    <div className="chip purple accent-3 black-text">HTML5</div>
                    <div className="chip purple accent-3 black-text">CSS3</div>
                    <div className="chip purple accent-3 black-text">SASS</div>
                    <div className="chip purple accent-3 black-text">Javascript ES6</div>
                    <div className="chip purple accent-3 black-text">ReactJS</div>
                    <div className="chip purple accent-3 black-text">Bootstrap</div>
                    <div className="chip purple accent-3 black-text">MaterializeCSS</div>
                </div>
                <div className="row">
                    <h3 className="pink-text accent-3">Software</h3>
                    <div className="chip purple accent-3 black-text">Adobe Photoshop</div>
                    <div className="chip purple accent-3 black-text">Adobe Indesign</div>
                    <div className="chip purple accent-3 black-text">Invision</div>
                </div>
                <div className="row">
                    <h3 className="pink-text accent-3">Other</h3>
                    <div className="chip purple accent-3 black-text">Slack</div>
                    <div className="chip purple accent-3 black-text">Discord</div>
                    <div className="chip purple accent-3 black-text">Wrike</div>
                    <div className="chip purple accent-3 black-text">Asana</div>
                </div>
                <div className="col s8 offset-s1 m5 offset-m3 l4 offset-l1">
                    <button onClick={props.handleSwap} className="btn purple accent-3 waves-effect">My Bio</button>
                </div>

            </div>
        </div>
    )
}



 class AboutBio extends Component {
    constructor() {
        super();

        this.state={
            comp: 'bio'
        }
    }

    handleSwap = () => {
        const bio = document.getElementById('bio');
        const skills = document.getElementById('skills');

        if (this.state.comp === 'bio') {
            bio.classList.toggle('glitchin');
            bio.classList.toggle('glitchout');
            skills.classList.toggle('glitch-out');
            skills.classList.toggle('glitch-in');
            this.setState({
                comp: 'skills'
            })
        } else if (this.state.comp === 'skills') {
            bio.classList.toggle('glitchout');
            bio.classList.toggle('glitchin');
            skills.classList.toggle('glitch-in');
            skills.classList.toggle('glitch-out');
            this.setState({
                comp: 'bio'
            })
        }

        
    }

    render() {
            return (
                <div>
                <Bio handleSwap={this.handleSwap} />

                <Skills handleSwap={this.handleSwap} />
                </div>
            )
        }
    }

export default AboutBio;