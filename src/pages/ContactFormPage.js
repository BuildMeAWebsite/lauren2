import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // For external CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    preferredContactMethod: '',
    isSafeToEmail: '',
    reasonForContact: '',
    helpWith: '',
    interestedIn: {
      self: false,
      child: false,
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        interestedIn: {
          ...prevData.interestedIn,
          [name]: checked,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_1rfipk5', // Replace with your EmailJS service ID
        'template_7rso3dm', // Replace with your EmailJS template ID
        formData,
        'XFlC5uPb-LLkpIwdr' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            preferredContactMethod: '',
            isSafeToEmail: '',
            reasonForContact: '',
            helpWith: '',
            interestedIn: {
              self: false,
              child: false,
            },
          });
        },
        (error) => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className="contact-container">
      {isSubmitted ? (
        <div className="thank-you-message">
          Thank you! I will contact you within 1 business day.
        </div>
      ) : (
        <form onSubmit={sendEmail} className="contact-form">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="form-input"
            value={formData.phone}
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

          <label className="form-label">Which do you prefer to be contacted at? (Email or Phone)</label>
          <input
            type="text"
            name="preferredContactMethod"
            className="form-input"
            value={formData.preferredContactMethod}
            onChange={handleChange}
            required
          />

          <label className="form-label">Is it safe to email you at this address?</label>
          <input
            type="text"
            name="isSafeToEmail"
            className="form-input"
            value={formData.isSafeToEmail}
            onChange={handleChange}
            required
          />

          <label className="form-label">What brings you here today?</label>
          <textarea
            name="reasonForContact"
            className="form-textarea"
            value={formData.reasonForContact}
            onChange={handleChange}
            required
          ></textarea>

          <label className="form-label">I am interested in help with..</label>
          <textarea
            name="helpWith"
            className="form-textarea"
            value={formData.helpWith}
            onChange={handleChange}
            required
          ></textarea>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="self"
                checked={formData.interestedIn.self}
                onChange={handleChange}
              />
              Services for myself
            </label>

            <label>
              <input
                type="checkbox"
                name="child"
                checked={formData.interestedIn.child}
                onChange={handleChange}
              />
              Services for my child
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;