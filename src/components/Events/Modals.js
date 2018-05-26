import React from 'react';

const Modals = ({ id, full, heading, date, location, address, details }) => {
  return (
    <div className="event-modal modal fade" id={`eventModal${id}`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content style-modal">
          <div className="close-modal" data-dismiss="modal">
            <i className="fas fa-times-circle fa-3x"></i>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="modal-body">
                  <h2 className="text-uppercase">{heading}</h2>
                  <img className="img-fluid d-block mx-auto" src={full} alt={`${heading}`} />
                  <ul className="list-inline">
                    <li><span className="font-weight-bold">Date:</span> {date}</li>
                    <li>
                      <span className="font-weight-bold">Location:</span>
                      <a className="event-address" href={address} target="_blank" rel="noopener noreferrer"> {location}</a>
                    </li>
                  </ul>
                  <p>
                    <strong>Details: </strong> {details}
                  </p>
                  <button className="btn btn-signUp" type="button">
                    Sign Up
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