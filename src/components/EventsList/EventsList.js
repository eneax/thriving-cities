import React from 'react';
import Event from './Event/Event';
import Modal from './Modal/Modal';

const EventsList = ({ events }) => {
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
            {
              /*
                Loop through events.js and return Event with id (same as Modal), 
                thumbnail image and heading
              */
              events.map((event, i) => {
                return (
                  <Event
                    key={i}
                    id={events[i].id}
                    thumbnail={events[i].thumbnail}
                    heading={events[i].heading}
                  />
                )
              })
            }
          </div>    
        </div>
      </section>
      
      {
        /*
          Loop through events.js and return Modal with id (same as Event),
          heading, full image, date of event, location of event,
          address (Google Maps link) and details (event description)
        */
        events.map((event, i) => {
          return (
            <Modal
              key={i}
              id={events[i].id}
              heading={events[i].heading}
              full={events[i].full}
              date={events[i].date}
              location={events[i].location}
              address={events[i].address}
              details={events[i].details}
            />
          )
        })
      }

    </div>
  )
}

export default EventsList;