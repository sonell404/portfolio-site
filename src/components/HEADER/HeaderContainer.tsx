import React, { useState, useRef, useEffect } from "react";

import MenuButtonContainer from "../MENU/MenuButtonContainer";
import MenuButton from "../MENU/MenuButton";
import Menu from "../MENU/Menu";

import "./HeaderContainer.css";

interface HeaderContainerProps {
  menuOpen?: boolean;
  children?: React.ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ menuOpen, children }) => {
  const withBorderRadius = "0 0 1.8rem 1.8rem";
  const [isMenuOpen, setIsMenuOpen] = useState(menuOpen || false);
  const [borderRadius, setBorderRadius] = useState(withBorderRadius);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.toggle("open", isMenuOpen);
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setBorderRadius(borderRadius === withBorderRadius ? "0" : withBorderRadius);
    if (menuButtonRef.current) {
      menuButtonRef.current.click();
    }
  };

  return (
    <div className="header-container">
      {children}
      <MenuButtonContainer
        className="menu-button-container"
        style={{ borderRadius }}
      >
        <MenuButton
          className="menu-button"
          onClick={handleMenuClick}
          ref={menuButtonRef}
        />
      </MenuButtonContainer>
      <Menu className="menu" isOpen={isMenuOpen} />
    </div>
  );
};

export default HeaderContainer;
