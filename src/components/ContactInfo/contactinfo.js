import React, { useState } from "react";
import "./contactinfo.css";
import contactIcon from "../../Assets/contact-icon.png";

const ContactInfo = ({ 
  contactInfo, 
  setContactInfo, 
  onSubmitContactInfo 
}) => {
  const [editMode, setEditMode] = useState(true);

  // Define the state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    professionalStatement: "",
  });

  const { name, email, phoneNumber, professionalStatement } = formData;

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the updated contactInfo to the parent component (App.js)
    onSubmitContactInfo(formData);

    // Clear the input fields when adding new contact info
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      professionalStatement: "",
    });

    // Switch back to edit mode
    setEditMode(false);
  };

  const handleChange = (e) => {
    // Update the formData state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-info">
      <div className="info-section">
        <div className="left-section">
          <div className="title-container">
            <img
              src={contactIcon}
              alt="Contact Icon"
              className="contact-icon"
            />
            <h2>Contact Information:</h2>
          </div>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </label>

              <label>
                Professional Statement (Max 500 characters):
                <textarea
                  name="professionalStatement"
                  value={professionalStatement}
                  onChange={handleChange}
                  maxLength={500}
                  rows={4}
                />
              </label>

              <button type="submit">
                {editMode ? "Add Contact" : "Submit"}
              </button>
            </form>
          ) : (
            <div>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone Number: {phoneNumber}</p>
              <p>Professional Statement: {professionalStatement}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
