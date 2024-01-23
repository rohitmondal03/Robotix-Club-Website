// Event.jsx
import React, { memo } from "react";

let bg;
var elementStyle;

const EventBox = ({ title, date, description, img }) => (
  <div className="event" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>
    <div className="innerBox" >
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <p>{description}</p>
    </div>
  </div>
);

const EventList = ({ events }) => (
  <div className="event-list">
    {events.map((event, index) => (
      <EventBox key={index} {...event} />
    ))}
  </div>
);

export default memo(EventList);
