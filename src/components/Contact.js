import React, { Component } from 'react'
import '../css/index.css'
import * as emailjs from 'emailjs-com'

const rEmail = process.env.REACT_APP_EMAILJS_RECEIVER;
const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const userId = process.env.REACT_APP_EMAILJS_USERID;

class Contact extends Component {
    constructor() {
        super();

        this.state={
            name: '',
            email: '',
            message: '',
            formSent: false,
            success: '',
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = this.state;

        let templateParams = {
            name: name,
            to_name: rEmail,
            email: email,
            message_html: message
        }

        if (this.state.name === '' || this.state.email === '') {
            this.setState({
                error: "Please enter your name or a valid email address."
            })
        } else {

        emailjs.send(
            'sendgrid',
            template,
            templateParams,
            userId
        ).then(res => {
            console.log('Wheeeeeeeeeee! It sent!')
            this.setState({
                success: "You're message is on it's way!",
                error: ''
            })
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
            console.log(`Error! ${this.state.error}`)
            this.setState({
                error: err,
                success: ''
            })
        })
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                })
    }
}

    renderMsg = () => {
        if (this.state.error) {
            return (
                <div className="message-alert">
                    <div className="chip message-error">{this.state.error}
                    <i className="far fa-times-circle close"></i>
                    </div>
                </div>
            )
        } else if (this.state.success) {
                return (
                    <div id="alert" className="message-alert fade-out">
                    <div className="chip message-success">{this.state.success}
                    <i className="far fa-times-circle close"></i>
                    </div>
                </div>
            )
        }
    }



    render() {
        return (
            <div>

                 <section id="contact" className="contact section scrollspy">
                    <div className="row">
                        <h1 className="section-title glitch center-align">Get In Touch</h1>
                    </div>
                    <form className="container" onSubmit={this.handleSubmit}>
                        <div className="card-panel contact-form col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input onChange={this.handleChange}
                                        data-error="Please enter your name."
                                        type="text" id="name" value={this.state.name} />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input onChange={this.handleChange}
                                        data-error="Please enter a valid email address."
                                        type="text" id="email" value={this.state.email}/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 input-field">
                                        <textarea onChange={this.handleChange}
                                        id="message" name="message"
                                        cols="20" rows="10"
                                        className="materialize-textarea"
                                        value={this.state.message} ></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <button type="submit"
                                        className="sendbtn btn purple accent-3 black-text waves-effect"><strong>Send</strong></button>
                                    </div>
                                    <div className="col s10 offset-s1">
                                        {this.renderMsg()}
                                    </div>
                                </div>
                        </div>
                    </form>

                </section>

            </div>
        )
    }
}

export default Contact