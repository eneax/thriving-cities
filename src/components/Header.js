import React from 'react';

export default function Header () {
  return (
    <header className="masthead text-center text-white">
      <div className="container">
        <div className="intro-text text-uppercase">
          <div className="intro-subheading">Local Events</div>
          <div className="intro-heading">Thriving Cities</div>
          <a className="btn btn-danger btn-big js-scroll-trigger" href="#about">Find Events</a>
        </div>
      </div>
    </header>
  )
}
