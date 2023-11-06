import React from "react";

import "./MenuButtonContainer.css";

// MenuButtonContainerProps interface
interface MenuButtonContainerProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// MenuButtonContainer component
const MenuButtonContainer: React.FC<MenuButtonContainerProps> = ({className, children, style}) => {
  return (
    <div className={`${className ? className : "button-container"}`} style={style}>
      {children}
    </div>
  );
};
// End of MenuButtonContainer

export default MenuButtonContainer;
