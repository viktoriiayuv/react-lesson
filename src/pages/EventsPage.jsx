import { useState, useEffect } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { Link, Outlet } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents().then(res => setEvents(res).catch(err => console.log(err)));
  }, []);
  return (
    <>
      <ul>
        {events.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={id}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
export default EventsPage;
