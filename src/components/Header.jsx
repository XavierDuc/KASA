import logoheader from "../assets/images/Logoheader.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img className="logoheader" src={logoheader} alt="LogoHeader" />
            <nav>
                <NavLink
                    to="/accueil"
                    className={({ isActive }) =>
                        isActive ? "nav-header__nav-link-home nav-header__nav-link-home--active" : "nav-header__nav-link-home"
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "nav-header__nav-link-about nav-header__nav-link-about--active" : "nav-header__nav-link-about"
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;
