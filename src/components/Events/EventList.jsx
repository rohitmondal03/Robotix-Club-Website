// Event.jsx
import React, { memo, useRef, useEffect, useState } from "react";

let bg;
var elementStyle;

const EventBox = ({ title, date, description, img }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const prevSib = entry.target.previousElementSibling;

            if (prevSib == null) {
              entry.target.classList.add("slideRightIn");
              // console.log(entry.target);
            }
            else if (prevSib.classList.contains("slideRightIn") || prevSib.classList.contains("slideleftIn")) {
              console.log(prevSib);
              if (prevSib.classList.contains("slideLeftIn")) {
                entry.target.classList.add("slideRightIn");
                // console.log(entry.target);
              } else {
                entry.target.classList.add("slideLeftIn");
                // console.log(entry.target);
              }
            }
            else {
              console.log("out else");
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(targetRef.current);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="eventContainer" ref={targetRef}>
      <div
        className="event"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="innerBox">
          <h1>{title}</h1>
          <p>Date: {date}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

// const EventBox = ({ title, date, description, img }) => (
//   <div className="eventContainer">
//     <div className="event" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>
//       <div className="innerBox" >
//         <h1>{title}</h1>
//         <p>Date: {date}</p>
//         <p>{description}</p>
//       </div>
//     </div>
//   </div>
// );

const EventList = ({ events }) => (
  <div className="event-list">
    {events.map((event, index) => (
      <EventBox key={index} {...event} />
    ))}
  </div>
);

export default memo(EventList);
