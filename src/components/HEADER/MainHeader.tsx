import "./MainHeader.css";

// MainHeaderProps interface - allow for children
interface MainHeaderProps {
  children?: React.ReactNode;
}

const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return (
    <header className="main-header">
      {children}
    </header>
  );
};
// End of MainHeader component

export default MainHeader;
