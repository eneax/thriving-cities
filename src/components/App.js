import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import EventsList from './Events/EventsList';
import { events } from './Events/events';
import Cities from './Cities';
import NewsLetter from './NewsLetter';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <EventsList events={ events } />
        <Cities />
        <Contact />
        <NewsLetter />
        <Footer />
        {
          <a className="js-scroll-trigger scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </a>
        }
      </div>
    );
  }
}

export default App;
