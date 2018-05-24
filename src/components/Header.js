import React from 'react';

const Header = () => {
  return (
    <div>
      <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg" playsInline autoPlay muted loop>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm" />
        <source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4" />
      </video>
      <header className="masthead text-center text-white">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Thriving Cities</div>
            <div className="intro-heading text-uppercase">It's Time to Thrive!</div>
            <a className="btn btn-yellow btn-xl text-uppercase js-scroll-trigger" href="#events">Tell Me More</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;