import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Link, useLocation } from "react-router-dom";

// Import icons for menu
import HandDrawnIcon from "../../assets/icons/hand-drawn-icon.svg";
import PrintIcon from "../../assets/icons/print-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import GithubIcon from "../../assets/icons/github-icon.svg";
import MailIcon from "../../assets/icons/mail-icon.svg";
import CodeIcon from "../../assets/icons/code-icon.svg";

import "./Menu.css";

// MenuProps interface
interface MenuProps {
  className?: string;
  isOpen?: boolean;
}

// Menu component
const Menu: React.FC<MenuProps> = ({ className, isOpen }) => {
  // Get current url
  const location = useLocation();
  const currentUrl = location.pathname;

  // State for hovered item
  const [hoveredItem, setHoveredItemState] = useState("");
  // State for menu item description container at bottom of menu
  const [hasText, setHasText] = useState(false);
  // Show text description for menu item
  const setHoveredItem = (text: string) => {
    setHoveredItemState(text);
  };
  return (
    <>
      {/* Menu container */}
      <div
        className={`${className} ${isOpen ? "open" : ""}`}
        onMouseEnter={() => setHasText(true)}
        onMouseLeave={() => setHasText(false)}
        role="menu"
        aria-label="Main Menu"
      >
        {/* Menu */}
        <div>
          <ul>
            {/* Menu items */}
            <li
              // Set to currently active based on current url
              className={currentUrl.includes("hand-drawn-work") ? "active" : ""}
              // Set text in description container at bottom of menu
              onMouseEnter={() => setHoveredItem("HAND DRAWN")}
              onMouseLeave={() => setHoveredItem("")}
              role="menuitem"
              aria-label="Hand Drawn Work"
            >
              {/* Link to hand-drawn-work */}
              <Link to="/hand-drawn-work">
                <ReactSVG
                  id="hand-drawn-work"
                  className={
                    currentUrl.includes("hand-drawn-work")
                      ? "menu-item__active"
                      : "menu-item"
                  }
                  src={HandDrawnIcon}
                />
              </Link>
            </li>
            <li
              className={currentUrl.includes("print-work") ? "active" : ""}
              onMouseEnter={() => setHoveredItem("PRINT")}
              onMouseLeave={() => setHoveredItem("")}
              role="menuitem"
              aria-label="Print Work"
            >
              <Link to="/print-work">
                <ReactSVG
                  className={
                    currentUrl.includes("print-work")
                      ? "menu-item__active"
                      : "menu-item"
                  }
                  src={PrintIcon}
                />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("CODE")}
              onMouseLeave={() => setHoveredItem("")}
              role="menuitem"
              aria-label="Code Work"
            >
              <Link to="/code-work">
                <ReactSVG
                  className={
                    currentUrl.includes("code-work")
                      ? "menu-item__active"
                      : "menu-item"
                  }
                  src={CodeIcon}
                />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("GITHUB")}
              onMouseLeave={() => setHoveredItem("")}
              role="menuitem"
              aria-label="GitHub"
            >
              <Link to="https://github.com/sonell404" target="_blank">
                <ReactSVG className="menu-item" src={GithubIcon} />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("INSTAGRAM")}
              onMouseLeave={() => setHoveredItem("")}
              role="menuitem"
              aria-label="Instagram"
            >
              <Link to="https://www.instagram.com/son__l/" target="_blank">
                <ReactSVG className="menu-item" src={InstagramIcon} />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("MAIL")}
              onMouseLeave={() => setHoveredItem("")}
              role="menuitem"
              aria-label="Contact Me"
            >
              <Link to="/contact-me">
                <ReactSVG className="menu-item" src={MailIcon} />
              </Link>
            </li>
          </ul>
        </div>
        {/* Menu item description container at bottom of menu */}
        <div
          className="menu-footer"
          style={{ backgroundColor: hasText ? "transparent" : "white" }}
          role="status"
          aria-live="polite"
        >
          <p>{hoveredItem}</p>
        </div>
      </div>
    </>
  );
};
// End of Menu component

export default Menu;
