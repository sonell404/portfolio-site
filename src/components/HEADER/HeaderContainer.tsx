import React from "react";

import "./HeaderContainer.css";

interface HeaderContainerProps {
  children?: React.ReactNode;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ children }) => {
  

  return (
    <div className="header-container">
      {children}
    </div>
  );
};

export default HeaderContainer;
