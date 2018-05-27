import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import City from './City';
import { events } from './Events/events';
import EventsList from './Events/EventsList';
import About from './About';
import Contact from './Contact';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <City />
        <EventsList events={ events } />
        <About />
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
