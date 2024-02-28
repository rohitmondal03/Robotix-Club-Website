// Event.jsx
import React, { memo, useRef, useEffect, useState } from "react";
import EventPopUp from "../EventPopUp/EventPopUp";
import './EventList.css'


let bg;
var elementStyle;

const EventList = ({ title, date, time, venue ,img }) => {
  const targetRef = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [pseudoElement, setPseudoElement] = useState({
    backgroundSize: "cover",
    backgroundImage: `url(${img})`
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const prevSib = entry.target.previousElementSibling;
            const eventIn = entry.target.querySelector(".eventIn");

            if (prevSib == null) {
              entry.target.classList.add("slideRightIn");
              eventIn.classList.add("hoveredRight");
            }
            else if (!(prevSib.classList.contains("slideRightIn") && prevSib.classList.contains("slideleftIn"))) {
              if (prevSib.classList.contains("slideLeftIn")) {
                entry.target.classList.add("slideRightIn");
                eventIn.classList.add("hoveredRight");
              } else {
                entry.target.classList.add("slideLeftIn");
                eventIn.classList.add("hoveredLeft");
              }
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(targetRef.current);
  }, []);

  return (
    <>
      <div className="eventCard" ref={targetRef} onClick={togglePopUp}>
        <div className="rotatory">
          <div className="eventIn" style={pseudoElement}>
            <div className="innerBox">
              <h1>{title}</h1>
              <p>Date: {date}</p>
              <p>Time: {time}</p>
              <p>venue: {venue}</p>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (<EventPopUp title={title} date={date} time={time} venue={venue} onClose={togglePopUp} />)}
    </>
  );
};

export default memo(EventList);
