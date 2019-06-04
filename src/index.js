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
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootreducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import Firestore from './firebase/Firestore';

require('dotenv').config();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(Firestore),
    reactReduxFirebase(Firestore)
  )
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
