import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchEventById } from 'services/eventsApi';

const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id)
      .then(res => setEvent(res))
      .catch(err => console.log(err));
  }, []);

  return event;
};

export default useFetchEvent;
