import React from "react";

interface MenuButtonProps {
  onClick?: () => void;
  className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, className }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        <img
          src="src/assets/icons/menu-button.svg"
          alt="menu"
        />
      </button>
    </>
  );
};

export default MenuButton;
