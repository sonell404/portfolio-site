import "./MainHeader.css";

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

export default MainHeader;
