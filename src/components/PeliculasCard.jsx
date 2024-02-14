/* eslint-disable react/prop-types */ 
import "./PeliculasCard.css"
import {Link} from "react-router-dom"


export const PeliculasCard = ({pelicula}) => {

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
    return(
        <li className="moviesCard">
            <Link to = {`/pelicula/${pelicula.id}`}>
                <img className="moviesImage" src={imgURL} alt={pelicula.poster_path} />
                <div>
                    {pelicula.title}
                </div>
            </Link>
        </li>        
    )
}

