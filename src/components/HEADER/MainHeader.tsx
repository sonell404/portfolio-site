import "./Header.css";

// MainHeaderProps interface - allow for children
interface MainHeaderProps {
  children?: React.ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <header className="main-header" role="banner" aria-label="Main Header">
      {children}
    </header>
  );
};
// End of MainHeader component

export default MainHeader;
