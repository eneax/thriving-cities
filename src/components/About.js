import React from 'react';

const About = () => {
  return (
    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-white">We've got what you need!</h2>
            <hr className="light my-4"/>
            <p className="text-faded mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a className="btn btn-light btn-xl js-scroll-trigger" href="#events">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;