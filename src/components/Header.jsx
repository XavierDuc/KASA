import logoheader from "../assets/images/Logoheader.png" 
 
 const Header = () => {
    return (
        <div className="header">
            <img className="logoheader" src={logoheader} alt="LogoHeader" />
            <nav>
                <li className="liAcceuil"><a href="#">Acceuil</a></li>
                <li><a href="#">A propos</a></li>
            </nav>
        </div>
    )
 }

 export default Header