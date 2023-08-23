import React from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import HandDrawnImage from "../../assets/icons/hand-drawn-icon.svg";
import PrintImage from "../../assets/icons/print-icon.svg";

interface MenuProps {
  isOpen: boolean;
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ isOpen, className }) => {
  return (
    <>
      <div className={className} style={{ display: isOpen ? "block" : "none" }}>
        <ul>
          <li>
            <img src="src/assets/icons/hand-drawn-icon.svg" alt="hand-drawn" />
          </li>
          <li>
            <img src="src/assets/icons/print-icon.svg" alt="print" />
          </li>
          <li>
            <img src="src/assets/icons/instagram-icon.svg" alt="instagram" />
          </li>
          <li>
            <img src="src/assets/icons/github-icon.svg" alt="github" />
          </li>
          <li>
            <img src="src/assets/icons/mail-icon.svg" alt="mail" />
          </li>
          <li>
            <img src="src/assets/icons/phone-icon.svg" alt="phone" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
