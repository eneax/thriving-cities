import React from 'react';

const Modals = ({ id, full, heading }) => {
  return (
    <div className="event-modal modal fade" id={`eventModal${id}`} tabIndex="-1" role="dialog" aria-hidden="true">
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
                  <h2 className="text-uppercase">{heading}</h2>
                  <img className="img-fluid d-block mx-auto" src={full} alt="Antipasto Porsenna" />
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
  )
}

export default Modals;