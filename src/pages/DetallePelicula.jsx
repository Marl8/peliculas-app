import { get } from "../../utils/HttpCliente";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetallePelicula.css"
import { Spinners } from "../components/Spinners";

export const DetallePelicula = () => {
    
    const [cargando, setCargando] = useState(true);
    const [pelicula, setPelicula] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        setCargando(true);
        get(`/movie/${id}`).then((data) => {
            console.log(data)
            setPelicula(data);
        setCargando(false);    
        })
    },[id]) // al pasarle el ID tenemos que validr que pelicula no se sea NULL 

    if(cargando){
        return <Spinners/>
    }


    /**
     * Si es Null retorna y sale del método y sino redendiza la página
     */
    if(!pelicula){
        return null; //Para evitar el error de pelicula NULL
    }

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
    const imgCOMPANIA = 'https://image.tmdb.org/t/p/w300/';
    const imgBACKGROUND = `https://image.tmdb.org/t/p/w300${pelicula.backdrop_path}`;


    return(
        <div className="contenedorDetalle" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgBACKGROUND})`,
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundSize: "cover"}}>
            <div className="img-pelicula">
                <img className="col" src={imgURL} alt={pelicula.title} />
            </div>
            <div className="peliculaDetalle col">
                <p className="item">
                    <strong>Title: </strong> 
                    <span className="titlePelicula">{pelicula.title}</span>
                </p>
                <p className="">
                    <strong>Descripción: </strong>
                    {pelicula.overview} 
                </p>    
                <p>
                    <strong>Genero: </strong>
                    {pelicula.genres.map((genero) => genero.name).join(" - ")}
                </p>
                <p>
                    <strong>Original Language: </strong>
                    {pelicula.original_language}
                </p>
                <p>
                    <strong>Fecha de Lanzamiento: </strong>
                    {pelicula.release_date}
                </p>
                <p>
                    <strong>Compañias Productoras: </strong>
                    {pelicula.production_companies.map((prod) => prod.name).join(" - ")}
                </p>
                <div className="logo_container">
                        {pelicula.production_companies.filter((prod) => prod.logo_path != null).map((prod) =>  
                        <img className="logosCompanias" key={prod.id} src={imgCOMPANIA+prod.logo_path} alt=""/>)}
                </div>
            </div>
        </div>   
    )
}
