import React from 'react';

const Contact = ({
  firstName,
  lastName,
  email,
  subject,
  message
}) => {
  return (
    <div className="Contact">
      <h2>Contact Form</h2>

      <p>
        <strong>First Name:</strong> {firstName}
      </p>

      <p>
        <strong>Last Name:</strong> {lastName}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Subject:</strong> {subject}
      </p>

      <p>
        <strong>Message:</strong> {message}
      </p>

    </div>
  );
};

export default Contact;