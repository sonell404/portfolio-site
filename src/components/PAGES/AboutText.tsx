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
          <p
            className="professionTitle"
            onClick={() => handleClick(1)}
            role="button"
            aria-expanded={openIndex === 1}
            aria-controls="professionContainer1"
          >
            1 - developer
          </p>
          <div
            id="professionContainer1"
            className={`professionContainer ${openIndex === 1 ? "open" : ""}`}
            aria-hidden={openIndex !== 1}
          >
            <div className="professionContainer_inner">
              <p>[React, TypeScript, JavaScript, Java, SQL]</p>
            </div>
          </div>
          <p
            className="professionTitle"
            onClick={() => handleClick(2)}
            role="button"
            aria-expanded={openIndex === 2}
            aria-controls="professionContainer2"
          >
            2 - illustrator
          </p>
          <div
            id="professionContainer2"
            className={`professionContainer ${openIndex === 2 ? "open" : ""}`}
            aria-hidden={openIndex !== 2}
          >
            <div className="professionContainer_inner">
              <p>[Pen, Paper, Illustrator, Photoshop]</p>
            </div>
          </div>
          <p
            className="professionTitle"
            onClick={() => handleClick(3)}
            role="button"
            aria-expanded={openIndex === 3}
            aria-controls="professionContainer3"
          >
            3 - designer
          </p>
          <div
            id="professionContainer3"
            className={`professionContainer ${openIndex === 3 ? "open" : ""}`}
            aria-hidden={openIndex !== 3}
          >
            <div className="professionContainer_inner">
              <p>[Illustrator, Photoshop, InDesign] </p>
            </div>
          </div>
        </div>
        <Link className="contact-link" to="/contact-me">
          _
          <div className="contact-details">
            <p>Contact Me</p>
          </div>
        </Link>
      </p>
    </div>
  );
}

export default AboutText;
