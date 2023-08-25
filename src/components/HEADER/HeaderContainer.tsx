import React, { useState, useRef } from "react";
import MainHeader from "./MainHeader";
import "./HeaderContainer.css";
import MenuButtonContainer from "../MENU/MenuButtonContainer";
import MenuButton from "../MENU/MenuButton";
import Menu from "../MENU/Menu";

interface HeaderContainerProps {
  menuOpen?: boolean;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ menuOpen }) => {
  const withBorderRadius = "0 0 1.8rem 1.8rem";
  const [isMenuOpen, setIsMenuOpen] = useState(menuOpen || false);
  const [borderRadius, setBorderRadius] = useState(withBorderRadius);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setBorderRadius(borderRadius === withBorderRadius ? "0" : withBorderRadius);
    if (menuButtonRef.current) {
      menuButtonRef.current.click();
    }
  };

  return (
    <div className="header-container">
      <MainHeader />
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
