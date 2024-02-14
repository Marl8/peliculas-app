import "./App.css"
import { LandingPage } from "./pages/LandingPage"
import { DetallePelicula } from "./pages/DetallePelicula"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {Buscador} from "./components/Buscador"

export const App = () => {

  return (
    <BrowserRouter>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom-dark">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <h1 className="title">Peliculas</h1>
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <Buscador />
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelicula/:id" element={<DetallePelicula />} />
      </Routes>

      <footer>
        <ul className="nav justify-content-center pb-3 mb-2">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About Us
            </a>
          </li>
        </ul>
          <p className="text-center text-body-secondary pb-3">© 2024 Company, Inc</p>
      </footer>
    </BrowserRouter>
  );
}

