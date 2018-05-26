import React from 'react';
import Event from './Event';
import Modals from './Modals';

const EventsList = ({ events }) => {
  return (
    // Return Event
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
        // Return Modal
        events.map((event, i) => {
          return (
            <Modals
              key={i}
              id={events[i].id}
              heading={events[i].heading}
              full={events[i].full}
            />
          )
        })
      }

    </div>
  )
}

export default EventsList;