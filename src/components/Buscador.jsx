import { FaSearch } from "react-icons/fa";
import "./Buscador.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Buscador = () => {

    const [txtBuscador, setBuscador] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/peliculas-app/?search=${txtBuscador}`)
        setBuscador("");
    }

    return(
        <form className="containerBuscador" onSubmit={handleSubmit}>
            <div className="cajaBuscador">
                {/* El value captura el valor inicial del useState y el setBuscador con el evento OnChange caputura los cambios de lo que escribimos */}
                <input type="text" className="inputBuscador" value={txtBuscador} onChange={(e) => setBuscador(e.target.value)}/>
                <button type="submit" className="botonBuscador"><FaSearch /></button>
            </div>
        </form>
    )
}