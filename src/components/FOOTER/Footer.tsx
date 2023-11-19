import "./Footer.css";

// Interface for the Footer component - Allow children to be passed in as props
interface FooterProps {
  children?: React.ReactNode;
}

// Footer component - renders the children passed in as props
const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="footer-container" role="contentinfo" aria-label="Footer">
      <div
        className="footer-about-container"
        role="navigation"
        aria-label="Footer Navigation"
      >
        {children}
      </div>
    </footer>
  );
}; // end of Footer component

export default Footer;
