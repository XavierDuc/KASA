import logoheader from "../assets/images/Logoheader.png" 
import { NavLink } from "react-router-dom"

 
 const Header = () => {
 
    return (
        <div className="header">
            <img className="logoheader" src={logoheader} alt="LogoHeader" />
            <nav>
            <NavLink to="/" className="nav-header__nav-link-home">
        Accueil
      </NavLink>
      <NavLink to="/about" className="nav-header__nav-link-about">
        A Propos
      </NavLink>
            </nav>
        </div>
    )
 }

 export default Header