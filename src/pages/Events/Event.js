import React from "react";
import Styles from "../../styles/Event.module.css";

const Event = ({
  date,
  createdAt,
  updatedAt,
  time,
  location,
  venueName,
  phoneNumber,
  details,
  duration
}) => {
  return (
    <div>
      <h2>{venueName}</h2>

      <p><strong>Date:</strong> {date}</p>

      <p><strong>Time:</strong> {time}</p>

      <p><strong>Location:</strong> {location}</p>

      <p><strong>Phone Number:</strong> {phoneNumber}</p>

      <p><strong>Details:</strong> {details}</p>

      <p><strong>Duration:</strong> {duration}</p>

      <p><strong>Created At:</strong> {createdAt}</p>

      <p><strong>Last Updated:</strong> {updatedAt}</p>
    </div>
  );
};

export default Event;