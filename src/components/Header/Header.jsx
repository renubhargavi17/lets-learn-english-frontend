import "../Header/Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/languages.svg"

function Header() {
  return (
    <header className="header">
      <Link to="/" className="title">
        LET'S LEARN ENGLISH
      </Link>
      <img className="letsLogo" src={logo} alt="lets logo image"/>
    </header>
  );
}

export default Header;
