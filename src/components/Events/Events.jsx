import React, {memo} from 'react';
import EventList from './EventList';

import '../Events/Events.css'

const eventsData = [
  {
    title: 'Robotics Workshop',
    date: 'January 25, 2024',
    description: 'Learn the basics of robotics and hands-on projects.',
    img: 'bg1.jpg',
  },
  {
    title: 'Robotics Competition',
    date: 'February 15, 2024',
    description: 'Showcase your robotics skills in a friendly competition.',
    img: 'bg2.jpg', 
  },
  {
    title: 'Robo Soccer',
    date: 'March 10, 2024',
    description: 'Showcase your robotics skills in a friendly competition.',
    img: 'bg2.jpg', 
  },
];

const Events = () => (
  <div className="Event">
    <header>
      <h1>Upcoming Robotics Events</h1>
    </header>
    <main>
      <EventList events={eventsData} />
    </main>
  </div>
);

export default memo(Events);
