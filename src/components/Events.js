import React from 'react';

import oneT from '../images/events/thumbnail/01-thumbnail.jpg';
import twoT from '../images/events/thumbnail/02-thumbnail.jpg';
import threeT from '../images/events/thumbnail/03-thumbnail.jpg';
import oneF from '../images/events/full/01-full.jpg';
import twoF from '../images/events/full/02-full.jpg';
import threeF from '../images/events/full/03-full.jpg';

const Events = () => {
  return (
    <div>
      <section className="bg-light" id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Events</h2>
              <hr className="mt-4 mb-5" />
            </div>
          </div>
          <div className="row">

            <div className="col-md-4 col-sm-6 event-item">
              <a className="event-link" data-toggle="modal" href="#eventModal1">
                <div className="event-hover">
                  <div className="event-hover-content">
                    <i className="fa fa-search-plus fa-3x" aria-hidden="true"></i>
                  </div>
                </div>
                <img className="img-fluid" src={oneT} alt="Antipasto Porsenna" />
              </a>
              <div className="event-caption">
                <p className="text-muted">Antipasto Porsenna</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 event-item">
              <a className="event-link" data-toggle="modal" href="#eventModal2">
                <div className="event-hover">
                  <div className="event-hover-content">
                    <i className="fa fa-search-plus fa-3x" aria-hidden="true"></i>
                  </div>
                </div>
                <img className="img-fluid" src={twoT} alt="Pizza Porsenna" />
              </a>
              <div className="event-caption">
                <p className="text-muted">Pizza Porsenna</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 event-item">
              <a className="event-link" data-toggle="modal" href="#eventModal3">
                <div className="event-hover">
                  <div className="event-hover-content">
                    <i className="fa fa-search-plus fa-3x" aria-hidden="true"></i>
                  </div>
                </div>
                <img className="img-fluid" src={threeT} alt="Zuppa di farro, fagioli e ceci" />
              </a>
              <div className="event-caption">
                <p className="text-muted">Zuppa di farro, fagioli e ceci</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="event-modal modal fade" id="eventModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Antipasto Porsenna</h2>
                    <img className="img-fluid d-block mx-auto" src={oneF} alt="Antipasto Porsenna" />
                    <ul className="list-inline">
                      <li><span className="font-weight-bold">Categoria:</span> Antipasti</li>
                      <li><span className="font-weight-bold">Prezzo:</span> 6,50€</li>
                    </ul>
                    <p>
                      <strong>Ingredienti: </strong> Affettati, crostini, formaggio
                    </p>
                    <button className="btn btn-danger" data-dismiss="modal" type="button">
                      Chiudi
                      <i className="fa fa-times-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-modal modal fade" id="eventModal2" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Pizza Porsenna</h2>
                    <img className="img-fluid d-block mx-auto" src={twoF} alt="Pizza Porsenna" />
                    <ul className="list-inline">
                      <li><span className="font-weight-bold">Categoria:</span> Pizza</li>
                      <li><span className="font-weight-bold">Prezzo:</span> 6,00€</li>
                    </ul>
                    <p>
                      <strong>Ingredienti: </strong> Pomodoro fresco, rucola, Parmigiano, Mozzarella
                    </p>
                    <button className="btn btn-danger" data-dismiss="modal" type="button">
                      Chiudi
                      <i className="fa fa-times-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-modal modal fade" id="eventModal3" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <div className="lr">
                <div className="rl"></div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Zuppa di farro, fagioli e ceci</h2>
                    <img className="img-fluid d-block mx-auto" src={threeF} alt="Zuppa di farro, fagioli e ceci" />
                    <ul className="list-inline">
                      <li><span className="font-weight-bold">Categoria:</span> Primi</li>
                      <li><span className="font-weight-bold">Prezzo:</span> 6,00€</li>
                    </ul>
                    <p>
                      <strong>Ingredienti: </strong> Farro, beans and chickpeas soup
                    </p>
                    <button className="btn btn-danger" data-dismiss="modal" type="button">
                      Chiudi
                      <i className="fa fa-times-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Events;