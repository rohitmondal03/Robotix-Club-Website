import { memo, useRef, useEffect, useState } from "react";
import './EventPopUp.css'

const EventPopUp = ({ ...eventDetails }) => {
    // console.log(eventDetails[0].img);
    return (
        <div className="event-popup">
            <div className="popup-header">
                <h1>{eventDetails[0].title}</h1>
                <p id="popup-date">Date: {eventDetails[0].date}</p>
                <div onClick={eventDetails.onClose} className="close-popup-btn" >
                    <div>
                        <span className="close-btn-span" id="close1"></span>
                        <span className="close-btn-span" id="close2"></span>
                    </div>
                </div>
            </div>
            <div className="popup-content">
                <div className="popup-details">
                    {eventDetails[0].rules ?
                        <div className="details">
                            <div className="rules">
                                <ul>
                                    <li>Rules</li>
                                    {eventDetails[0].rules && eventDetails[0].rules.map((rule,index) => (
                                        <li key={rule}>{index+1}. {rule} </li>
                                    ))}
                                </ul>
                            </div>
                        </div> : "" 
                    }
                </div>
                <div className="popup-image" data-image={eventDetails[0].img} style={{ backgroundImage: eventDetails[0].img }}>
                    <img src={eventDetails[0].img} alt="" />
                </div>
            </div>
            {eventDetails[0].link ? 
                <div className="register">
                    <p>
                        Register:
                        <a href={eventDetails[0].link}> {eventDetails[0].link}</a>
                        <p>
                            <a href={eventDetails[0].link}> {eventDetails[0].link2}</a>
                        </p>
                    </p>
                </div> : ""
            }
            <div className="popup-desc">
                <h1>Description:-</h1>
                <p id="popup-description"> {eventDetails[0].description}</p>
            </div>
        </div>
    );
}


export default EventPopUp;
