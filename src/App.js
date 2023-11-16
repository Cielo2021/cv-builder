import React, { useState } from "react";
import Header from "./components/Header/header";
import ContactInfo from "./components/ContactInfo/contactinfo";
import TechnicalSkills from "./components/TechnicalSkills/technicalskills";
import EducationInfo from "./components/EducationInfo/educationinfo";
import WorkExperience from "./components/WorkExperience/workexperience";
import Preview from "./components/Preview/preview";
import html2pdf from "html2pdf.js";

import "./style.css";

function App() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    professionalStatement: "",
  });

  const [technicalSkills, setTechnicalSkills] = useState({
    skills: "",
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      schoolName: "",
      studyTitle: "",
      graduationYear: "",
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      position: "",
      companyName: "",
      employmentDates: "",
      mainResponsibility: "",
    },
  ]);

  // Define the function to update technicalSkills
  const handleSkillsSubmit = (skills) => {
    setTechnicalSkills({ skills });
  };

  // Define the function to update generalInfo
  const handleContactInfoSubmit = (info) => {
    setContactInfo(info);
  };

  // Define the function to update educationInfo
  const handleEducationSubmit = (education) => {
    setEducationInfo(education);
  };

  // Define the function to update workExperience
  const handleWorkExperienceSubmit = (experience) => {
    setWorkExperience(experience);
  };

  const [preview, setPreview] = useState(""); // State to store preview content

  // Define a function to update the preview content
  const updatePreview = (content) => {
    setPreview(content);
  };

  const generatePDF = () => {
    const options = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },

      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf()
      .from(preview)
      .set(options)
      .outputPdf((pdf) => {
        const blob = new Blob([pdf.output("blob")], {
          type: "application/pdf",
        });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      });
  };

  return (
    <div className="App">
      <Header onGeneratePDF={generatePDF} />

      <div className="forms-container">
        <div className="forms">
          <ContactInfo
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            onSubmitContactInfo={handleContactInfoSubmit}
          />

          <TechnicalSkills
            technicalSkills={technicalSkills}
            setTechnicalSkills={setTechnicalSkills}
            onSubmitSkills={handleSkillsSubmit}
          />

          <EducationInfo
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            onSubmitEducation={handleEducationSubmit}
          />

          <WorkExperience
            workExperience={workExperience}
            setWorkExperience={setWorkExperience}
            onSubmitWorkExperience={handleWorkExperienceSubmit}
          />
        </div>

        <div className="preview-container">
          <Preview
            contactInfo={contactInfo}
            technicalSkills={technicalSkills}
            educationInfo={educationInfo}
            workExperience={workExperience}
            preview={preview}
            onUpdatePreviewContent={updatePreview}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
