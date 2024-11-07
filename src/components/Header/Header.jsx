import "../Header/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="title">
        LET'S LEARN ENGLISH
      </Link>
    </header>
  );
}

export default Header;
