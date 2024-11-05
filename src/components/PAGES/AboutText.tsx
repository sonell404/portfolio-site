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
        <div className="professions">
          <p
            className="professionTitle"
            onClick={() => handleClick(1)}
            role="button"
            aria-expanded={openIndex === 1}
            aria-controls="professionContainer1"
          >
            01. developer
          </p>
          <div
            id="professionContainer1"
            className={`professionContainer ${openIndex === 1 ? "open" : ""}`}
            aria-hidden={openIndex !== 1}
          >
            <div className="professionContainer_inner">
              <p>[HTML, CSS, JS, TS, React]</p>
            </div>
          </div>
          <p
            className="professionTitle"
            onClick={() => handleClick(2)}
            role="button"
            aria-expanded={openIndex === 2}
            aria-controls="professionContainer2"
          >
            02. illustrator
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
            03. designer
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
        <div className="about-separator">
        _
        </div>
        <Link className="contact-link" to="/contact-me">
          <div className="contact-details">
            <p>Contact Me</p>
          </div>
        </Link>
      </p>
    </div>
  );
}

export default AboutText;
