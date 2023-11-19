import React, { useState, forwardRef, Ref } from "react";

import MenuButtonIcon from "../../assets/icons/menu-button.svg";

import "./MenuButton.css";

// MenuButtonProps interface
interface MenuButtonProps {
  onClick?: () => void;
  className?: string;
}

// MenuButton component
// eslint-disable-next-line react-refresh/only-export-components
const MenuButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  MenuButtonProps
> = (
  { onClick, className },
  // Ref for button element
  ref: Ref<HTMLButtonElement>
) => {
  // State for rotation
  const [isRotated, setIsRotated] = useState(false);

  // Handle click
  const handleClick = () => {
    // Rotate when clicked
    setIsRotated(!isRotated);
    // Execute function passed to onClick once it is truthy
    onClick && onClick();
  };

  return (
    <>
      <button
        ref={ref}
        className={`${className ? className : "button"} ${
          isRotated ? "rotate" : ""
        }`}
        onClick={handleClick}
        aria-label="menu button"
        aria-expanded={isRotated ? "true" : "false"}
      >
        <img src={MenuButtonIcon} alt="menu" />
      </button>
    </>
  );
};
// End of MenuButton

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(MenuButton);
