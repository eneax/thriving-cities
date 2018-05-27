import React from 'react';
import { culture, gov, history, future } from '../../utils/media';
import './City.css';

const City = () => {
  return (
    <section id="city" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">The City</h2>
            <hr className="my-4"/>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <p className="mb-4">Did you know Memphis was named America’s most charitable city by the Chronicle of Philanthropy? Did you know Memphis was just named #1 on Inc. Magazine’s “Opportunity Index”? Did you know Memphis was named the top city for Black Owned Businesses by Blacktech Week? Memphis is making news! Explore below.</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={culture} alt="City Culture Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Culture</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Memphis is a city of doers, dreamers and believers. That’s what drives this unstoppable city. People and ideas mix along the mighty Mississippi to do something magical and redefine the world around us.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={gov} alt="Flag Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Government</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Honesty. Excellence. Responsiveness. Safety. These Memphis values are at the core of every Memphis city council, decision made, every initiative launched, every action taken.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={history} alt="History Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">History</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Memphis, like all cities, has a history of both highs and lows. The city has been touched by the best of mankind, but also the worst. The one constant in Memphis, however, is the relentless pursuit of positive change to make the city a better place.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={future} alt="Future Pic" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Future</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Memphis has the uncommon distinction of being both an historic city (it’s 200 years old, to be specific!) and a city brimming with future possibility. When you think of Memphis, think of innovation, straight-up soul, adventure and creativity. After all, Memphis has had a culture all its own for over two centuries.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <a className="js-scroll-trigger" href="#events">
                  <div className="timeline-image">
                    <h4 className="font-weight-bold">Time
                      <br/>To
                      <br/>Thrive!
                    </h4>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default City;