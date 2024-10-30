import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import LogementPage from '../pages/LogementPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from "../pages/ErrorPage";


const App = () => {
  
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/accueil" />} />
      <Route path="/accueil" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/logement/:id" element={<LogementPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </HashRouter>
  )
}

export default App