import "../Header/Header.scss"
import logo from "../../assets/logo/languages.svg"

function Header(){
    return(
        <header className="header">
        <h1 className="title">LET'S LEARN ENGLISH</h1>
        <img src={logo} alt="Let's Learn English Logo" className="letsLogo"/>
        
        </header>
    )
}

export default Header