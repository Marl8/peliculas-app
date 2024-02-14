import { PeliculasCard } from "./PeliculasCard"
import "./PeliculasGrid.css"
import { get } from "../../utils/HttpCliente"
import { useState, useEffect } from "react"
import { Spinners } from "./Spinners"
import { useQuery } from "../hooks/useQuery"


export const PeliculasGrid = () => {

    const [cargando, setCargando] = useState(true);
    const [peliculas, setPeliculas] = useState([]);

    const query = useQuery();
    const search = query.get("search"); 


    useEffect(() => {
        setCargando(true);

        const searchURL = search ? "/search/movie?query=" + search : "/discover/movie";
        
        get(searchURL).then((data) => {
            console.log(data);
            setPeliculas(data.results);
        setCargando(false);    
        });
    }, [search]);

    if(cargando){
        return <Spinners/>
    }

    return(
        <ul className="moviesGrid">
            {peliculas.map(pelicula =>(
                <PeliculasCard key={pelicula.id} pelicula = {pelicula}/>
            ))}            
        </ul>
    )
}