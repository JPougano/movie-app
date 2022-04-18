import React, { useEffect , useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./style.css"


export default function Details(){

    const {id} = useParams()
    const [selectedMovie, setSelectedMovie] = useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0d1c1a6d4be12eb98827b466787e5608&language=en-US`)
            .then(res => res.json())
            .then(data => {
                const {title, overview, poster_path, release_date} = data;

                const movie = {
                    title: title,
                    sinopse: overview,
                    image: `https://image.tmdb.org/t/p/w500/${poster_path}`,
                    releaseDate: release_date
                }

                setSelectedMovie(movie)
            })
    },[id])

    return (
        <section className="details--container">
            <img className="details--image" src={selectedMovie.image} alt="Movie's poster image"/>
            <article className="details--content--subcontainer">
                <h2>{selectedMovie.title}</h2>
                <p>{selectedMovie.sinopse}</p>
                <p className="details--released">{`Release date: ${selectedMovie.releaseDate}`}</p>
                <Link to="/">
                    <button className="details--btn">Go back</button>
                </Link>
            </article>
        </section>
    )
}
