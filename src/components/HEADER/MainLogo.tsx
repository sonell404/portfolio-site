import { Link } from "react-router-dom";

// import main logo
import SonelLogo from "../../assets/icons/sonel-logo.svg";

export default function MainLogo() {
  return (
    // Link main logo to home page
    <div className="logo-container">
      <Link to="/">
        <img
          className="logo"
          src={SonelLogo}
          alt="logo"
          aria-label="Sonel Logo"
          role="img"
        />
      </Link>
    </div>
  );
} // End of MainLogo component
