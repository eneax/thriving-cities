import React from 'react';
import city from '../images/city.mp4';

const Header = () => {
  return (
    <header className="masthead text-center text-white">
      <video src={city} autoPlay loop playsInline muted></video>
      <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Thriving Cities</div>
        <div className="intro-heading text-uppercase">It's Time to Thrive!</div>
        <a className="btn btn-yellow btn-xl text-uppercase js-scroll-trigger" href="#events">Tell Me More</a>
      </div>
      </div>
    </header>
  )
}

export default Header;