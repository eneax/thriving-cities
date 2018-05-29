import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import City from "./City/City";
import { events } from "./EventsList/events";
import EventsList from "./EventsList/EventsList";
import About from "./About/About";
import Contact from "./Contact/Contact";
import NewsLetter from "./NewsLetter/NewsLetter";
import Footer from "./Footer/Footer";

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
          // scroll-to-top
          <a className="js-scroll-trigger scroll-to-top rounded" href="#page-top">
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </a>
        }
      </div>
    );
  }
}

export default App;
