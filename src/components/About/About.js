import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <hr className="my-4"/>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <p className="mb-4">Thriving Cities is a group of unconventional urbanists with a unique understanding of, and approach to, cities.
            The group is committed to helping scholars, foundations, city officials, religious leaders, politicians, business people, nonprofits, and residents alike answer the question, what does it mean and take to thrive in my city and how can I contribute?</p>
            {/* Vimeo Video */}
            <iframe 
              className="col-12 my-3"
              title="Thriving Cities"
              src="https://player.vimeo.com/video/135908974"
              width="640" height="360" frameBorder="0" allowFullScreen
            />       
            <a className="btn btn-yellow btn-xl text-uppercase js-scroll-trigger" href="#contact">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;