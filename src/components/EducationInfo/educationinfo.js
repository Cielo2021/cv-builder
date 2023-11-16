import React, { useState } from "react";
import "./educationinfo.css";
import education from "../../Assets/education.png";

const EducationInfo = ({
  educationInfo,
  setEducationInfo,
  onSubmitEducation,
}) => {
  const [editMode, setEditMode] = useState(true);
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new education object
    const newEducation = {
      schoolName,
      studyTitle,
      graduationYear,
    };

    // Add the new education to the existing array of education
    const updatedEducationInfo = [...educationInfo, newEducation];
    setEducationInfo(updatedEducationInfo);

    // Pass the updated educationInfo to the parent component
    onSubmitEducation(updatedEducationInfo);

    // Clear the input fields when adding new education
    setSchoolName("");
    setStudyTitle("");
    setGraduationYear("");

    // Switch back to edit mode
    setEditMode(false);
  };

  return (
    <div className="education-info">
      <div className="left-section">
        <div className="title-container">
          <img src={education} alt="Education" className="education" />
          <h2>Education:</h2>
        </div>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <label>
              School Name:
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </label>

            <label>
              Study Title:
              <input
                type="text"
                value={studyTitle}
                onChange={(e) => setStudyTitle(e.target.value)}
              />
            </label>

            <label>
              Graduation Year:
              <input
                type="text"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
              />
            </label>

            <button type="submit">{editMode ? "Add Education" : "Submit"}
            </button>
          </form>
        ) : (
          <div>
            <p>School Name: {schoolName}</p>
            <p>Study Title: {studyTitle}</p>
            <p>Graduation Year: {graduationYear}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationInfo;
