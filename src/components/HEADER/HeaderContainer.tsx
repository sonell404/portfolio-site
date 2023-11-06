import React from "react";

import "./HeaderContainer.css";

// HeaderContainerProps interface - allow for children 
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
// End of HeaderContainer component

export default HeaderContainer;
