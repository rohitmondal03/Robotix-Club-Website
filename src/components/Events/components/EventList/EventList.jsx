// Event.jsx
import { memo, useRef, useEffect, useState } from "react";

import EventPopUp from "../EventPopUp/EventPopUp";
import './EventList.css'

const EventList = (...eventDetails) => {

  const targetRef = useRef(null);

  // Pop up opener
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopupOpen(!isPopupOpen);
    const Event = document.querySelector('.Event');
    Event.style.userSelect = 'none';
    Event.style.overflow = 'hidden';
  };

  // Background Image setter
  const [pseudoElement, setPseudoElement] = useState({
    backgroundSize: "cover",
    backgroundImage: `url(${eventDetails[0].img})`,
    backgroundPosition: "center",
    scaleX: "-1"
  });

  // Left Right Siding
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const eventCover = document.querySelectorAll('.eventCover');
      const eventIn = document.querySelectorAll('.eventIn');
      for (let i = 0; i < eventCover.length; i++) {
        if (i % 2 != 0) {
          eventCover[i].classList.add("eventCoverReverse");
          eventIn[i].classList.add("hoveredLeft");
        }
        else {
          eventIn[i].classList.add("hoveredRight");
        }
      }
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  // Setting image height for responsiveness
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const eventImage = document.querySelectorAll(".eventIn");
      for (let i = 0; i < eventImage.length; i++) {
        eventImage[i].style.height = eventImage[i].offsetWidth - 20 + "px";
      }
      const eventCover = document.querySelectorAll(".eventCover");
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // For Slide in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const timeoutId = setTimeout(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const timeoutId = setTimeout(() => {
                if (entry.target.classList.contains("eventCoverReverse")) {
                  if (!(entry.target.classList.contains("slideLeftIn"))) {
                    entry.target.classList.add("slideLeftIn");
                  }
                }
                else {
                  entry.target.classList.add("slideRightIn");
                }
              }, 100);
            }
          });
        }, 100);
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(targetRef.current);
  }, []);


  return (
    <>
      <div className="eventCard" >
        <div className="eventCover" ref={targetRef} onClick={togglePopUp}>
          <div className="innerBox">
            <h1>{eventDetails[0].title}</h1>
            <p>Date: {eventDetails[0].date}</p>
            <p className="note">Venue in Image</p>
          </div>
          
          <div className="image">
            <div className="rotatory">
              <div className="eventIn" style={pseudoElement}>
                <p>Venue: {eventDetails[0].venue}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="breaker"></div>
      {isPopupOpen && (<EventPopUp onClose={togglePopUp} {...eventDetails} />)}
    </>
  );
};

export default EventList;
