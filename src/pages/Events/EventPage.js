import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Event from "./Event";

function EventPage() {
  
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    // API call to fetch event by id
    const fetchEvent = async () => {
      const response = await fetch(`/api/events/${id}`);
      const data = await response.json();
      setEvent(data);
    }

    fetchEvent();
  }, [id]);

  return (
    <div>
      {event && (
        <>
          <h1>{event.name}</h1>
          
          <Event 
            key={event.id}
            date={event.date}
            time={event.time}
            location={event.location}
            venueName={event.venue}
            phoneNumber={event.phone}
            details={event.details}
            duration={event.duration}
          />

          <p>Comments...</p>
        </>
      )}
    </div>
  );
}

export default EventPage;