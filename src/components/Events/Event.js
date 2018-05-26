import React from 'react';

const Event = ({ id, thumbnail, heading }) => {
  return (
    <div className="col-md-4 col-sm-6 event-item">
      <a className="event-link" data-toggle="modal" href={`#eventModal${id}`}>
        <div className="event-hover">
          <div className="event-hover-content">
            <i className="fas fa-search-plus fa-3x search-icon" aria-hidden="true"></i>
          </div>
        </div>
        <img className="img-fluid" src={thumbnail} alt={`${heading}`} />
      </a>
      <div className="event-caption">
        <p className="text-muted">{heading}</p>
      </div>
    </div>
  )
}

export default Event;