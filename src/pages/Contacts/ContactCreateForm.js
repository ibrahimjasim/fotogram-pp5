import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function ContactCreateForm() {
  const [errors, setErrors] = useState({});
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user name from the API
    const fetchUserName = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://drf-api1-df01c14b5fdd.herokuapp.com/api/user/");
        const data = await response.json();
        setUserName(data.name); // Assuming the API response has a "name" field
      } catch (error) {
        console.error("Error fetching user name:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  const { firstName, lastName, email, message } = contactData;

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validation logic (replace with your own validation)
    const validationErrors = {};
    if (!firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data (you can replace this with your own logic)
      //console.log("Form submitted:", contactData);

      // Clear form fields
      setContactData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control 
          type="text"
          name="firstName"
          value={userName || firstName}
          onChange={handleChange} 
          disabled={loading}
        />
        {errors.firstName && <Form.Text className="text-danger">{errors.firstName}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.lastName && <Form.Text className="text-danger">{errors.lastName}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          value={message}
          onChange={handleChange}
          disabled={loading}
        />
        {errors.message && <Form.Text className="text-danger">{errors.message}</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        Send Message
      </Button>

      {Object.keys(errors).length > 0 && (
        <Alert variant="danger">
          <ul className="mb-0">
            {Object.values(errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}
    </Form>
  );
}

export default ContactCreateForm;