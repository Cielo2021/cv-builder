import React from "react";
import "./preview.css";

const Preview = ({
  preview,
  contactInfo,
  technicalSkills,
  educationInfo,
  workExperience,
}) => {
  
  return (
    <div className="preview">
      {preview ? (
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      ) : (
        <>
          <h1>Professional Resume</h1>

          {/* Display General Information */}
          <div className="section">
            <h2>Contact Information</h2>
            <p>{contactInfo.name}</p>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phoneNumber}</p>
            <p>{contactInfo.professionalStatement}</p>
          </div>

          {/* Display Technical Skills */}
          <div className="section">
            <h2>Technical Skills</h2>
            <p>{technicalSkills.skills}</p>
          </div>

          {/* Display Education */}
          <div className="section">
            <h2>Education</h2>
            {educationInfo.map((education, index) => (
              <div className="educationContainer" key={index}>
                <p>{education.schoolName}</p>
                <p>{education.studyTitle}</p>
                <p>{education.graduationYear}</p>
              </div>
            ))}
          </div>

          {/* Display Experience */}
          <div className="section">
            <h2>Work Experience</h2>
            <div className="experiences">
              {workExperience.map((experience, index) => (
                <div className="experienceContainer" key={index}>
                  <p>{experience.position}</p>
                  <p>{experience.companyName}</p>
                  <p>{experience.employmentDates}</p>
                  <p>{experience.mainResponsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
