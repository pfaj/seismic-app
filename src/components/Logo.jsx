import { Link } from "react-router-dom";
import logo from "../images/logoLight.webp";

function Logo({ logoType }) {
  return (
    <div className="logo">
      <Link to="/">
        <img className={logoType} src={logo} alt="Seismic Studios Logo" />
      </Link>
    </div>
  );
}

export default Logo;
