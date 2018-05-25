import React from 'react';
import { orlando, portland, richmond } from '../utils/media';

const Cities = () => {
  return (
    <section id="cities" className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Cities</h2>
            <hr className="my-4"/>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <p className="mb-4">Cities are never blank slates. They have unique histories, identities, and cultures that have combined to form them into their current state and that continue to influence how they will develop in the future. To this end, in 2015 Thriving Cities commissioned field research in three pilot cities. Explore below.</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={portland} alt="Portland" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Portland, Oregon</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Portland, to use a boxing cliché, punches above its weight. Or so it might seem in view of the way this isolated city of modest size and economic clout appears again and again in “best of” rankings of a seemingly endless variety.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={richmond} alt="Richmond" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Richmond, Virginia</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Located in the heart of Old Dominion, Virginia’s capital city has been central to American, the Commonwealth of Virginia’s, and the South’s heritage and identity since the eighteenth century.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid cities" src={orlando} alt="Orlando" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="subheading">Orlando, Florida</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Orlando is an adolescent living in the shadow of The Mouse. Growing fast, simultaneously unsure of herself and cocky, The City Beautiful struggles to embrace a cohesive identity apart from international tourism.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4 className="font-weight-bold">Time
                    <br/>To
                    <br/>Thrive!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cities;