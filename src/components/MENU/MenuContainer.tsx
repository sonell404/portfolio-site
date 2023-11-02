import { useEffect, useRef, useState } from "react";

import MenuBackground from "./MenuBackground";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuButtonContainer from "./MenuButtonContainer";

import "./MenuContainer.css";

interface MenuContainerProps {
  menuOpen?: boolean;
  children?: React.ReactNode;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ menuOpen }) => {
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
    <>
      {/* <div className={`menu-background-cover-layer ${isMenuOpen ? "on" : ""}`}></div> */}
      <MenuBackground />
      <div className={`menu-container ${isMenuOpen ? "active" : ""}`}>
        <MenuButtonContainer style={{ borderRadius }}>
          <MenuButton onClick={handleMenuClick} ref={menuButtonRef} />
        </MenuButtonContainer>
        <Menu className="menu" isOpen={isMenuOpen} />
      </div>
    </>
  );
};

export default MenuContainer;
