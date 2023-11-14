import { useState } from "react";

import "./AboutText.css";
import { Link } from "react-router-dom";

// AboutText component
function AboutText() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-text-container">
      <p className="about-text">
        <p>
          Sonel <span className="son-el">(son-el)</span>
        </p>
        <div className="professions">
          <p className="professionTitle" onClick={() => handleClick(1)}>
            1 - developer
          </p>
          <div
            className={`professionContainer ${openIndex === 1 ? "open" : ""}`}
          >
            <div className="professionContainer_inner">
              <p>[React, TypeScript, JavaScript, Java, SQL]</p>
            </div>
          </div>
          <p className="professionTitle" onClick={() => handleClick(2)}>
            2 - illustrator
          </p>
          <div
            className={`professionContainer ${openIndex === 2 ? "open" : ""}`}
          >
            <div className="professionContainer_inner">
              <p>[Pen, Paper, Illustrator, Photoshop]</p>
            </div>
          </div>
          <p className="professionTitle" onClick={() => handleClick(3)}>
            3 - designer
          </p>
          <div
            className={`professionContainer ${openIndex === 3 ? "open" : ""}`}
          >
            <div className="professionContainer_inner">
              <p>[Illustrator, Photoshop, InDesign] </p>
            </div>
          </div>
        </div>
        <Link to="/contact-me">
          <div className="contact-details">
            <p>Contact Me</p>
          </div>
        </Link>
        {/* <div className="contact-details"><p>+(353)-89-976-9880</p><p>sonell404@gmail.com</p></div> */}
      </p>
    </div>
  );
}

export default AboutText;
