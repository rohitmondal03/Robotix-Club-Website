// Event.jsx
import { memo, useRef, useEffect, useState } from "react";
import EventPopUp from "../EventPopUp/EventPopUp";
import './EventList.css'


const EventList = ({ title, date, description, img }) => {
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
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (<EventPopUp title={title} date={date} description={description} onClose={togglePopUp} />)}
    </>
  );
};

export default memo(EventList);
