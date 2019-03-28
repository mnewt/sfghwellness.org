import React from 'react';
import PropTypes from 'prop-types';

const Events = ({ events }) => {
  if (events) {
    const { title, description, sections } = events;

    return (
      <div className="small-12 columns module_events">
        <div className="selector__header">
          <div className="row align-middle">
            <div className="columns">
              <h2>{title}</h2>
              {description}
            </div>
          </div>
        </div>
        {sections.map(({ title, subsections }) => (
          <div className="load__container" key={title}>
            <div className="events__container">
              <div className="row events__content">
                <div className="columns small-12 medium-7">
                  <h3>{title}</h3>
                </div>
                <div className="columns small-12 medium-5 events__meta">
                  {subsections.map(({ title, description }) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <p>
                        <span>{description}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

Events.propTypes = {
  events: PropTypes.object,
};

export default Events;
