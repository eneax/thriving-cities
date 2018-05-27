import React from 'react';
import city from '../../images/city.mp4';
import './Header.css';

const Header = () => {
  return (
    <header className="masthead text-center text-white">
      <video src={city} autoPlay loop playsInline muted></video>
      <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Memphis, TN</div>
        <div className="intro-heading text-uppercase">It's Time to Thrive!</div>
        <a className="btn btn-yellow btn-xl text-uppercase js-scroll-trigger" href="#city">Tell Me More</a>
      </div>
      </div>
    </header>
  )
}

export default Header;