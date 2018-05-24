import React from 'react';

const Header = () => {
  return (
    <header className="masthead text-center text-white">
      <div className="container">

      <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg" playsInline autoPlay muted loop>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm" />
        <source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4" />
      </video>


        <div className="intro-text text-uppercase">
          <div className="intro-subheading">Local Events</div>
          <div className="intro-heading">Thriving Cities</div>
          <a className="btn btn-danger btn-big js-scroll-trigger" href="#events">Find Events</a>
        </div>

        

      </div>
    </header>
  )
}

export default Header;