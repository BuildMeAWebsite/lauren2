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

    // Custom validation for email and phone
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      alert('Please enter a valid phone number (10-15 digits).');
      return;
    }

    // Rest of the EmailJS logic
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      preferredContactMethod: formData.preferredContactMethod,
      isSafeToEmail: formData.isSafeToEmail,
      reasonForContact: formData.reasonForContact,
      servicesForSelf: formData.interestedIn.self ? 'Yes' : 'No',
      servicesForChild: formData.interestedIn.child ? 'Yes' : 'No',
    };

    emailjs
      .send(
        'service_1rfipk5',
        'template_7rso3dm',
        templateParams,
        'XFlC5uPb-LLkpIwdr'
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

          <label className="form-label">
            Which do you prefer to be contacted at? (Email or Phone)
          </label>
          <input
            type="text"
            name="preferredContactMethod"
            className="form-input"
            value={formData.preferredContactMethod}
            onChange={handleChange}
            required
          />

          <label className="form-label">Is it safe to call you at this number?</label>
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
          ></textarea>

          <label className="form-label">I am interested in help for..</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="self"
                checked={formData.interestedIn.self}
                onChange={handleChange}
                required
              />
              Services for myself
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="child"
                checked={formData.interestedIn.child}
                onChange={handleChange}
                required
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