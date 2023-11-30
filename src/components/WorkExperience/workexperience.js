import React, { useState } from "react";
import "./workexperience.css";
import work from "../../Assets/work.png";

const WorkExperience = ({
  workExperience,
  setWorkExperience,
  onSubmitWorkExperience,
}) => {
  const [editMode, setEditMode] = useState(true);
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [employmentDates, setEmploymentDates] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);

    // Create a new work experience object
    const newWorkExperience = {
      position,
      companyName,
      employmentDates,
      mainResponsibility: responsibilities,
    };

    // Add the new work experience to the existing array of work experiences
    const updatedWorkExperience = [...workExperience, newWorkExperience];
    setWorkExperience(updatedWorkExperience);

    // Pass the updated workExperience to the parent component
    onSubmitWorkExperience(updatedWorkExperience);

    // Clear the input fields when adding new work experience
    setPosition("");
    setCompanyName("");
    setEmploymentDates("");
    setResponsibilities("");

    // Switch back to edit mode
    setEditMode(false);
  };

  const handleEdit = () => {
    // Set edit mode to true when the Edit button is clicked
    setEditMode(true);
  };

  return (
    <div className="work-experience">
      <div className="left-section">
        <div className="title-container">
          <img src={work} alt="Work" className="work" />
          <h2>Work Experience:</h2>
        </div>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <label>
              Position:
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>

            <label>
              Company Name:
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>

            <label>
              Employment Dates:
              <input
                type="text"
                value={employmentDates}
                onChange={(e) => setEmploymentDates(e.target.value)}
              />
            </label>

            <label>
              Main Responsibilities (Max 500 characters):
              <textarea
                value={responsibilities}
                onChange={(e) => setResponsibilities(e.target.value)}
                maxLength={520}
                rows={4}
              ></textarea>
            </label>

            <button type="submit">
              {editMode ? "Add Work Experience" : "Submit"}
            </button>
          </form>
        ) : (
          <div>
            <p>Position: {position}</p>
            <p>Company Name: {companyName}</p>
            <p>Employment Dates: {employmentDates}</p>
            <p>Main Responsibilities: {responsibilities}</p>

            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
