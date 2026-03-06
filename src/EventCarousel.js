import React, { useState } from 'react';
import './EventCarousel.css';

function EventCarousel({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextEvent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  const displayedEvents = events.slice(currentIndex, currentIndex + 3);
  const remainingEvents = 3 - displayedEvents.length;
  const wrappedEvents = [
    ...displayedEvents,
    ...events.slice(0, remainingEvents),
  ];

  return (
    <div className="event-carousel">
      <button className="carousel-button prev" onClick={prevEvent}>
        ‹
      </button>

      <div className="carousel-events">
        {wrappedEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date">
              <div className="event-day">{event.day}</div>
              <div className="event-month">{event.month}</div>
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-community">🏢 {event.community}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-button next" onClick={nextEvent}>
        ›
      </button>
    </div>
  );
}

export default EventCarousel;
