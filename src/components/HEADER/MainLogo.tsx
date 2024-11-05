import { Link } from "react-router-dom";

export default function MainLogo() {
  return (
    // Link main logo to home page
    <div className="logo-container">
      <Link to="/">
        <p className="son-el-full">
          Sonel <span className="son-el">(son-el)</span>
        </p>
      </Link>
    </div>
  );
}
