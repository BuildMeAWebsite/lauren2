import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // For external CSS (create this file)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        formData,
        'your_public_key' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className="contact-container">
      <form onSubmit={sendEmail} className="contact-form">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="form-label">Message</label>
        <textarea
          name="message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;