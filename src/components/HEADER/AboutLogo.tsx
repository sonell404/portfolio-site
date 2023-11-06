import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import AboutImage from "../../assets/icons/about.svg";

// Interface for the props
interface AboutLogoProps {
    fillColour: string;
    version: string;
}

const AboutLogo: React.FC<AboutLogoProps> = ({fillColour, version}) => {
  return (
    // About logo for the header or for the footer
    <div className={version === "header" ? "about-container" : "footer-about-container"}>
      <Link to="/about">
        <ReactSVG
          className={version === "header" ? "about" : "about-footer"}
          src={AboutImage}
          style={{ fill: fillColour }}
        />
      </Link>
    </div>
  );
}

export default AboutLogo;