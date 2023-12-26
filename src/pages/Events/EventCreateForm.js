import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Event from "./Event";

function CreateEvent() {

  const [errors] = useState({});

  const [eventData, setEventData] = useState({
    date: "",
    time: "",
    location: "",
    venueName: "",
    phoneNumber: "",
    details: "",
    duration: ""
  });

  const { date, time, location, venueName, phoneNumber, details, duration } = eventData;

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // submit form data

    setEventData({
      date: "",
      time: "",
      location: "",
      venueName: "",
      phoneNumber: "",
      details: "",
      duration: ""
    })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control 
          type="date"
          name="date"
          value={date}
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={time}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Venue Name</Form.Label>
        <Form.Control
          type="text"
          name="venueName"
          value={venueName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Event Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="details"
          value={details}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Duration</Form.Label>
        <Form.Control 
          type="text"
          name="duration"
          value={duration}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Event
      </Button>

      {Object.keys(errors).length > 0 && (
        <Alert variant="danger">
          <ul className="mb-0">
            {Object.values(errors).map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Event 
        date={date}
        time={time}
        location={location}
        venueName={venueName}
        phoneNumber={phoneNumber}
        details={details}
        duration={duration}
      />

    </Form>
  );

}

export default CreateEvent;