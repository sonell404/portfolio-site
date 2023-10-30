import { Link } from "react-router-dom";

import SonelLogo from "../../assets/icons/sonel-logo.svg";

export default function MainLogo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          className="logo"
          src={SonelLogo}
          alt="logo"
        />
      </Link>
    </div>
  );
}