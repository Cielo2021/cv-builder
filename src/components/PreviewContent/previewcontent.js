import { useEffect } from "react";

import JsPDF from "jspdf";


const PreviewContent = ({ content }) => {
  useEffect(() => {
    const generatePDF = () => {
      const report = new JsPDF("portrait", "pt", "a4");
      report.html(content, {
        callback: () => {
          report.save("resume.pdf");
        },
      });
    };

    generatePDF();
  }, [content]);

  return null; // This component doesn't render anything visible
};

export default PreviewContent;
