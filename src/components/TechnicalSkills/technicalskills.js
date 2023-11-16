import React, { useState } from "react";
import "./technicalskills.css";
import skillsImage from "../../Assets/skillsImage.png";

const TechnicalSkills = ({
  technicalSkills,
  setTechnicalSkills,
  onSubmitSkills,
}) => {
  const [editMode, setEditMode] = useState(true);
  const [skillsData, setSkillsData] = useState({
    skills: [],
  });

  const handleSkills = (e) => {
    const updatedSkills = e.target.value.split("\n"); // Split the textarea value into an array
    setSkillsData({ skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    
    // Pass the updated skills to the parent component
    onSubmitSkills(skillsData.skills);
  };

  return (
    <div className="technical-skills">
      <div className="title-container">
        <img src={skillsImage} alt="Skills" className="skills" />
        <h2>List Technical Skills:</h2>
      </div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Skills:
            <textarea
              value={skillsData.skills.join("\n")} // Join the array into a string
              onChange={handleSkills}
            />
          </label>

          <button type="submit">
            {editMode ? "Add Technical Skills" : "Submit"}
          </button>
        </form>
      ) : (
        <div>
          <p>Skills:</p>
          <ul>
            {skillsData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TechnicalSkills;
