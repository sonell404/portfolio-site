import { Link } from "react-router-dom";

export default function MainLogo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          className="logo"
          src="src/assets/icons/sonel-logo.svg"
          alt="logo"
        />
      </Link>
    </div>
  );
}
