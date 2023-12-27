import React from "react";
import Styles from "../../styles/Event.module.css";
import Button from "react-bootstrap/Button";

const Event = ({
  id,
  date,
  createdAt,
  updatedAt,
  time,
  location,
  venueName,
  phoneNumber,
  details,
  duration,
  onDelete,
  onEdit,
}) => {
  return (
    <div className={Styles.eventContainer}>
      <h2 className={Styles.venueName}>{venueName}</h2>

      <p className={Styles.date}>
        <strong>Date:</strong> {date}
      </p>

      <p className={Styles.time}>
        <strong>Time:</strong> {time}
      </p>

      <p className={Styles.location}>
        <strong>Location:</strong> {location}
      </p>

      <p className={Styles.phoneNumber}>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>

      <p className={Styles.details}>
        <strong>Details:</strong> {details}
      </p>

      <p className={Styles.duration}>
        <strong>Duration:</strong> {duration}
      </p>

      <p className={Styles.createdAt}>
        <strong>Created At:</strong> {createdAt}
      </p>

      <p className={Styles.updatedAt}>
        <strong>Last Updated:</strong> {updatedAt}
      </p>

      {/* Edit and Delete Buttons */}
      <Button
        variant="secondary"
        onClick={() =>
          onEdit({
            id,
            date,
            time,
            location,
            venueName,
            phoneNumber,
            details,
            duration,
          })
        }
      >
        Edit
      </Button>
      <Button variant="danger" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </div>
  );
};

export default Event;
