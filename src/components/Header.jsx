import logoheader from "../assets/images/Logoheader.png" 
import { NavLink } from "react-router-dom"

 
 const Header = () => {
 
    return (
        <div className="header">
            <img className="logoheader" src={logoheader} alt="LogoHeader" />
            <nav>
            <NavLink to="/accueil" className="nav-header__nav-link-home" activeClassName="nav-header__nav-link-home--active">
            Accueil
            </NavLink>

            <NavLink to="/about" className="nav-header__nav-link-about" activeClassName="nav-header__nav-link-about--active">
            A Propos
            </NavLink>
            </nav>
        </div>
    )
 }

 export default Header