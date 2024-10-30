import { NavLink } from "react-router-dom"

const ErrorDisplay = () => {

    return (
            <div className="error-main">
                <p className="text-404">404</p>
                <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className="error-link-to-home">
                Retourner sur la page d'accueil
      </NavLink>
            </div>
      
    )

}

export default ErrorDisplay