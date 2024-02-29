// Event.jsx
import { memo, useRef, useEffect, useState } from "react";
import EventPopUp from "../EventPopUp/EventPopUp";
import './EventList.css'


let bg;
var elementStyle;

const EventList = (...eventDetails) => {
  const targetRef = useRef(null);
  // console.log(typeof(eventDetails));

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
    const Event = document.querySelector('.Event');
    Event.style.userSelect = 'none';
  };

  const [pseudoElement, setPseudoElement] = useState({
    backgroundSize: "cover",
    backgroundImage: `url(${eventDetails[0].img})`,
    // transform: "scaleX(-1)"
    scaleX: "-1"
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pSib = entry.target.previousElementSibling
            const eventIn = entry.target.querySelector(".eventIn");
            if (pSib == null) {
              entry.target.classList.add("slideRightIn");
              eventIn.classList.add("hoveredRight");
            }
            else {
              const prevSib = pSib.previousElementSibling;
              if (!(prevSib.classList.contains("slideRightIn") && prevSib.classList.contains("slideleftIn"))) {
                if (prevSib.classList.contains("slideLeftIn")) {
                  entry.target.classList.add("slideRightIn");
                  eventIn.classList.add("hoveredRight");
                } else {
                  entry.target.classList.add("slideLeftIn");
                  eventIn.classList.add("hoveredLeft");
                }
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
              <h1>{eventDetails[0].title}</h1>
              <p>Date: {eventDetails[0].date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="breaker"></div>
      {isPopupOpen && (<EventPopUp onClose={togglePopUp} {...eventDetails} />)}
    </>
  );
};

export default memo(EventList);
