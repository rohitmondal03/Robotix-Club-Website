import './EventPopUp.css'

const EventPopUp = ({ title, date, description, onClose }) => {
    return (
        <div className="event-popup">
            <h2>Event Details</h2>
            <h2>{title}</h2>
            <p>Date: {date}</p>
            <p>{description}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}


export default EventPopUp;
