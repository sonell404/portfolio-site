import "./Footer.css";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer:React.FC<FooterProps> = ({children}) => {
  return (
    <footer className="footer-container">
      <div className="footer-about-container">
        {children}
      </div>
    </footer>
  );
}

export default Footer;