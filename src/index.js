import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { RingLoader } from 'react-spinners';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css';

require('dotenv').config();

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };

    this.M = window.M;
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleSpinnerTimeout = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  };

  componentDidMount = () => {
    this.handleSpinnerTimeout();
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <RingLoader sizeUnit={'px'} size={150} color={'#ff00c1'} loading={this.state.loading} />
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
